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

import { action, makeObservable } from 'mobx';
import Taro from '@tarojs/taro';
import Store, { StoreProps } from './Store';
import { fetch } from '@ysyp/utils';

export class SchoolStore extends Store {
  nearBySchool = Taro.getStorageSync('nearBySchool') || {};
  setSchoolAdress = Taro.getStorageSync('setSchoolAdress') || {};
  SchoolAdressFlag = Taro.getStorageSync('SchoolAdressFlag') || {};
  shchoolId = Taro.getStorageSync('shchoolId');
  nearBySchools = [];

  rootStore;

  constructor(rootStore) {
    super();
    makeObservable(this, {
      rootStore: false,
      ...StoreProps,

      bylbs: action,
    });
    this.rootStore = rootStore;
  }

  api = {
    get: 'school',
    gets: 'schools',
    post: 'schools',
    put: 'schools',
    patch: 'schools',
    delete: 'schools',
  };

  // 根据地理位置获取最近店铺
  async bylbs(data) {
    return await fetch({ url: `/schools/bylbs`, data, method: 'GET' });
  }
}
