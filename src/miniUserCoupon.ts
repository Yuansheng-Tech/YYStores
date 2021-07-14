/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import Store, { StoreProps } from './Store';
import { action, makeObservable } from 'mobx';
import { fetch } from '@ysyp/utils';
import Taro from '@tarojs/taro';
import i18next from 'i18next';

export class MiniUserCouponStore extends Store {
  rootStore;

  constructor(rootStore) {
    super();
    makeObservable(this, {
      rootStore: false,
      ...StoreProps,

      getPopupCoupon: action,
      getList: action,
      setPopupCouponShowed: action,
      miniUserCouponGet: action,
      miniUserCouponShare: action,
    });
    this.rootStore = rootStore;
  }
  api = {
    get: 'miniUserCoupon',
    gets: 'miniUserCoupones',
    post: 'miniUserCoupones',
    put: 'miniUserCoupones',
    patch: 'miniUserCoupones',
    delete: 'miniUserCoupones',
  };

  async getPopupCoupon(data) {
    return await fetch({ url: `/miniUserCoupon/popup`, data, method: 'GET' });
  }

  async getList(data) {
    return await fetch({ url: `/miniUserCoupon/list`, data, method: 'GET' });
  }

  async setPopupCouponShowed(data) {
    return await fetch({ url: `/miniUserCoupon/showed`, data, method: 'GET' });
  }

  /** 领取优惠券 */
  async miniUserCouponGet(id) {
    return await fetch({ url: `/miniUserCoupon/get/${id}`, data: {}, method: 'GET' });
  }

  async miniUserCouponShare(id) {
    return await fetch({ url: `/miniUserCoupon/share/${id}`, data: {}, method: 'GET' });
  }
}
