---
layout:     post
title:      "OAuth2 应用实践：Directus集成钉钉登录的尝试"
subtitle:   "Unable to add Dingtalk OAuth Login into Directus"
date:       2022-02-27
author:     "awis.me"
header-img: "img/leaf.jpg"
tags:
    - Open Source
    - GitHub
    - 钉钉
    - OAuth
    - Directus
---

## 1. 项目简介

这个小项目预期结果是让 Directus 支持使用钉钉账号来登录。 
在了解OAuth2协议后(参见上一篇blog，参考资料1），已经有足够知识储备来实施。 Directus 原生支持使用GitHub登录， 所以，解决思路是先从GitHub入手。按下面步骤进行：

- 配置Directus使用GitHub账号登录，熟悉Directus对OAuth的标准支持功能
- 配置Directus使用钉钉账号登录，由于钉钉的协议实现和RFC6749/GitHub有不同，这里有可能需要见招拆招
- 上线Directus到服务器环境，在钉钉的PC版和手机版验证

## 2. 环境配置

在本地用ngrok暴漏出一个服务，来接受OAuth服务器的redirect。

```shell
ngrok http 8055
```

得到 https://445a-240e-47c-30b0-3b10-600e-ea25-cde5-2334.ngrok.io/ 作为外网域名来访问本机8055端口的directus。

## 3. Directus 使用 GitHub账号登录

按参考资料2中配置参数。以下配置中，对每一个新的GitHub授权用户，Directus在登录过程中会使用用户email自动创建一个Directus用户，并且将其角色赋值为AUTH_GITHUB_DEFAULT_ROLE_ID。

```
AUTH_PROVIDERS="github"
AUTH_GITHUB_DRIVER="oauth2"
AUTH_GITHUB_CLIENT_ID="7e....ae"
AUTH_GITHUB_CLIENT_SECRET="d5.......d9"
AUTH_GITHUB_AUTHORIZE_URL="https://github.com/login/oauth/authorize"
AUTH_GITHUB_ACCESS_URL="https://github.com/login/oauth/access_token"
AUTH_GITHUB_PROFILE_URL="https://api.github.com/user"
AUTH_GITHUB_ALLOW_PUBLIC_REGISTRATION="true"
AUTH_GITHUB_DEFAULT_ROLE_ID="0f5f1b5a-106f-4ec7-a8b8-6f11482a060f"
AUTH_GITHUB_ICON="github"
# AUTH_GITHUB_EMAIL_KEY="email"
# AUTH_GITHUB_IDENTIFIER_KEY="email"
```

重启Directus让配置生效后，可以看到登录界面的GitHub选项。
![picture 1](/img/1645953759125.png)  

选择授权后，成功登录Directus。 检查Directus中新生成的用户和权限正常。
![picture 2](/img/1645953939304.png)  

## 4. Directus 使用钉钉账号登录的尝试

先照猫画虎配置下。

```
AUTH_PROVIDERS="github, dingtalk"
...
...

AUTH_DINGTALK_DRIVER="oauth2"
AUTH_DINGTALK_CLIENT_ID="ding...txt"
AUTH_DINGTALK_CLIENT_SECRET="c6rCT...h4ohKlq5oz"
AUTH_DINGTALK_AUTHORIZE_URL="https://login.dingtalk.com/oauth2/auth"
AUTH_DINGTALK_ACCESS_URL="https://api.dingtalk.com/v1.0/oauth2/userAccessToken"
AUTH_DINGTALK_PROFILE_URL="https://api.dingtalk.com/v1.0/contact/users/me"
AUTH_DINGTALK_ALLOW_PUBLIC_REGISTRATION="true"
AUTH_DINGTALK_DEFAULT_ROLE_ID="0f5f1b5a-106f-4ec7-a8b8-6f11482a060f"
AUTH_DINGTALK_ICON="alipay"
#AUTH_DINGTALK_EMAIL_KEY="email"
#AUTH_DINGTALK_IDENTIFIER_KEY="email"
```

![picture 3](/img/1645972456212.jpg)  

点击Log In with Dingtalk可以正常授权， 但授权后被redirect到了
```
/admin/login?reason=INVALID_USER
```
怀疑是钉钉重定向回来的链接没有code参数（参见上一篇协议解析，钉钉是用的authCode参数），第一时间先在社区开个[issue](https://github.com/directus/directus/discussions/11879)看看有没有其他人碰到过。 

同时，对oauth2的driver做了一个临时补丁， 当有authCode时候， 就把authCode赋值给code。

```javascript
    try {
        res.clearCookie(`oauth2.${providerName}`);

        if ( req.query.authCode) {
            req.query.code = req.query.authCode
        }

        if (!req.query.code || !req.query.state) {
            logger.warn(`[OAuth2] Couldn't extract OAuth2 code or state from query: ${JSON.stringify(req.query)}`);
        }

        authResponse = await authenticationService.login(providerName, {
            code: req.query.code,
            codeVerifier: verifier,
            state: req.query.state,
        });
    } catch (error: any) {
        ...
```
再次重启directus后， 补丁似乎生效了， 这次被重定向到了。
```
/admin/login?reason=SERVICE_UNAVAILABLE
```
OAuth2协议的第一步获取code已经通过了。 SERVICE_UNAVAILABLE 是获取token出问题，还是取profile出问题了？

注意到钉钉获取token的请求中，参数名称是clientId，clientSecret。 而GitHub是client_id,client_secret. 另外钉钉还需要一个额外的grantType. 

```
{
  "clientId" : "ding your id",
  "clientSecret" : "your secret",
  "code" : "6b427e8bfab83e93bedd13f16a430702",
  "grantType" : "authorization_code"
}
```

把clientId，clientSecret和grantType作为参数配置到directus请求中。

```
AUTH_DINGTALK_PARAMS="{\"clientId\": \"din...txt\",\"clientSecret\": \"d56....58bd9\",\"grantType\": \"authorization_code\"}"

```

仍然是SERVICE_UNAVAILABLE。 检查driver，发现问题出在下面：
```javascript
    try {
        tokenSet = await this.client.oauthCallback(
            this.redirectUrl,
            { code: payload.code, state: payload.state },
            { code_verifier: payload.codeVerifier, state: generators.codeChallenge(payload.codeVerifier) }
        );
        userInfo = await this.client.userinfo(tokenSet.access_token!);
    } catch (e) {
        throw handleError(e);
    }
```
上面代码抛出异常了，原因是HTTP请求得到的响应是400. 应该是钉钉OAuth服务器不识别Directus发过去的消息。

上面代码执行背景是：
- 在oauth2 driver中，配置了express路由处理钉钉redirect过来的code，在处理过程中，需要认证用户（认证成功会完成登录，发放JWT token）；
- 用户认证和driver无关，用一个通用的AuthenticationService.login服务处理， 在服务中，又调用driver的getUserID方法来获取userId；
- 对于oauth2 driver来说，网页上没传过来用户名密码，其唯一输入就是钉钉redirect过来的code，需要通过OAuth接口，把code转换成token，然后读取用户信息，才能知道userID。

OAuth2 Driver使用了[openid-client](https://github.com/panva/node-openid-client) 和服务器通信。其client也在driver中初始化：

```javascript
    const issuer = new Issuer({
        authorization_endpoint: authorizeUrl,
        token_endpoint: accessUrl,
        userinfo_endpoint: profileUrl,
        issuer: additionalConfig.provider,
    });

    this.client = new issuer.Client({
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uris: [this.redirectUrl],
        response_types: ['code'],
    });
```

所以问题细化成了 [openid-client](https://github.com/panva/node-openid-client) 和钉钉的兼容性。再具体一些，是如何用[oauthCallback函数](https://github.com/panva/node-openid-client/tree/main/docs)来从钉钉处获取token。

看了下openid-client的实现，其和OAuth服务器交互时候，POST的表单数据是按照RFC6749中定义的参数名称硬编码的。 必然和钉钉的要求不匹配。 使用openid-client没有办法兼容钉钉。 将调研结果和directus OAuth Driver的作者在[Integrating Dingtalk as OAuth2 server](http://github.com/directus/directus/discussions/11881) 做了详细的探讨。

## 5. 结论

原定计划无法达成。 原因是钉钉的OAuth实现和标准不兼容。而Directus使用了第三方的OAuth库来和OAuth服务器通信。 基于标准的openid-client和说方言的钉钉OAuth服务器无法沟通。

考虑两种方案：
1. 从directus标准oauth2 driver中继承，实现一个钉钉方言版本的oauth2-dingtalk driver， 或者
2. 实现一个proxy，来做钉钉的OAuth方言和标准OAuth2协议的翻译

倾向于方案2， 相当于给钉钉做一个协议封装层，按照标准转换下参数格式。这样后续有其他系统需要集成钉钉登录，也可以用的上。

后续完成后再补记。

## 6. 补记

参考[apiproxy](https://github.com/xu4wang/apiproxy)) 使用上述方案2实现了钉钉免密登录。

## 7. 参考资料

- [OAuth2 Protocol Illustrated](https://awis.me/2022/02/26/oauth/)
- [Directus Authentication Configuration](https://docs.directus.io/configuration/config-options/#authentication)
- [node openid client](https://github.com/panva/node-openid-client)
- [钉钉Nodejs SDK](https://www.npmjs.com/package/@alicloud/dingtalk)
- [钉钉开放平台开发文档中获得token的示例 ](https://open.dingtalk.com/document/orgapp-server/obtain-user-token)
- [Integrating Dingtalk as OAuth2 server](http://github.com/directus/directus/discussions/11881)
- [apiproxy](https://github.com/xu4wang/apiproxy)
