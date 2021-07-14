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
import Store, { StoreProps } from './Store';
import { fetch } from '@ysyp/utils';

/** 地址 */
export class AddressStore extends Store {
  rootStore;

  constructor(rootStore) {
    super();
    makeObservable(this, {
      rootStore: false,
      ...StoreProps,

      getSchool: action,
      getThreeAddress: action,
      addreUser: action,
    });
    this.rootStore = rootStore;
  }

  api = {
    get: 'address',
    gets: 'addresses',
    post: 'addresses',
    put: 'addresses',
    patch: 'addresses',
    delete: 'addresses',
  };

  async getSchool(data) {
    return await fetch({
      url: `/address/school`,
      data,
      method: 'GET',
    });
  }

  async getThreeAddress(code) {
    return await fetch({
      url: `/province/${code}`,
      data: {},
      method: 'GET',
    });
  }

  async addreUser(url = '', data = {}, type) {
    return await fetch({
      url: `/addre/user${url}`,
      data,
      method: type,
    });
  }
}
