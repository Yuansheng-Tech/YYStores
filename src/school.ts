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

export class ShchollStore extends Store {
  @observable nearBySchool = Taro.getStorageSync('nearBySchool') || {}
  @observable setSchoolAdress =  Taro.getStorageSync('setSchoolAdress') || {};
  @observable SchoolAdressFlag = Taro.getStorageSync('SchoolAdressFlag') || {};
  @observable shchoolId =  Taro.getStorageSync('shchoolId');
  @observable nearBySchools = []

  api = {
    get: 'school',
    gets: 'schools',
    post: 'schools',
    put: 'schools',
    patch: 'schools',
    delete: 'schools'
  }

  // 根据地理位置获取最近店铺
  @action
  async bylbs(data) {
    const res = await fetch({ url: `/schools/bylbs`, data, method: 'GET' });
    return res
  }
}

export default new ShchollStore()