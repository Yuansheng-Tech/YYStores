# YY Stores

[![NPM][npm-version-image]][npm-version-url] [![NPM Downloads][npm-downloads-image]][npm-version-url] [![License][license-image]][license-url]

> YYStores 可能会出现较大改动并且不保证功能完整可用，请谨慎使用。

## 安装

在项目中安装 YYStores

```bash
npm install @ysyp/stores
```

## 使用

在代码中 `import` 需要的组件并按照文档说明使用

```js
import {
  // 单类 Store
  GoodStore,
  
  /**
   * 项目使用
   * <RootStoreProvider store={new RootStore()} >
   *   {props.children}
   * </RootStoreProvider>
   */
  RootStore,
  RootStoreProvider,

  /**
   * 代码使用
   * const { goodStore } = useRootStore();
   */
  useRootStore
} from '@ysyp/stores';
```

## 开发交流

[Issues
](https://github.com/Yuansheng-Tech/YYStores/issues)

## 开发计划

[开发计划](./PLANS.md)

## License

MIT

[npm-version-image]: https://img.shields.io/npm/v/@ysyp/stores.svg?style=flat-square
[npm-version-url]: https://www.npmjs.com/package/@ysyp/stores
[npm-downloads-image]: https://img.shields.io/npm/dm/@ysyp/stores?style=flat-square
[npm-downloads-url]: https://www.npmjs.com/package/@ysyp/stores
[license-image]: https://img.shields.io/github/license/Yuansheng-Tech/YYStores?style=flat-square
[license-url]: https://github.com/Yuansheng-Tech/YYStores/blob/master/LICENSE
