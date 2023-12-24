Helmet 可以通过适当设置 HTTP 标头来帮助保护您的应用免受一些众所周知的 Web 漏洞的侵害。通常，Helmet 只是设置与安全相关的 HTTP 标头的较小中间件函数的集合。



## 与 Express 一起使用（默认）

首先安装所需的软件包。

```bash
$ npm i --save helmet
```

安装完成后，将其应用为全局中间件。

```typescript
import helmet from 'helmet';
// somewhere in your initialization file
app.use(helmet());
```



> 更多详细信息请访问官网：https://docs.nestjs.com/security/helmet