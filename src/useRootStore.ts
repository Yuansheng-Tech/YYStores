import React, { createContext, useContext } from 'react';
import { RootStore } from './RootStore';

// single root store instance
const rootStoreInstance: RootStore = new RootStore();

// expose the store
export const getRootStore = () => rootStoreInstance;

export const RootStoreContext = createContext(rootStoreInstance);

// Root store wrapped in a React context.
// 新建钩子函数：获取上下文中的数据（Store 对象）
export const useRootStore = () => {
  return useContext(RootStoreContext);
};
