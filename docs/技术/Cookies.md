HTTP cookie 是用户浏览器存储的一小段数据。Cookie 旨在成为网站记住有状态信息的可靠机制。当用户再次访问网站时，cookie会自动与请求一起发送。



## 与 Express 一起使用（默认）

首先安装所需的包（以及 TypeScript 用户的类型）：

```shell
$ npm i cookie-parser
$ npm i -D @types/cookie-parser
```

安装完成后，将 `cookie-parser` 中间件作为全局中间件应用（例如，在 `main.ts` 文件中）。

```typescript
import * as cookieParser from 'cookie-parser';
// somewhere in your initialization file
app.use(cookieParser());
```

您可以将多个选项传递给 `cookieParser` 中间件：

- `secret` 用于对 Cookie 进行签名的字符串或数组。这是可选的，如果未指定，则不会分析已签名的 Cookie。如果提供了字符串，则将其用作机密。如果提供了数组，则将尝试按顺序取消对每个密钥的 cookie 进行签名。
- `options` `cookie.parse` 作为第二个选项传递给的对象。有关更多信息，请参见 [cookie](https://www.npmjs.org/package/cookie)。

中间件将解析请求上的 `Cookie` 标头，并将 cookie 数据公开为属性，如果提供了密钥，则将其公开为属性 `req.cookies` `req.signedCookies` 。这些属性是 Cookie 名称与 Cookie 值的名称值对。

提供 secret 时，此模块将取消签名并验证任何已签名的 cookie 值，并将这些名称值对从 `req.cookies` `req.signedCookies` .签名 Cookie 是值前缀为 `s:` 的 Cookie。未通过签名验证的签名 Cookie 将具有该值 `false` ，而不是被篡改的值。

这样，您现在可以从路由处理程序中读取 cookie，如下所示：

```typescript
@Get()
findAll(@Req() request: Request) {
  console.log(request.cookies); // or "request.cookies['cookieKey']"
  // or console.log(request.signedCookies);
}
```

若要将 Cookie 附加到传出响应，请使用以下 `Response#cookie()` 方法：

```typescript
@Get()
findAll(@Res({ passthrough: true }) response: Response) {
  response.cookie('key', 'value')
}
```



> 更多详细信息请访问官网：https://docs.nestjs.com/techniques/cookies