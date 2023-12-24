跨域资源共享 （CORS） 是一种允许从其他域请求资源的机制。



## 开始

若要启用 CORS，请在 Nest 应用程序对象上调用该 `enableCors()` 方法。

```typescript
const app = await NestFactory.create(AppModule);
app.enableCors();
await app.listen(3000);
```

该 `enableCors()` 方法采用可选的配置对象参数。官方 CORS 文档中描述了此对象的可用属性。另一种方法是传递一个回调函数，该函数允许您根据请求（动态）异步定义配置对象。

或者，通过 `create()` 方法的 options 对象启用 CORS。将该 `cors` 属性设置为 `true` 以启用具有默认设置的 CORS。或者，将 CORS 配置对象或回调函数作为 `cors` 属性值传递以自定义其行为。

```typescript
const app = await NestFactory.create(AppModule, { cors: true });
await app.listen(3000);
```



> 更多详细信息请访问官网：https://docs.nestjs.com/security/cors