# tools

### todos

* 本地正常编译
* 发布npm
* 📦导出类型es, cmd..., rollup 合理配置各种形式的打包编辑
* tsx 参考nxb, hooks 拿ahooks
* tsconfig的合理配置
* eslint prettiter hooky
* dumi 制作文档


### 参考

* [ts-monorepo](https://github.com/NiGhTTraX/ts-monorepo)

* [lerna-typescript-cra-uilib-starter](https://github.com/shnydercom/lerna-typescript-cra-uilib-starter)

```ts
  interface ServerResponse {
    test: number;
  }

  const p = Promise.resolve({test: 123});

  const [err, data] = await to<ServerResponse>(p);
  console.log(data.test);

  async function asyncFunctionWithThrow() {
    const [err, user] = await to(UserModel.findById(1));
    if (!user) throw new Error('User not found');
  }
```


```
// Step 1
npm install -g lerna

// Step 2
git init learn-lerna

// Step 3
cd learn-lerna && lerna init

// 为 module 添加 react、react-dom 外部依赖
yarn workspace module add react react-dom --save

// 为 module 添加 本地依赖，@pengyin/ui 为包名
* 需要注意的是，在添加本地依赖时，我们需要在包后添加版本号，否则yarn会搜索远程注册表，而不是搜索工作区的包*
yarn workspace module add @pengyin/ui@1.0.0 --save

// 为全局添加 babel dev依赖
yarn add -W babel --dev

```

### 发布——lerna publish

版权意识不能少，我们需要先选择一个[开源许可证](https://choosealicense.com/)，并将对应的LICENSE安装在项目的根目录下。

```
// Step 1
npm whoami

// Step 2
npm login

// Step 3
lerna publish xx
```

注意：如果你使用了scope，请务必保证你的组织（organizations）已经在NPM中注册，否则你可能会遇到如下的403错误

### 版本更新——lerna version

> 自动化的changelog与版本更新发布

```
// 根据commit提交信息自动生成package版本
lerna version --conventional-commits
```




[antv-g2-transform](https://g2.antv.vision/zh/docs/manual/dataset/transform)

[antvis/util](https://github.com/antvis/util)