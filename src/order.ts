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

import Taro from '@tarojs/taro';
import { action, makeObservable } from 'mobx';
import i18next from 'i18next';
import { fetch } from '@ysyp/utils';
import Store, { StoreProps } from './Store';

export class OrderStore extends Store {
  rootStore;

  constructor(rootStore) {
    super();
    makeObservable(this, {
      rootStore: false,
      ...StoreProps,

      vip: action,
      add: action,
      check: action,
      memopay: action,
      list: action,
      lists: action,
      coupon: action,
      classes: action,
      qrcode: action,
      rush: action,
      cancel: action,
      finish: action,
      success: action,
    });
    this.rootStore = rootStore;
  }
  api = {
    get: 'order',
    gets: 'order',
    post: 'order',
    put: 'orders',
    patch: 'orders',
    delete: 'order',
  };

  // VIP order
  async vip(data) {
    const res = await fetch({ url: `/order/vip`, data, method: 'POST' });
    return res.data;
  }

  async add(data) {
    const res = await fetch({ url: `/order/add`, data, method: 'POST' });
    return res.data;
  }

  async check(data) {
    return await fetch({ url: `/order/check`, data, method: 'POST' });
  }

  async memopay(data) {
    return await fetch({ url: `/order/memopay`, data, method: 'PUT' });
  }

  async lists(data) {
    return await fetch({ url: `/order/lists`, data, method: 'GET' });
  }

  async list(type, data) {
    return await fetch({ url: `/order/list/${type}`, data, method: 'GET' });
  }

  // 购买健身课程
  async classes(data) {
    return await fetch({ url: `/order/class`, data, method: 'POST' });
  }

  // 购买优惠券
  async coupon(data) {
    return await fetch({ url: `/order/coupon`, data, method: 'POST' });
  }

  async qrcode(id, data) {
    return await fetch({ url: `/order/qrcode/${id}`, data, method: 'GET' });
  }

  async rush(data) {
    // Taro.showLoading({
    //   title: i18next.t('加载中...'),
    // });
    return await fetch({ url: `/order/rush`, data, method: 'PUT' });
    // Taro.hideLoading();
  }

  async cancel(data) {
    return await fetch({ url: `/order/refund`, data, method: 'POST' });
  }

  async finish(data) {
    return await fetch({ url: `/order/finish`, data, method: 'PUT' });
  }

  // 购买优惠券成功
  async success(data, callback = () => {}) {
    return await fetch({ url: `/order/success`, data, method: 'PUT' });
  }
}
