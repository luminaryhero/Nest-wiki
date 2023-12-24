"use strict";(self.webpackChunkNest_wiki=self.webpackChunkNest_wiki||[]).push([[3551],{8640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=n(1527),t=n(7540);const c={},r=void 0,o={id:"\u6280\u672f/Session",title:"Session",description:"HTTP \u4f1a\u8bdd\u63d0\u4f9b\u4e86\u4e00\u79cd\u8de8\u591a\u4e2a\u8bf7\u6c42\u5b58\u50a8\u6709\u5173\u7528\u6237\u4fe1\u606f\u7684\u65b9\u6cd5\uff0c\u8fd9\u5bf9\u4e8e MVC \u5e94\u7528\u7a0b\u5e8f\u7279\u522b\u6709\u7528\u3002",source:"@site/docs/\u6280\u672f/Session.md",sourceDirName:"\u6280\u672f",slug:"/\u6280\u672f/Session",permalink:"/Nest-wiki/docs/\u6280\u672f/Session",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},d=[{value:"\u4e0e Express \u4e00\u8d77\u4f7f\u7528\uff08\u9ed8\u8ba4\uff09",id:"\u4e0e-express-\u4e00\u8d77\u4f7f\u7528\u9ed8\u8ba4",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"HTTP \u4f1a\u8bdd\u63d0\u4f9b\u4e86\u4e00\u79cd\u8de8\u591a\u4e2a\u8bf7\u6c42\u5b58\u50a8\u6709\u5173\u7528\u6237\u4fe1\u606f\u7684\u65b9\u6cd5\uff0c\u8fd9\u5bf9\u4e8e MVC \u5e94\u7528\u7a0b\u5e8f\u7279\u522b\u6709\u7528\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u4e0e-express-\u4e00\u8d77\u4f7f\u7528\u9ed8\u8ba4",children:"\u4e0e Express \u4e00\u8d77\u4f7f\u7528\uff08\u9ed8\u8ba4\uff09"}),"\n",(0,i.jsx)(s.p,{children:"\u9996\u5148\u5b89\u88c5\u6240\u9700\u7684\u5305\uff08\u4ee5\u53ca TypeScript \u7528\u6237\u7684\u7c7b\u578b\uff09\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ npm i express-session\n$ npm i -D @types/express-session\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5c06 ",(0,i.jsx)(s.code,{children:"express-session"})," \u4e2d\u95f4\u4ef6\u4f5c\u4e3a\u5168\u5c40\u4e2d\u95f4\u4ef6\u5e94\u7528\uff08\u4f8b\u5982\uff0c\u5728 ",(0,i.jsx)(s.code,{children:"main.ts"})," \u6587\u4ef6\u4e2d\uff09\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",children:"import * as session from 'express-session';\n// somewhere in your initialization file\napp.use(\n  session({\n    secret: 'my-secret',\n    resave: false,\n    saveUninitialized: false,\n  }),\n);\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"secret"}),"\u7528\u4e8e \u5bf9\u4f1a\u8bdd ID cookie \u8fdb\u884c\u7b7e\u540d\u3002\u8fd9\u53ef\u4ee5\u662f\u5355\u4e2a\u5bc6\u94a5\u7684\u5b57\u7b26\u4e32\uff0c\u4e5f\u53ef\u4ee5\u662f\u591a\u4e2a\u5bc6\u94a5\u7684\u6570\u7ec4\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u5bc6\u94a5\u6570\u7ec4\uff0c\u5219\u4ec5\u4f7f\u7528\u7b2c\u4e00\u4e2a\u5143\u7d20\u5bf9\u4f1a\u8bdd ID cookie \u8fdb\u884c\u7b7e\u540d\uff0c\u800c\u5728\u9a8c\u8bc1\u8bf7\u6c42\u4e2d\u7684\u7b7e\u540d\u65f6\u5c06\u8003\u8651\u6240\u6709\u5143\u7d20\u3002\u79d8\u5bc6\u672c\u8eab\u4e0d\u5e94\u8be5\u8f7b\u6613\u88ab\u4eba\u7c7b\u89e3\u6790\uff0c\u6700\u597d\u662f\u4e00\u7ec4\u968f\u673a\u7684\u5b57\u7b26\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u542f\u7528\u8be5 ",(0,i.jsx)(s.code,{children:"resave"})," \u9009\u9879\u4f1a\u5f3a\u5236\u5c06\u4f1a\u8bdd\u4fdd\u5b58\u56de\u4f1a\u8bdd\u5b58\u50a8\uff0c\u5373\u4f7f\u4f1a\u8bdd\u5728\u8bf7\u6c42\u671f\u95f4\u4ece\u672a\u4fee\u6539\u8fc7\u4e5f\u662f\u5982\u6b64\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,i.jsx)(s.code,{children:"true"})," \uff0c\u4f46\u5df2\u5f03\u7528\u9ed8\u8ba4\u503c\uff0c\u56e0\u4e3a\u9ed8\u8ba4\u503c\u5c06\u6765\u4f1a\u66f4\u6539\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u540c\u6837\uff0c\u542f\u7528\u9009\u9879 ",(0,i.jsx)(s.code,{children:"saveUninitialized"})," \u5f3a\u5236\u5c06\u201c\u672a\u521d\u59cb\u5316\u201d\u7684\u4f1a\u8bdd\u4fdd\u5b58\u5230\u5b58\u50a8\u4e2d\u3002\u5f53\u4f1a\u8bdd\u662f\u65b0\u7684\u4f46\u672a\u4fee\u6539\u65f6\uff0c\u8be5\u4f1a\u8bdd\u5c06\u672a\u521d\u59cb\u5316\u3002\u9009\u62e9 ",(0,i.jsx)(s.code,{children:"false"})," \u5bf9\u4e8e\u5b9e\u73b0\u767b\u5f55\u4f1a\u8bdd\u3001\u51cf\u5c11\u670d\u52a1\u5668\u5b58\u50a8\u4f7f\u7528\u91cf\u6216\u9075\u5b88\u5728\u8bbe\u7f6e cookie \u4e4b\u524d\u9700\u8981\u8bb8\u53ef\u7684\u6cd5\u5f8b\u975e\u5e38\u6709\u7528\u3002\u9009\u62e9 ",(0,i.jsx)(s.code,{children:"false"})," \u8fd8\u6709\u52a9\u4e8e\u89e3\u51b3\u5ba2\u6237\u7aef\u5728\u6ca1\u6709\u4f1a\u8bdd\u7684\u60c5\u51b5\u4e0b\u53d1\u51fa\u591a\u4e2a\u5e76\u884c\u8bf7\u6c42\u7684\u7ade\u4e89\u6761\u4ef6\uff08\u6e90\uff09\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u60a8\u73b0\u5728\u53ef\u4ee5\u5728\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u4e2d\u8bbe\u7f6e\u548c\u8bfb\u53d6\u4f1a\u8bdd\u503c\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",children:"@Get()\nfindAll(@Req() request: Request) {\n  request.session.visits = request.session.visits ? request.session.visits + 1 : 1;\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"@Session()"})," \u4fee\u9970\u5668\u4ece\u8bf7\u6c42\u4e2d\u63d0\u53d6\u4f1a\u8bdd\u5bf9\u8c61\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",children:"@Get()\nfindAll(@Session() session: Record<string, any>) {\n  session.visits = session.visits ? session.visits + 1 : 1;\n}\n"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u8bf7\u8bbf\u95ee\u5b98\u7f51\uff1a",(0,i.jsx)(s.a,{href:"https://docs.nestjs.com/techniques/session",children:"https://docs.nestjs.com/techniques/session"})]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7540:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var i=n(959);const t={},c=i.createContext(t);function r(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);