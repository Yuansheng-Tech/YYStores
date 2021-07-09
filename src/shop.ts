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

import { observable, action } from 'mobx';
import Taro from '@tarojs/taro';
import Store from './Store';
import { fetch } from '@ysyp/utils';

export class ShopStore extends Store {
  @observable shopId = ''
  @observable nearByShop = Taro.getStorageSync('nearByShop') || {}
  @observable setShopAdress = Taro.getStorageSync('setShopAdress') || ''
  @observable ShopAdressFlag = Taro.getStorageSync('ShopAdressFlag') || 0
  @observable nearByShopes = []

  api = {
    get: 'shop',
    gets: 'shopes',
    post: 'shopes',
    put: 'shopes',
    patch: 'shopes',
    delete: 'shopes'
  }

  // 根据地理位置获取最近店铺
  @action
  async bylbs(data) {
    // data.brandId = Taro.getStorageSync('brand').id;
    
    const res = await fetch({ url: `/shopes/bylbs`, data, method: 'GET' });
    return res
  }

  @action
  async byids(data) {
    const res = await fetch({ url: `/shopes/byids`, data, method: 'GET' });
    return res
  }
}

// export createContext(new shopStore())
export default new ShopStore()