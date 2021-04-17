# tools

### todos

* 本地正常编译
* 发布npm
* dumi 制作文档

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