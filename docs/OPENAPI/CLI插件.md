TypeScript 的元数据反射系统有几个限制，例如，无法确定类包含哪些属性或识别给定属性是可选的还是必需的。然而，其中一些限制可以在编译时解决。 Nest 提供了一个插件，可以增强 TypeScript 编译过程，以减少所需的样板代码量。

> Tip
>
> 该插件是可选的。如果您愿意，您可以手动声明所有装饰器，或者仅在需要时声明特定的装饰器。



## 概述

Swagger 插件会自动：

- 使用 `@ApiProperty` 注释所有 DTO 属性，除非使用 `@ApiHideProperty`
- 根据问号设置 `required` 属性（例如 `name?: string` 将设置 `required: false` ）
- 根据类型设置 `type` 或 `enum` 属性（也支持数组）
- 根据分配的默认值设置 `default` 属性
- 基于 `class-validator` 装饰器设置多个验证规则（如果 `classValidatorShim` 设置为 `true` ）
- 将响应装饰器添加到具有正确状态和 `type` （响应模型）的每个端点
- 根据注释生成属性和端点的描述（如果 `introspectComments` 设置为 `true` ）
- 根据注释生成属性的示例值（如果 `introspectComments` 设置为 `true` ）

请注意，您的文件名必须具有以下后缀之一： `['.dto.ts', '.entity.ts']` （例如 `create-user.dto.ts` ）才能由插件进行分析。

如果您使用不同的后缀，则可以通过指定 `dtoFileNameSuffix` 选项来调整插件的行为。

以前，如果您想通过 Swagger UI 提供交互体验，则必须复制大量代码，让包知道应如何在规范中声明您的模型/组件。例如，您可以定义一个简单的 `CreateUserDto` 类，如下所示：

```typescript
export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ enum: RoleEnum, default: [], isArray: true })
  roles: RoleEnum[] = [];

  @ApiProperty({ required: false, default: true })
  isEnabled?: boolean = true;
}
```

虽然对于中型项目来说这不是一个重大问题，但一旦您拥有大量类，它就会变得冗长且难以维护。

通过启用 Swagger 插件，可以简单地声明上述类定义：

```typescript
export class CreateUserDto {
  email: string;
  password: string;
  roles: RoleEnum[] = [];
  isEnabled?: boolean = true;
}
```



## 注释自省

启用注释自省功能后，CLI 插件将根据注释生成属性的描述和示例值。

例如，给定一个 `roles` 属性示例：

```typescript
/**
 * A list of user's roles
 * @example ['admin']
 */
@ApiProperty({
  description: `A list of user's roles`,
  example: ['admin'],
})
roles: RoleEnum[] = [];
```

您必须复制描述值和示例值。启用 `introspectComments` 后，CLI 插件可以提取这些注释并自动提供属性的描述（以及示例，如果已定义）。现在，上述属性可以简单地声明如下：

```typescript
/**
 * A list of user's roles
 * @example ['admin']
 */
roles: RoleEnum[] = [];
```



## 使用 CLI 插件

要启用该插件，请打开 `nest-cli.json` （如果您使用 Nest CLI）并添加以下 `plugins` 配置：

```javascript
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": ["@nestjs/swagger"]
  }
}
```

您可以使用 `options` 属性来自定义插件的行为。

```javascript
"plugins": [
  {
    "name": "@nestjs/swagger",
    "options": {
      "classValidatorShim": false,
      "introspectComments": true
    }
  }
]
```



> 更多详细信息请访问官网：https://docs.nestjs.com/openapi/cli-plugin