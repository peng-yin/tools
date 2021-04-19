# tools

### todos

* 本地正常编译
* 发布npm
* eslint prettiter hooky
* dumi 制作文档


### 参考

* [ts-monorepo](https://github.com/NiGhTTraX/ts-monorepo)

* [monorepo-utils](https://github.com/azu/monorepo-utils)

* [lerna-typescript-cra-uilib-starter
](https://github.com/shnydercom/lerna-typescript-cra-uilib-starter)

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