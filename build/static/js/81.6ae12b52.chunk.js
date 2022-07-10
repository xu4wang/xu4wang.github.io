(this["webpackJsonpmolecule-demo"]=this["webpackJsonpmolecule-demo"]||[]).push([[81],{884:function(e,n,t){"use strict";t.r(n),t.d(n,"setupMode",(function(){return Ge}));var r,i,o,a,s,u,c,d,f,g,l,h,p,v,m,b,_,k,w,C,y,E,A,x,I,S,T=t(328),R=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=window.setInterval((function(){return n._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=T.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._getClient().then((function(n){e=n})).then((function(e){return n._worker.withSyncedResources(t)})).then((function(n){return e}))},e}();!function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647}(r||(r={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(i||(i={})),function(e){e.create=function(e,n){return e===Number.MAX_VALUE&&(e=i.MAX_VALUE),n===Number.MAX_VALUE&&(n=i.MAX_VALUE),{line:e,character:n}},e.is=function(e){var n=e;return de.objectLiteral(n)&&de.uinteger(n.line)&&de.uinteger(n.character)}}(o||(o={})),function(e){e.create=function(e,n,t,r){if(de.uinteger(e)&&de.uinteger(n)&&de.uinteger(t)&&de.uinteger(r))return{start:o.create(e,n),end:o.create(t,r)};if(o.is(e)&&o.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+r+"]")},e.is=function(e){var n=e;return de.objectLiteral(n)&&o.is(n.start)&&o.is(n.end)}}(a||(a={})),function(e){e.create=function(e,n){return{uri:e,range:n}},e.is=function(e){var n=e;return de.defined(n)&&a.is(n.range)&&(de.string(n.uri)||de.undefined(n.uri))}}(s||(s={})),function(e){e.create=function(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}},e.is=function(e){var n=e;return de.defined(n)&&a.is(n.targetRange)&&de.string(n.targetUri)&&(a.is(n.targetSelectionRange)||de.undefined(n.targetSelectionRange))&&(a.is(n.originSelectionRange)||de.undefined(n.originSelectionRange))}}(u||(u={})),function(e){e.create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},e.is=function(e){var n=e;return de.numberRange(n.red,0,1)&&de.numberRange(n.green,0,1)&&de.numberRange(n.blue,0,1)&&de.numberRange(n.alpha,0,1)}}(c||(c={})),function(e){e.create=function(e,n){return{range:e,color:n}},e.is=function(e){var n=e;return a.is(n.range)&&c.is(n.color)}}(d||(d={})),function(e){e.create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},e.is=function(e){var n=e;return de.string(n.label)&&(de.undefined(n.textEdit)||k.is(n))&&(de.undefined(n.additionalTextEdits)||de.typedArray(n.additionalTextEdits,k.is))}}(f||(f={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(g||(g={})),function(e){e.create=function(e,n,t,r,i){var o={startLine:e,endLine:n};return de.defined(t)&&(o.startCharacter=t),de.defined(r)&&(o.endCharacter=r),de.defined(i)&&(o.kind=i),o},e.is=function(e){var n=e;return de.uinteger(n.startLine)&&de.uinteger(n.startLine)&&(de.undefined(n.startCharacter)||de.uinteger(n.startCharacter))&&(de.undefined(n.endCharacter)||de.uinteger(n.endCharacter))&&(de.undefined(n.kind)||de.string(n.kind))}}(l||(l={})),function(e){e.create=function(e,n){return{location:e,message:n}},e.is=function(e){var n=e;return de.defined(n)&&s.is(n.location)&&de.string(n.message)}}(h||(h={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(p||(p={})),function(e){e.Unnecessary=1,e.Deprecated=2}(v||(v={})),function(e){e.is=function(e){var n=e;return void 0!==n&&null!==n&&de.string(n.href)}}(m||(m={})),function(e){e.create=function(e,n,t,r,i,o){var a={range:e,message:n};return de.defined(t)&&(a.severity=t),de.defined(r)&&(a.code=r),de.defined(i)&&(a.source=i),de.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var n,t=e;return de.defined(t)&&a.is(t.range)&&de.string(t.message)&&(de.number(t.severity)||de.undefined(t.severity))&&(de.integer(t.code)||de.string(t.code)||de.undefined(t.code))&&(de.undefined(t.codeDescription)||de.string(null===(n=t.codeDescription)||void 0===n?void 0:n.href))&&(de.string(t.source)||de.undefined(t.source))&&(de.undefined(t.relatedInformation)||de.typedArray(t.relatedInformation,h.is))}}(b||(b={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return de.defined(t)&&t.length>0&&(i.arguments=t),i},e.is=function(e){var n=e;return de.defined(n)&&de.string(n.title)&&de.string(n.command)}}(_||(_={})),function(e){e.replace=function(e,n){return{range:e,newText:n}},e.insert=function(e,n){return{range:{start:e,end:e},newText:n}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var n=e;return de.objectLiteral(n)&&de.string(n.newText)&&a.is(n.range)}}(k||(k={})),function(e){e.create=function(e,n,t){var r={label:e};return void 0!==n&&(r.needsConfirmation=n),void 0!==t&&(r.description=t),r},e.is=function(e){var n=e;return void 0!==n&&de.objectLiteral(n)&&de.string(n.label)&&(de.boolean(n.needsConfirmation)||void 0===n.needsConfirmation)&&(de.string(n.description)||void 0===n.description)}}(w||(w={})),function(e){e.is=function(e){return"string"===typeof e}}(C||(C={})),function(e){e.replace=function(e,n,t){return{range:e,newText:n,annotationId:t}},e.insert=function(e,n,t){return{range:{start:e,end:e},newText:n,annotationId:t}},e.del=function(e,n){return{range:e,newText:"",annotationId:n}},e.is=function(e){var n=e;return k.is(n)&&(w.is(n.annotationId)||C.is(n.annotationId))}}(y||(y={})),function(e){e.create=function(e,n){return{textDocument:e,edits:n}},e.is=function(e){var n=e;return de.defined(n)&&j.is(n.textDocument)&&Array.isArray(n.edits)}}(E||(E={})),function(e){e.create=function(e,n,t){var r={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),void 0!==t&&(r.annotationId=t),r},e.is=function(e){var n=e;return n&&"create"===n.kind&&de.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||de.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||de.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||C.is(n.annotationId))}}(A||(A={})),function(e){e.create=function(e,n,t,r){var i={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==r&&(i.annotationId=r),i},e.is=function(e){var n=e;return n&&"rename"===n.kind&&de.string(n.oldUri)&&de.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||de.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||de.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||C.is(n.annotationId))}}(x||(x={})),function(e){e.create=function(e,n,t){var r={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(r.options=n),void 0!==t&&(r.annotationId=t),r},e.is=function(e){var n=e;return n&&"delete"===n.kind&&de.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||de.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||de.boolean(n.options.ignoreIfNotExists)))&&(void 0===n.annotationId||C.is(n.annotationId))}}(I||(I={})),function(e){e.is=function(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every((function(e){return de.string(e.kind)?A.is(e)||x.is(e)||I.is(e):E.is(e)})))}}(S||(S={}));var M,P,j,L,F,D,O,N,W,U,V,z,K,q,H,X,B,J,$,Q,G,Y,Z,ee,ne,te,re,ie,oe,ae,se=function(){function e(e,n){this.edits=e,this.changeAnnotations=n}return e.prototype.insert=function(e,n,t){var r,i;if(void 0===t?r=k.insert(e,n):C.is(t)?(i=t,r=y.insert(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=y.insert(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,n,t){var r,i;if(void 0===t?r=k.replace(e,n):C.is(t)?(i=t,r=y.replace(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=y.replace(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,n){var t,r;if(void 0===n?t=k.del(e):C.is(n)?(r=n,t=y.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(n),t=y.del(e,r)),this.edits.push(t),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ue=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,n){var t;if(C.is(e)?t=e:(t=this.nextId(),n=e),void 0!==this._annotations[t])throw new Error("Id "+t+" is already in use.");if(void 0===n)throw new Error("No annotation provided for id "+t);return this._annotations[t]=n,this._size++,t},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new ue(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(E.is(e)){var t=new se(e.edits,n._changeAnnotations);n._textEditChanges[e.textDocument.uri]=t}}))):e.changes&&Object.keys(e.changes).forEach((function(t){var r=new se(e.changes[t]);n._textEditChanges[t]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(j.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:i=[]};this._workspaceEdit.documentChanges.push(t),r=new se(i,this._changeAnnotations),this._textEditChanges[n.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new se(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new ue,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(w.is(n)||C.is(n)?r=n:t=n,void 0===r?i=A.create(e,t):(o=C.is(r)?r:this._changeAnnotations.manage(r),i=A.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,n,t,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(w.is(t)||C.is(t)?i=t:r=t,void 0===i?o=x.create(e,n,r):(a=C.is(i)?i:this._changeAnnotations.manage(i),o=x.create(e,n,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(w.is(n)||C.is(n)?r=n:t=n,void 0===r?i=I.create(e,t):(o=C.is(r)?r:this._changeAnnotations.manage(r),i=I.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var n=e;return de.defined(n)&&de.string(n.uri)}}(M||(M={})),function(e){e.create=function(e,n){return{uri:e,version:n}},e.is=function(e){var n=e;return de.defined(n)&&de.string(n.uri)&&de.integer(n.version)}}(P||(P={})),function(e){e.create=function(e,n){return{uri:e,version:n}},e.is=function(e){var n=e;return de.defined(n)&&de.string(n.uri)&&(null===n.version||de.integer(n.version))}}(j||(j={})),function(e){e.create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},e.is=function(e){var n=e;return de.defined(n)&&de.string(n.uri)&&de.string(n.languageId)&&de.integer(n.version)&&de.string(n.text)}}(L||(L={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(F||(F={})),function(e){e.is=function(n){var t=n;return t===e.PlainText||t===e.Markdown}}(F||(F={})),function(e){e.is=function(e){var n=e;return de.objectLiteral(e)&&F.is(n.kind)&&de.string(n.value)}}(D||(D={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(O||(O={})),function(e){e.PlainText=1,e.Snippet=2}(N||(N={})),function(e){e.Deprecated=1}(W||(W={})),function(e){e.create=function(e,n,t){return{newText:e,insert:n,replace:t}},e.is=function(e){var n=e;return n&&de.string(n.newText)&&a.is(n.insert)&&a.is(n.replace)}}(U||(U={})),function(e){e.asIs=1,e.adjustIndentation=2}(V||(V={})),function(e){e.create=function(e){return{label:e}}}(z||(z={})),function(e){e.create=function(e,n){return{items:e||[],isIncomplete:!!n}}}(K||(K={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var n=e;return de.string(n)||de.objectLiteral(n)&&de.string(n.language)&&de.string(n.value)}}(q||(q={})),function(e){e.is=function(e){var n=e;return!!n&&de.objectLiteral(n)&&(D.is(n.contents)||q.is(n.contents)||de.typedArray(n.contents,q.is))&&(void 0===e.range||a.is(e.range))}}(H||(H={})),function(e){e.create=function(e,n){return n?{label:e,documentation:n}:{label:e}}}(X||(X={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return de.defined(n)&&(i.documentation=n),de.defined(t)?i.parameters=t:i.parameters=[],i}}(B||(B={})),function(e){e.Text=1,e.Read=2,e.Write=3}(J||(J={})),function(e){e.create=function(e,n){var t={range:e};return de.number(n)&&(t.kind=n),t}}($||($={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(Q||(Q={})),function(e){e.Deprecated=1}(G||(G={})),function(e){e.create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}}(Y||(Y={})),function(e){e.create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var n=e;return n&&de.string(n.name)&&de.number(n.kind)&&a.is(n.range)&&a.is(n.selectionRange)&&(void 0===n.detail||de.string(n.detail))&&(void 0===n.deprecated||de.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))&&(void 0===n.tags||Array.isArray(n.tags))}}(Z||(Z={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(ee||(ee={})),function(e){e.create=function(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t},e.is=function(e){var n=e;return de.defined(n)&&de.typedArray(n.diagnostics,b.is)&&(void 0===n.only||de.typedArray(n.only,de.string))}}(ne||(ne={})),function(e){e.create=function(e,n,t){var r={title:e},i=!0;return"string"===typeof n?(i=!1,r.kind=n):_.is(n)?r.command=n:r.edit=n,i&&void 0!==t&&(r.kind=t),r},e.is=function(e){var n=e;return n&&de.string(n.title)&&(void 0===n.diagnostics||de.typedArray(n.diagnostics,b.is))&&(void 0===n.kind||de.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||_.is(n.command))&&(void 0===n.isPreferred||de.boolean(n.isPreferred))&&(void 0===n.edit||S.is(n.edit))}}(te||(te={})),function(e){e.create=function(e,n){var t={range:e};return de.defined(n)&&(t.data=n),t},e.is=function(e){var n=e;return de.defined(n)&&a.is(n.range)&&(de.undefined(n.command)||_.is(n.command))}}(re||(re={})),function(e){e.create=function(e,n){return{tabSize:e,insertSpaces:n}},e.is=function(e){var n=e;return de.defined(n)&&de.uinteger(n.tabSize)&&de.boolean(n.insertSpaces)}}(ie||(ie={})),function(e){e.create=function(e,n,t){return{range:e,target:n,data:t}},e.is=function(e){var n=e;return de.defined(n)&&a.is(n.range)&&(de.undefined(n.target)||de.string(n.target))}}(oe||(oe={})),function(e){e.create=function(e,n){return{range:e,parent:n}},e.is=function(n){var t=n;return void 0!==t&&a.is(t.range)&&(void 0===t.parent||e.is(t.parent))}}(ae||(ae={}));var ce;!function(e){function n(e,t){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);n(i,t),n(o,t);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=t(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,n,t,r){return new fe(e,n,t,r)},e.is=function(e){var n=e;return!!(de.defined(n)&&de.string(n.uri)&&(de.undefined(n.languageId)||de.string(n.languageId))&&de.uinteger(n.lineCount)&&de.func(n.getText)&&de.func(n.positionAt)&&de.func(n.offsetAt))},e.applyEdits=function(e,t){for(var r=e.getText(),i=n(t,(function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(ce||(ce={}));var de,fe=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,r=n.length;if(0===r)return o.create(0,e);for(;t<r;){var i=Math.floor((t+r)/2);n[i]>e?r=i:t=i+1}var a=t-1;return o.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return"undefined"!==typeof e},e.undefined=function(e){return"undefined"===typeof e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.numberRange=function(e,t,r){return"[object Number]"===n.call(e)&&t<=e&&e<=r},e.integer=function(e){return"[object Number]"===n.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===n.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"===typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(de||(de={}));var ge=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n,t=e.getLanguageId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(n),n=window.setTimeout((function(){return r._doValidate(e.uri,t)}),500)})),r._doValidate(e.uri,t))},o=function(e){T.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(T.editor.onDidCreateModel(i)),this._disposables.push(T.editor.onWillDisposeModel((function(e){o(e),r._resetSchema(e.uri)}))),this._disposables.push(T.editor.onDidChangeModelLanguage((function(e){o(e.model),i(e.model),r._resetSchema(e.model.uri)}))),this._disposables.push(t.onDidChange((function(e){T.editor.getModels().forEach((function(e){e.getLanguageId()===r._languageId&&(o(e),i(e))}))}))),this._disposables.push({dispose:function(){for(var e in T.editor.getModels().forEach(o),r._listener)r._listener[e].dispose()}}),T.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then((function(n){n.resetSchema(e.toString())}))},e.prototype._doValidate=function(e,n){this._worker(e).then((function(t){return t.doValidation(e.toString()).then((function(t){var r=t.map((function(e){return function(e,n){var t="number"===typeof n.code?String(n.code):n.code;return{severity:le(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}(0,e)})),i=T.editor.getModel(e);i&&i.getLanguageId()===n&&T.editor.setModelMarkers(i,n,r)}))})).then(void 0,(function(e){console.error(e)}))},e}();function le(e){switch(e){case p.Error:return T.MarkerSeverity.Error;case p.Warning:return T.MarkerSeverity.Warning;case p.Information:return T.MarkerSeverity.Info;case p.Hint:return T.MarkerSeverity.Hint;default:return T.MarkerSeverity.Info}}function he(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function pe(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function ve(e){if(e)return new T.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function me(e){var n=T.languages.CompletionItemKind;switch(e){case O.Text:return n.Text;case O.Method:return n.Method;case O.Function:return n.Function;case O.Constructor:return n.Constructor;case O.Field:return n.Field;case O.Variable:return n.Variable;case O.Class:return n.Class;case O.Interface:return n.Interface;case O.Module:return n.Module;case O.Property:return n.Property;case O.Unit:return n.Unit;case O.Value:return n.Value;case O.Enum:return n.Enum;case O.Keyword:return n.Keyword;case O.Snippet:return n.Snippet;case O.Color:return n.Color;case O.File:return n.File;case O.Reference:return n.Reference}return n.Property}function be(e){if(e)return{range:ve(e.range),text:e.newText}}var _e=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":",'"']},enumerable:!1,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doComplete(i.toString(),he(n))})).then((function(t){if(t){var r=e.getWordUntilPosition(n),i=new T.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=t.items.map((function(e){var n,t,r={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:me(e.kind)};return e.textEdit&&("undefined"!==typeof(t=e.textEdit).insert&&"undefined"!==typeof t.replace?r.range={insert:ve(e.textEdit.insert),replace:ve(e.textEdit.replace)}:r.range=ve(e.textEdit.range),r.insertText=e.textEdit.newText),e.additionalTextEdits&&(r.additionalTextEdits=e.additionalTextEdits.map(be)),e.insertTextFormat===N.Snippet&&(r.insertTextRules=T.languages.CompletionItemInsertTextRule.InsertAsSnippet),r}));return{isIncomplete:t.isIncomplete,suggestions:o}}}))},e}();function ke(e){return"string"===typeof e?{value:e}:(n=e)&&"object"===typeof n&&"string"===typeof n.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var n}function we(e){if(e)return Array.isArray(e)?e.map(ke):[ke(e)]}var Ce=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),he(n))})).then((function(e){if(e)return{range:ve(e.range),contents:we(e.contents)}}))},e}();function ye(e){var n=T.languages.SymbolKind;switch(e){case Q.File:return n.Array;case Q.Module:return n.Module;case Q.Namespace:return n.Namespace;case Q.Package:return n.Package;case Q.Class:return n.Class;case Q.Method:return n.Method;case Q.Property:return n.Property;case Q.Field:return n.Field;case Q.Constructor:return n.Constructor;case Q.Enum:return n.Enum;case Q.Interface:return n.Interface;case Q.Function:return n.Function;case Q.Variable:return n.Variable;case Q.Constant:return n.Constant;case Q.String:return n.String;case Q.Number:return n.Number;case Q.Boolean:return n.Boolean;case Q.Array:return n.Array}return n.Function}var Ee=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentSymbols(t.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:ye(e.kind),range:ve(e.location.range),selectionRange:ve(e.location.range),tags:[]}}))}))},e}();function Ae(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var xe=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.format(r.toString(),null,Ae(n)).then((function(e){if(e&&0!==e.length)return e.map(be)}))}))},e}(),Ie=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.format(i.toString(),pe(n),Ae(t)).then((function(e){if(e&&0!==e.length)return e.map(be)}))}))},e}(),Se=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentColors(t.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:ve(e.range)}}))}))},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),n.color,pe(n.range))})).then((function(e){if(e)return e.map((function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=be(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(be)),n}))}))},e}(),Te=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getFoldingRanges(r.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=function(e){switch(e){case g.Comment:return T.languages.FoldingRangeKind.Comment;case g.Imports:return T.languages.FoldingRangeKind.Imports;case g.Region:return T.languages.FoldingRangeKind.Region}return}(e.kind)),n}))}))},e}();var Re,Me=function(){function e(e){this._worker=e}return e.prototype.provideSelectionRanges=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),n.map(he))})).then((function(e){if(e)return e.map((function(e){for(var n=[];e;)n.push({range:ve(e.range)}),e=e.parent;return n}))}))},e}();function Pe(e,n){void 0===n&&(n=!1);var t=e.length,r=0,i="",o=0,a=16,s=0,u=0,c=0,d=0,f=0;function g(n,t){for(var i=0,o=0;i<n||!t;){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}r++,i++}return i<n&&(o=-1),o}function l(){if(i="",f=0,o=r,u=s,d=c,r>=t)return o=t,a=17;var n=e.charCodeAt(r);if(je(n)){do{r++,i+=String.fromCharCode(n),n=e.charCodeAt(r)}while(je(n));return a=15}if(Le(n))return r++,i+=String.fromCharCode(n),13===n&&10===e.charCodeAt(r)&&(r++,i+="\n"),s++,c=r,a=14;switch(n){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=function(){for(var n="",i=r;;){if(r>=t){n+=e.substring(i,r),f=2;break}var o=e.charCodeAt(r);if(34===o){n+=e.substring(i,r),r++;break}if(92!==o){if(o>=0&&o<=31){if(Le(o)){n+=e.substring(i,r),f=2;break}f=6}r++}else{if(n+=e.substring(i,r),++r>=t){f=2;break}switch(e.charCodeAt(r++)){case 34:n+='"';break;case 92:n+="\\";break;case 47:n+="/";break;case 98:n+="\b";break;case 102:n+="\f";break;case 110:n+="\n";break;case 114:n+="\r";break;case 116:n+="\t";break;case 117:var a=g(4,!0);a>=0?n+=String.fromCharCode(a):f=4;break;default:f=5}i=r}}return n}(),a=10;case 47:var l=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<t&&!Le(e.charCodeAt(r));)r++;return i=e.substring(l,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;for(var p=t-1,v=!1;r<p;){var m=e.charCodeAt(r);if(42===m&&47===e.charCodeAt(r+1)){r+=2,v=!0;break}r++,Le(m)&&(13===m&&10===e.charCodeAt(r)&&r++,s++,c=r)}return v||(r++,f=1),i=e.substring(l,r),a=13}return i+=String.fromCharCode(n),r++,a=16;case 45:if(i+=String.fromCharCode(n),++r===t||!Fe(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var n=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&Fe(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&Fe(e.charCodeAt(r))))return f=3,e.substring(n,r);for(r++;r<e.length&&Fe(e.charCodeAt(r));)r++}var t=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&Fe(e.charCodeAt(r))){for(r++;r<e.length&&Fe(e.charCodeAt(r));)r++;t=r}else f=3;return e.substring(n,t)}(),a=11;default:for(;r<t&&h(n);)r++,n=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(n),r++,a=16}}function h(e){if(je(e)||Le(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,i="",o=0,a=16,f=0},getPosition:function(){return r},scan:n?function(){var e;do{e=l()}while(e>=12&&e<=15);return e}:l,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return u},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return f}}}function je(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function Le(e){return 10===e||13===e||8232===e||8233===e}function Fe(e){return e>=48&&e<=57}!function(e){e.DEFAULT={allowTrailingComma:!1}}(Re||(Re={}));var De=Pe;function Oe(e){return{getInitialState:function(){return new Qe(null,null,!1,null)},tokenize:function(n,t,r,i){return function(e,n,t,r,i){void 0===r&&(r=0);var o=0,a=!1;switch(t.scanError){case 2:n='"'+n,o=1;break;case 1:n="/*"+n,o=2}var s=De(n),u=t.lastWasColon,c=t.parents,d={tokens:[],endState:t.clone()};for(;;){var f=r+s.getPosition(),g="",l=s.scan();if(17===l)break;if(f===r+s.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+n.substr(s.getPosition(),3));switch(a&&(f-=o),a=o>0,l){case 1:c=$e.push(c,0),g=Ne,u=!1;break;case 2:c=$e.pop(c),g=Ne,u=!1;break;case 3:c=$e.push(c,1),g=We,u=!1;break;case 4:c=$e.pop(c),g=We,u=!1;break;case 6:g=Ue,u=!0;break;case 5:g=Ve,u=!1;break;case 8:case 9:g=ze,u=!1;break;case 7:g=Ke,u=!1;break;case 10:var h=c?c.type:0;g=u||1===h?qe:Xe,u=!1;break;case 11:g=He,u=!1}if(e)switch(l){case 12:g=Je;break;case 13:g=Be}d.endState=new Qe(t.getStateData(),s.getTokenError(),u,c),d.tokens.push({startIndex:f,scopes:g})}return d}(e,n,t,r)}}}var Ne="delimiter.bracket.json",We="delimiter.array.json",Ue="delimiter.colon.json",Ve="delimiter.comma.json",ze="keyword.json",Ke="keyword.json",qe="string.value.json",He="number.json",Xe="string.key.json",Be="comment.block.json",Je="comment.line.json",$e=function(){function e(e,n){this.parent=e,this.type=n}return e.pop=function(e){return e?e.parent:null},e.push=function(n,t){return new e(n,t)},e.equals=function(e,n){if(!e&&!n)return!0;if(!e||!n)return!1;for(;e&&n;){if(e===n)return!0;if(e.type!==n.type)return!1;e=e.parent,n=n.parent}return!0},e}(),Qe=function(){function e(e,n,t,r){this._state=e,this.scanError=n,this.lastWasColon=t,this.parents=r}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon,this.parents)},e.prototype.equals=function(n){return n===this||!!(n&&n instanceof e)&&(this.scanError===n.scanError&&this.lastWasColon===n.lastWasColon&&$e.equals(this.parents,n.parents))},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}();function Ge(e){var n=[],t=[],r=new R(e);n.push(r);var i=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.getLanguageServiceWorker.apply(r,e)};function o(){var n=e.languageId,r=e.modeConfiguration;Ze(t),r.documentFormattingEdits&&t.push(T.languages.registerDocumentFormattingEditProvider(n,new xe(i))),r.documentRangeFormattingEdits&&t.push(T.languages.registerDocumentRangeFormattingEditProvider(n,new Ie(i))),r.completionItems&&t.push(T.languages.registerCompletionItemProvider(n,new _e(i))),r.hovers&&t.push(T.languages.registerHoverProvider(n,new Ce(i))),r.documentSymbols&&t.push(T.languages.registerDocumentSymbolProvider(n,new Ee(i))),r.tokens&&t.push(T.languages.setTokensProvider(n,Oe(!0))),r.colors&&t.push(T.languages.registerColorProvider(n,new Se(i))),r.foldingRanges&&t.push(T.languages.registerFoldingRangeProvider(n,new Te(i))),r.diagnostics&&t.push(new ge(n,i,e)),r.selectionRanges&&t.push(T.languages.registerSelectionRangeProvider(n,new Me(i)))}o(),n.push(T.languages.setLanguageConfiguration(e.languageId,en));var a=e.modeConfiguration;return e.onDidChange((function(e){e.modeConfiguration!==a&&(a=e.modeConfiguration,o())})),n.push(Ye(t)),Ye(n)}function Ye(e){return{dispose:function(){return Ze(e)}}}function Ze(e){for(;e.length;)e.pop().dispose()}var en={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);
//# sourceMappingURL=81.6ae12b52.chunk.js.map