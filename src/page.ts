import { action, makeObservable, observable, toJS } from 'mobx';

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
        this.currentPage = this.wechatPages.find((v) => data === v.id);
        break;
      case 'path':
        this.currentPage = this.wechatPages.find((v) => data === v.path);
        break;
      case 'object':
        this.currentPage = this.wechatPages.find((v) => data.id === v.id);
        break;
    }
    return this.currentPage;
  }

  async getWechatData(id: string) {
    const result =
      (await fetch({
        url: `/wechats/${id || this.appId}`,
        data: {},
        method: 'GET',
      })) || {};
    this.wechatData = result.data || {};
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
    this.wechatPages = result.data || [];
    console.log('stores result', result, this.wechatPages);
    return result;
  }

  async savePageDataSuore(data) {
    console.log('savePageDataSuore', data);
    const result =
      (await fetch({
        url: `/wechat/pages/${data.id}`,
        //@ts-ignore
        method: 'PATCH',
        data: data,
      })) || {};
    // this.wechatPages.findIndex((v) => v.id === this.currentPage.id);
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
    return result;
  }

  async generateData() {
    // api/wechat/build
    return await fetch({
      url: `/wechat/build`,
      method: 'PUT',
      data: this.wechatData,
    });
  }

  async buildPackage() {
    console.log('buildPackage');
  }

  async uploadApp() {
    console.log('uploadApp');
  }
}
