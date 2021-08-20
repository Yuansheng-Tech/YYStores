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

// import { PageStore } from './page';
// import { GlobalStore } from './global';
// import { EditorStore } from './editor';

import { UIStore } from './ui';

export class RootStore {
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
  // pageStore;
  // globalStore;
  // editorStore;
  uiStore;

  constructor() {
    // data request
    this.addressStore = new AddressStore();
    this.shareStore = new ShareStore();
    this.shopStore = new ShopStore();
    this.schoolStore = new SchoolStore();
    this.shopGoodStore = new ShopGoodStore();
    this.classifyStore = new ClassifyStore();
    this.miniUserStore = new MiniUserStore();
    this.goodStore = new GoodStore();
    this.vipStore = new VipStore();
    this.miniUserCouponStore = new MiniUserCouponStore();
    this.vipfinanceStore = new VipfinanceStore();
    this.orderStore = new OrderStore();
    this.addressStore = new AddressStore();
    this.wechatStore = new WechatStore();
    this.weappStore = new WeappStore();
    this.staticStore = new StaticStore();
    this.authStore = new AuthStore();
    this.employeeStore = new EmployeeStore();
    this.offiaccountStore = new OffiaccountStore();
    this.systemStore = new SystemStore();
    this.brandStore = new BrandStore();
    this.openadsStore = new OpenadsStore();
    this.wechatIndexStore = new WechatIndexStore();
    this.fileStore = new FileStore();
    this.saleStore = new SaleStore();
    this.userStore = new UserStore();
    this.feedbackStore = new FeedbackStore();

    // 界面
    this.uiStore = new UIStore();

    // editor
    // this.pageStore = new PageStore();
    // this.globalStore = new GlobalStore();
    // this.editorStore = new EditorStore();
  }
}
