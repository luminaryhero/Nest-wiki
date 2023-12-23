默认情况下，Nest 使用 Express 框架。如前所述，Nest 还提供与其他库的兼容性，例如 Fastify。Nest 通过实现框架适配器来实现这种框架独立性，该适配器的主要功能是将中间件和处理程序代理到适当的特定于库的实现。

Fastify 为 Nest 提供了一个很好的替代框架，因为它以与 Express 类似的方式解决了设计问题。但是，fastify 比 Express 快得多，实现了几乎两倍的基准测试结果。一个公平的问题是，为什么 Nest 使用 Express 作为默认的 HTTP 提供者？原因是 Express 被广泛使用、广为人知，并且拥有大量兼容的中间件，可供 Nest 用户开箱即用。

但是，由于 Nest 提供了框架独立性，因此您可以轻松地在它们之间迁移。当您高度重视非常快的性能时，Fastify 可能是更好的选择。要使用 Fastify，只需选择本章所示的内置功能 `FastifyAdapter` 。



## 安装

```bash
$ npm i --save @nestjs/platform-fastify
```



## 适配器

安装 Fastify 平台后，我们可以使用 `FastifyAdapter` .

```typescript
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(3000);
}
bootstrap();
```



> 更多详细信息请访问官网：https://docs.nestjs.com/techniques/performance