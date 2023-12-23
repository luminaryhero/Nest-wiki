首先安装所需的依赖项：

```bash
$ npm i @nestjs/mongoose mongoose
```

安装过程完成后，我们可以将 `MongooseModule` 导入到 root `AppModule` 中。

```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
```



## 模型注入

在 Mongoose 中，一切都是从 Schema 派生而来的。每个架构都映射到一个 MongoDB 集合，并定义该集合中文档的形状。架构用于定义模型。模型负责从底层 MongoDB 数据库创建和读取文档。

让我们定义： `CatSchema`

> schemas/cat.schema.ts

```typescript
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
```

注册架构后，可以使用 `@InjectModel()` 装饰器将 `Cat` 模型注入到： `CatsService`

> cats.service.ts

```typescript
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
```



## 连接

有时，您可能需要访问本机 Mongoose Connection 对象。例如，您可能希望对连接对象进行本机 API 调用。您可以使用 `@InjectConnection()` 装饰器注入 Mongoose Connection，如下所示：

```typescript
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectConnection() private connection: Connection) {}
}
```



## 异步配置

```typescript
MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URI'),
  }),
  inject: [ConfigService],
});
```



> 更多详细信息请访问官网：https://docs.nestjs.com/techniques/mongodb