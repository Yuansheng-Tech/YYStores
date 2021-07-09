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

import Store from './Store';
import { action } from 'mobx';
import { fetch } from '@ysyp/utils';
import Taro from '@tarojs/taro';
import i18next from 'i18next';

export class MiniUserCouponStore extends Store {
  api = {
    get: 'miniUserCoupon',
    gets: 'miniUserCoupones',
    post: 'miniUserCoupones',
    put: 'miniUserCoupones',
    patch: 'miniUserCoupones',
    delete: 'miniUserCoupones'
  }
 
  @action
  async getPopupCoupon(data) {
    const res = await fetch({ url: `/miniUserCoupon/popup`, data, method: 'GET' });
    return res.data || []
  }
 
  @action
  async getList(data) {
    const res = await fetch({ url: `/miniUserCoupon/list`, data, method: 'GET' });
    return res.data
  }
 
  @action
  async setPopupCouponShowed(data) {
    const res = await fetch({ url: `/miniUserCoupon/showed`, data, method: 'GET' });
    return res.data
  }

  /**
   * 领取优惠券
   */
  @action
  async miniUserCouponGet(id) {
    const res = await fetch({ url: `/miniUserCoupon/get/${id}`, data: {}, method: 'GET' });
    (res.statusCode === 200) && Taro.showToast({
      title: i18next.t('领取成功'),
      icon: 'success',
      duration: 2000,
    });
    /**
     * 返回 status 做判断
     */
    return res.data
  }

  @action
  async miniUserCouponShare(id) {
    const res = await fetch({ url: `/miniUserCoupon/share/${id}`, data: {}, method: 'GET' });
    return res.data
  }
}

// export createContext(new miniUserCouponStore())
export default new MiniUserCouponStore()