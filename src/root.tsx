import React, { createContext, useContext } from 'react';

import { ShareStore } from './share';
import { ShopGoodStore } from './shopGood';
import { ClassifyStore } from './classify';
import { MiniUserStore } from './miniUser';
import { EmployeeStore } from './employee';
import { ShopStore } from './shop';
import { SchoolStore } from './school';
import { GoodStore } from './good';
import { OrderStore } from './order';
import { MiniUserCouponStore } from './miniUserCoupon';
import { VipfinanceStore } from './vipfinance';
import { AddressStore } from './address';
import { WechatStore } from './wechat';
import { WeappStore } from './weapp';
import { VipStore } from './vip';
import { StaticStore } from './static';
import { AuthStore } from './auth';
import { OffiaccountStore } from './offiaccount';
import { SystemStore } from './system';
import { BrandStore } from './brand';
import { OpenadsStore } from './openads';
import { WechatIndexStore } from './wechatIndex';
import { FileStore } from './file';
import { SaleStore } from './sale';
import { UserStore } from './user';
import { FeedbackStore } from './feedback';

import { PageStore } from './page';
import { GlobalStore } from './global';
import { EditorStore } from './editor';

import { UIStore } from './ui';

class RootStore {
  addressStore;
  shareStore;
  shopStore;
  schoolStore;
  shopGoodStore;
  classifyStore;
  miniUserStore;
  goodStore;
  vipStore;
  miniUserCouponStore;
  vipfinanceStore;
  orderStore;
  wechatStore;
  weappStore;
  staticStore;
  authStore;
  employeeStore;
  offiaccountStore;
  systemStore;
  brandStore;
  openadsStore;
  wechatIndexStore;
  fileStore;
  saleStore;
  userStore;
  feedbackStore;
  pageStore;
  globalStore;
  editorStore;
  uiStore;

  constructor() {
    // data request
    this.addressStore = new AddressStore(this);
    this.shareStore = new ShareStore(this);
    this.shopStore = new ShopStore(this);
    this.schoolStore = new SchoolStore(this);
    this.shopGoodStore = new ShopGoodStore(this);
    this.classifyStore = new ClassifyStore(this);
    this.miniUserStore = new MiniUserStore(this);
    this.goodStore = new GoodStore(this);
    this.vipStore = new VipStore(this);
    this.miniUserCouponStore = new MiniUserCouponStore(this);
    this.vipfinanceStore = new VipfinanceStore(this);
    this.orderStore = new OrderStore(this);
    this.addressStore = new AddressStore(this);
    this.wechatStore = new WechatStore(this);
    this.weappStore = new WeappStore(this);
    this.staticStore = new StaticStore(this);
    this.authStore = new AuthStore(this);
    this.employeeStore = new EmployeeStore(this);
    this.offiaccountStore = new OffiaccountStore(this);
    this.systemStore = new SystemStore(this);
    this.brandStore = new BrandStore(this);
    this.openadsStore = new OpenadsStore(this);
    this.wechatIndexStore = new WechatIndexStore(this);
    this.fileStore = new FileStore(this);
    this.saleStore = new SaleStore(this);
    this.userStore = new UserStore(this);
    this.feedbackStore = new FeedbackStore(this);

    // 界面
    this.uiStore = new UIStore(this);

    // editor
    this.pageStore = new PageStore(this);
    this.globalStore = new GlobalStore(this);
    this.editorStore = new EditorStore(this);
  }
}

// single root store instance
const rootStoreInstance: RootStore = new RootStore();

// expose the store
export const getRootStore = () => rootStoreInstance;

const RootStoreContext = React.createContext(rootStoreInstance);

// Root store wrapped in a React context.
// 新建钩子函数：获取上下文中的数据（Store 对象）
const useRootStore = () => {
  return useContext(RootStoreContext);
};

// 新建组件：通过 Provider 传递上下文中的数据
const RootStoreProvider = ({ store, children }) => {
  const { Provider } = RootStoreContext;
  return <Provider value={store}>{children}</Provider>;
};

export { RootStore, RootStoreProvider, useRootStore };
