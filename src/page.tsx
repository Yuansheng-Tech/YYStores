import { action, makeObservable, observable } from 'mobx';

import { fetch } from '@ysyp/utils';

export class PageStore {
  rootStore;

  constructor(rootStore) {
    makeObservable(this, {
      rootStore: false,

      appId: observable,
      wechatData: observable,
      wechatPages: observable,
      currentPage: observable,
      setCurrentPage: action,
    });
    this.rootStore = rootStore;
  }

  public appId: string = '';
  public wechatData: object = {};
  public wechatPages: any[] = [];

  public currentPage: any = {};

  setAppId(id) {
    this.appId = id;
  }

  setCurrentPage(data, type: 'id' | 'path' | 'object' = 'object') {
    switch (type) {
      case 'id':
        this.currentPage = (this.wechatPages || []).find((v) => (v.id = data));
        break;
      case 'path':
        this.currentPage = (this.wechatPages || []).find((v) => (v.path = data));
        break;
      case 'object':
        this.currentPage = data;
        break;
      default:
        this.currentPage = this.wechatPages[0];
    }

    console.log('setCurrentPage', data, type, this);

    return this.currentPage;
  }

  async getWechatData(id: string) {
    const result =
      (await fetch({
        url: `/wechats/${id || this.appId}`,
        data: {},
        method: 'GET',
      })) || {};
    this.wechatData = result.data;
    return result;
  }

  async getWechatPages(id: string) {
    const result =
      (await fetch({
        url: `/wechat/pages`,
        data: {
          where: JSON.stringify({
            wechat: {
              id,
            },
          }),
        },
        method: 'GET',
      })) || {};
    this.wechatPages = result.data;
    return result;
  }

  async savePageDataSuore(data) {
    const result =
      (await fetch({
        url: `/wechat/pages`,
        method: 'PUT',
        data: data,
      })) || {};
    const index = this.wechatPages.findIndex((v) => v.id === this.currentPage.id);
    this.wechatPages[index].data = data.data;
    return result;
  }

  async saveComponentDataSuore(data) {
    let result;
    if (data.id) {
      result =
        (await fetch({
          url: `/components`,
          method: 'PUT',
          data: data,
        })) || {};
    } else {
      result =
        (await fetch({
          url: `/components`,
          method: 'POST',
          data: data,
        })) || {};
    }
    // const index = this.wechatPages.findIndex(v => v.id === this.currentPage.id)
    // this.wechatPages[index].data = data.data
    return result;
  }

  async generateData() {
    // api/wechat/build
    const result =
      (await fetch({
        url: `/wechat/build`,
        method: 'PUT',
        data: this.wechatData,
      })) || {};
  }

  async buildPackage() {
    console.log('buildPackage');
  }

  async uploadApp() {
    console.log('uploadApp');
  }
}
