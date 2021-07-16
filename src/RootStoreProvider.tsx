import React from 'react';
import { RootStoreContext } from './useRootStore';

// 新建组件：通过 Provider 传递上下文中的数据
export const RootStoreProvider = ({ store, children }) => {
  const { Provider } = RootStoreContext;
  return <Provider value={store}>{children}</Provider>;
};
