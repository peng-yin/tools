<div align="center">
<h1>tools-ts <sup><sup><sub>v1</sub></sup></sup></h1>
Tool library based on typescript.

![](https://img.shields.io/npm/v/@pengyin/tools)
![](https://img.shields.io/github/license/peng-yin/tools)
![](https://img.shields.io/npm/types/@pengyin/tools)
![](https://img.shields.io/bundlephobia/min/@pengyin/tools)

</div>
## Install

```sh
yarn add @pengyin/tools

# npm install @pengyin/tools
```

## Usage

```ts
import { to  } from "@pengyin/tools";

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

## feature
- docs
- jest

## License

[MIT License](https://github.com/peng-yin/tools/blob/main/LICENSE)



