# tools

🔧 基于rollup、typescript的工具库

> to

```ts
interface ServerResponse {
  test: number;
}

const p = Promise.resolve({test: 123});

const [err, data] = await to<ServerResponse>(p);

async function asyncFunctionWithThrow() {
  const [err, user] = await to(UserModel.findById(1));
  if (!user) throw new Error('User not found');
}
```