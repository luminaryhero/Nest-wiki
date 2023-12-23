HTTP 会话提供了一种跨多个请求存储有关用户信息的方法，这对于 MVC 应用程序特别有用。



## 与 Express 一起使用（默认）

首先安装所需的包（以及 TypeScript 用户的类型）：

```shell
$ npm i express-session
$ npm i -D @types/express-session
```

安装完成后，将 `express-session` 中间件作为全局中间件应用（例如，在 `main.ts` 文件中）。

```typescript
import * as session from 'express-session';
// somewhere in your initialization file
app.use(
  session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
  }),
);
```

 `secret`用于 对会话 ID cookie 进行签名。这可以是单个密钥的字符串，也可以是多个密钥的数组。如果提供了密钥数组，则仅使用第一个元素对会话 ID cookie 进行签名，而在验证请求中的签名时将考虑所有元素。秘密本身不应该轻易被人类解析，最好是一组随机的字符。

启用该 `resave` 选项会强制将会话保存回会话存储，即使会话在请求期间从未修改过也是如此。默认值为 `true` ，但已弃用默认值，因为默认值将来会更改。

同样，启用选项 `saveUninitialized` 强制将“未初始化”的会话保存到存储中。当会话是新的但未修改时，该会话将未初始化。选择 `false` 对于实现登录会话、减少服务器存储使用量或遵守在设置 cookie 之前需要许可的法律非常有用。选择 `false` 还有助于解决客户端在没有会话的情况下发出多个并行请求的竞争条件（源）。

完成此操作后，您现在可以在路由处理程序中设置和读取会话值，如下所示：

```typescript
@Get()
findAll(@Req() request: Request) {
  request.session.visits = request.session.visits ? request.session.visits + 1 : 1;
}
```

或者，您可以使用 `@Session()` 修饰器从请求中提取会话对象，如下所示：

```typescript
@Get()
findAll(@Session() session: Record<string, any>) {
  session.visits = session.visits ? session.visits + 1 : 1;
}
```



> 更多详细信息请访问官网：https://docs.nestjs.com/techniques/session