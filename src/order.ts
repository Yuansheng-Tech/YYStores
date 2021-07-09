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

import Taro from '@tarojs/taro'
import { action } from 'mobx';
import i18next from 'i18next';
import { fetch } from '@ysyp/utils';
import Store from './Store';

export class OrderStore extends Store {
  api = {
    get: 'order',
    gets: 'order',
    post: 'order',
    put: 'orders',
    patch: 'orders',
    delete: 'order'
  }

  // VIP order
  @action
  async vip(data) {
    const res = await fetch({ url: `/order/vip`, data, method: 'POST' });
    return res.data
  }

  @action
  async add(data) {
    const res = await fetch({ url: `/order/add`, data, method: 'POST' });
    return res.data
  }

  @action
  async check(data) {
    const res = await fetch({ url: `/order/check`, data, method: 'POST' });
    return res.data
  }

  @action
  async memopay(data) {
    const res = await fetch({ url: `/order/memopay`, data, method: 'PUT' });
    return res
  }

  @action
  async lists(data) {
    const res = await fetch({ url: `/order/lists`, data, method: 'GET' });
    return res.data
  }

  @action
  async list(type, data) {
    const res = await fetch({ url: `/order/list/${type}`, data, method: 'GET' });
    return res.data
  }

  // 购买健身课程
  @action
  async classes(data) {
    const res = await fetch({ url: `/order/class`, data, method: 'POST' });
    return res
  }

  // 购买优惠券
  @action
  async coupon(data) {
    const res = await fetch({ url: `/order/coupon`, data, method: 'POST' });
    return res.data || {}
  }

  @action
  async qrcode(id, data) {
    const res = await fetch({ url: `/order/qrcode/${id}`, data, method: 'GET' });
    return res.data || {}
  }

  @action
  async rush(data) {
    Taro.showLoading({
      title: i18next.t('加载中...')
    });
    const res = await fetch({ url: `/order/rush`, data, method: 'PUT' });
    Taro.hideLoading();
    return res.data || {}
  }

  @action
  async cancel(data) {
    Taro.showLoading({
      title: i18next.t('加载中...')
    });
    const res = await fetch({ url: `/order/refund`, data, method: 'POST' });
    Taro.hideLoading();
    return res.data || {}
  }

  @action
  async finish(data) {
    Taro.showLoading({
      title: i18next.t('加载中...')
    });
    const res = await fetch({ url: `/order/finish`, data, method: 'PUT' });
    Taro.hideLoading();
    return res.data || {}
  }

  // 购买优惠券成功
  @action
  async success(data, callback = () => {}) {
    const res = await fetch({ url: `/order/success`, data, method: 'PUT' });
    const { message, statusCode } = res;
    
    Taro.showToast({
      title: statusCode === 200 ? i18next.t('购买成功') : i18next.t('购买出错'),
      icon: statusCode === 200 ? 'success' : 'none',
      duration: 2000,
    }).then(() => (statusCode === 200) && callback());
    return res.data || {}
  }
}

// export createContext(new OrderStore())
export default new OrderStore()