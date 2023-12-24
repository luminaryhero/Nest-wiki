Axios 是功能丰富的 HTTP 客户端包，被广泛使用。Nest 包装 Axios 并通过内置的 `HttpModule` . `HttpModule` 导出类，该 `HttpService` 类公开基于 Axios 的方法以执行 HTTP 请求。该库还会将生成的 HTTP 响应转换为 `Observables` .

## 安装

要开始使用它，我们首先安装所需的依赖项。

```bash
npm i --save @nestjs/axios axios
```

## 开始

安装过程完成后，要使用 `HttpService` ，首先导入 `HttpModule` .

```typescript
@Module({
  imports: [HttpModule],
  providers: [CatsService],
})
export class CatsModule {}
```

接下来， `HttpService` 使用普通构造函数注入进行注入。

```typescript
@Injectable()
export class CatsService {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<Cat[]>> {
    return this.httpService.get("http://localhost:3000/cats");
  }
}
```

所有方法都 `HttpService` 返回包装在 `Observable` 对象中的一个 `AxiosResponse` 。

## 配置

Axios 可以配置各种选项来自定义 `HttpService` .在此处阅读有关它们的更多信息。要配置底层 Axios 实例，请在导入时将可选选项对象传递给 `register()` method of `HttpModule` 。此选项对象将直接传递给底层 Axios 构造函数。

```typescript
@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [CatsService],
})
export class CatsModule {}
```

## 完整示例

由于 `HttpService` 方法的返回值是 Observable，我们可以使用 `rxjs` - `firstValueFrom` or `lastValueFrom` 以 promise 的形式检索请求的数据。

```typescript
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class CatsService {
  private readonly logger = new Logger(CatsService.name);
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<Cat[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Cat[]>("http://localhost:3000/cats").pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw "An error happened!";
        })
      )
    );
    return data;
  }
}
```

> 更多详细信息请访问官网：https://docs.nestjs.com/techniques/http-module
