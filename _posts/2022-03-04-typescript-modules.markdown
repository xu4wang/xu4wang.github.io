---
layout:     post
title:      "Typescript中的模块"
subtitle:   "Typescript modules"
date:       2022-03-04
author:     "awis.me"
header-img: "img/mud.jpg"
tags:
    - Typescript
---

和python不同， Typescript/Javascript模块导入导出方式五花八门。 

目前因为ES6已经标准化，推荐用import/export。 
历史遗留的require/exports由于存在数目巨大的npm库，也还将长期共存。

## 1. ES6模块导入导出 

###  1.1. 语法

三种export方式，两种import方式

| export | import |
|----  | -------  |
| export var; | import {var} from module |
| export {var}; |import {var} from module |
| export default var |import var from module | 

另外可以用 
```js
import * as module_alias from module 
```
导入模块所有export的变量到一个对象 module_alias 中。

### 1.2. 例子

#### 1.2.1. testEs6Export.ts

```js
'use strict'
//导出变量
export const a = '100';  

 //导出方法
export const dogSay = function(){ 
    console.log('wang wang');
}

 //导出方法第二种
function catSay(){
   console.log('miao miao'); 
}
export { catSay };   

//export default导出
const m = 100;
export default m; 
//export defult const m = 100;// 这里不能写这种格式。
```

#### 1.2.2. index.ts

```js
import { dogSay, catSay } from './testEs6Export'; //导出了 export 方法 
import m from './testEs6Export';  //导出了 export default 

import * as testModule from './testEs6Export'; //as 集合成对象导出
```

## 2. CommonJS 模块导入导出

### 2.1. 语法

模块中有module.export对象，里面存放的就是export的变量。

```js
exports = module.exports = {};
```

另外有一个exports，是对module.exports的引用。

使用require来把模块export的变量取出来。 

> 注意： 实际export是module.exports 所指向的变量。

### 2.2. 例子
```js
//utils.js
let a = 100;

console.log(module.exports); //能打印出结果为：{}
console.log(exports); //能打印出结果为：{}

exports.a = 200; //这里辛苦劳作帮 module.exports 的内容给改成 {a : 200}

exports = '指向其他内存区'; //这里把exports的指向指走

//test.js

var a = require('/utils');
console.log(a) // 打印为 {a : 200} 
```

##  3. 参考资料

- https://segmentfault.com/a/1190000010426778
