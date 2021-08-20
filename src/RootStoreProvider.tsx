import React, { createContext } from 'react';

// 新建组件：通过 Provider 传递上下文中的数据
export const RootStoreProvider = ({ store, children }) => {
  const { Provider } = createContext(store);
  return <Provider value={store}>{children}</Provider>;
};
