# 前端规范准则

## [airbnb规范地址](https://github.com/libertyAlone/airbnb-javascript-style-guide-cn)
- <span style="color: red;">请仔细阅读airbnb规范，非常重要，日常开发请遵循其中规范</span>

## 前端的一些基本的语法遵循以下几点：

1.JavaScript：遵循 Airbnb JavaScript 编码规范，可以使用 ESLint 这样的工具来自动检测和强制执行规范。确保代码清晰易读，避免全局变量和魔术数字，使用语义化的命名约定。 
 
2.HTML/CSS：采用语义化的 HTML 标签，确保页面结构良好。对于 CSS，遵循 BEM（块、元素、修饰符）命名规范，避免使用全局样式，使用层叠样式表（CSS）预处理器（如 Sass）可以提高效率。

3.组件化：使用组件化开发方式，将页面划分为独立的可复用组件。组件应该具有单一职责，易于测试和维护。

4.响应式设计：确保页面在不同屏幕尺寸和设备上都能良好地展示和响应。使用媒体查询和弹性布局技术，优化用户体验。  

5.性能优化：减少网络请求和资源加载时间，优化代码和图像，使用合适的缓存策略，懒加载和代码分割等技术。  

6.可访问性（Accessibility）：遵循 Web 内容可访问性指南（WCAG）以确保应用程序对所有用户都可访问。使用语义化标签，提供适当的文本描述和焦点管理。

# javaScript语法细则

### 变量和函数命名
- 使用驼峰命名法（camelCase）：第一个单词小写，后续每个单词首字母大写，例如：`myVariable`, `calculateScore()`
- 避免使用单个字符或无意义的命名，使用描述性的名称以增加可读性，例如：`firstName`, `calculateScore()`
- 不允许变量和函数出现拼音命名

### 常量命名
- 使用大写字母和下划线（UPPER_CASE）：所有字母大写，单词之间用下划线分隔，例如：`MAX_VALUE`, `PI`
- 常量一般在程序中定义后不会被修改

### 类和构造函数命名
- 使用帕斯卡命名法（PascalCase）：每个单词的首字母都大写，例如：`Person`, `Car`
- 类和构造函数通常用于创建对象实例，可以通过`new`关键字调用

### 文件命名
- 使用小写字母和连字符（kebab-case）：所有字母小写，单词之间用连字符分隔，例如：`my-script.js`, `utils.js`
- react组件命名建议大驼峰命名法: 第一个单词大写，例如：`Home`文件夹里面跟随`Index.tsx`文件及`index.module.css`文件,
- 不允许文件名出现拼音命名

### 函数和方法命名
- 使用驼峰命名法（camelCase）：第一个单词小写，后续每个单词首字母大写，例如：`calculateScore()`, `getUserInfo()`

### 私有属性和方法命名
- 使用下划线作为前缀：例如：`_privateVariable`, `_privateMethod()`
- 虽然JavaScript没有严格的私有性，但约定使用下划线作为前缀表示内部使用或私有性质

### 枚举类型命名
- 使用帕斯卡命名法（PascalCase）：每个单词的首字母都大写，例如：`Color`, `Size`

### 事件处理器命名
- 使用`on`作为前缀：例如：`onClick()`, `onSubmit()`, `handleSubmit`

# react + typeScript项目部分细则

### 文件和组件命名
- 使用帕斯卡命名法（PascalCase）为React组件命名，例如：`MyComponent.tsx`。
- 使用帕斯卡命名法（PascalCase）为React组件的文件命名，例如：`MyComponent.tsx`。
- 使用小写字母和连字符（kebab-case）为普通文件（非React组件）命名，例如：`utils.ts`。

### 类型注解
- 使用TypeScript提供的类型注解，明确定义React组件和其他函数的输入和输出。
- 为每个组件的Props使用`React.FC<Props>`类型注解。
- 尽可能使用具体的类型而不是`any`，以获得更好的类型检查和代码提示。

### 状态管理
- 使用React的Context API、Redux或Mobx等状态管理库来管理应用程序的状态。
- 在组件之间共享状态时，使用适当的状态管理方案，而不是将状态传递多层级的props。

### 组件拆分
- 将大型组件拆分为更小的可复用组件，以提高代码的可读性和可维护性。
- 考虑单一职责原则，每个组件应该只关注一项功能。

### 强制使用严格模式
- 在应用程序的根组件或根文件中启用React的严格模式，以帮助捕获常见的错误并改善开发者体验。

### 使用Hooks
- 使用React Hooks来管理组件的状态和生命周期方法，避免使用类组件中的`this`和生命周期方法。
- 使用`useState`、`useEffect`和其他合适的Hooks来处理组件的状态和副作用。

### 组件样式
- 使用CSS模块、Styled Components或其他CSS-in-JS解决方案，以实现组件级别的样式隔离和可重用性。
- 避免直接操作DOM，优先使用React提供的方式来修改样式。

### 异步操作和副作用
- 使用`async/await`、`Promise`或其他适当的异步处理方式来处理数据获取、副作用和异步操作。

### 代码格式化和Linting
- 使用代码格式化工具（如Prettier）和静态代码分析工具（如ESLint）来保持一致的代码风格和检测潜在的问题。

### 文档和注释
- 编写清晰、详尽的文档和注释，解释组件、函数和复杂逻辑的用途和实现细节。

# CSS Modules规范

### 命名约定
- 使用有意义的类名来描述元素的用途和功能。
- 避免使用全局唯一的类名，以减少样式冲突的可能性。

### 类名导入
- 在使用CSS Modules的组件中，使用类名导入来引入样式。例如，使用`import styles from './styles.module.css'`来导入CSS模块文件。

### 类名使用
- 在组件的HTML结构中，使用导入的类名作为元素的类名。例如，`<div className={styles.container}>`。

### 样式组合
- 可以使用对象的属性和操作符将多个类名组合在一起。例如，`<div className={`${styles.container} ${styles.active}`}>`。

### 局部作用域
- CSS Modules会为每个类名自动生成唯一的局部作用域的类名，以确保样式只应用于当前组件。
- 可以通过使用类名的对象属性来引用局部作用域的类名。例如，`styles.container`。

### 全局样式
- 对于全局样式，可以使用`:global`选择器来取消局部作用域。例如，`:global .container`。

### 动态样式
- 可以通过对象属性和表达式来动态生成样式。例如，`<div className={`${styles.container} ${isActive ? styles.active : ''}`}>`。

### 媒体查询和响应式样式
- 在CSS Modules中，可以直接在类名中嵌入媒体查询或使用响应式的命名约定。例如，`styles.containerLarge`。

### 变量和函数
- 可以在CSS模块文件中定义变量和函数，并在类名中使用它们。例如，`styles.colorPrimary`。

### 提取公共样式
- 识别并提取多个组件中的公共样式，以减少重复的代码和样式。

# react项目模块创建规范及部分目录文件说明
- 项目文件创建是以大模块为主文件目录，细分模块为辅的文件目录构造。例如，首页模块创建`Home`文件夹, `Index.tsx`为主入口，里面则对应细分如：`Banner模块`、`Notify模块`、`Download模块`
#### api目录
- api文件夹存放的是接口文件
- 命名细则是根据后端接口地址来命名创建如：`/api/v1/account`
  - 则在文件中创建：`account.ts`文件，依此类推
#### components目录
- 公用组件模块目录文件夹
#### assets静态资源目录
- images存放图片
- iconfont存放本地字体图标，需要使用: `Uniconde`标准不会在部署的时候出现乱码
- stylesheet样式文件存放目录
#### lang目录
- lang多语言文件存放目录
#### plugins目录
- plugins项目插件目录
- `axios`封装，[doc](https://github.com/axios/axios#axios-api)
- `event`事件, [doc](https://nodejs.org/dist/latest-v14.x/docs/api/events.html#events_class_eventemitter)
#### setup目录
  - 多语言设置封装: `i18n-next`，[doc](https://www.i18next.com/overview/configuration-options)
  - 路由设置封装：`router-setup`, [doc](https://reactrouter.com/en/v6.3.0/upgrading/v5#:%7E:text=single%20route%20config%3A-,//%20This%20is%20a%20React%20Router%20v6%20app,%7D,-This%20step%20is)
#### utils目录
- 工具文件存放在：`utils文件夹中`
#### store目录
- 存放的是状态管理器代码，使用的库是：[effector-react](https://effector.dev/docs/api/effector-react)
#### views目录
- 项目组件存放目录

