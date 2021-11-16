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

import { action, makeObservable, observable } from 'mobx';
import Store, { StoreProps } from './Store';
import { fetch } from './utils/fetch';

export class MiniUserStore extends Store {
  /** 接口返回资料 */
  userData: any = {};
  employee: any = {};

  gender = [
    '同学',
    '男士',
    '女士',
    // i18next.t('同学'),
    // i18next.t('男士'),
    // i18next.t('女士')
  ];
  // rootStore;

  constructor() {
    super();
    makeObservable(this, {
      // rootStore: false,
      ...StoreProps,
      userData: observable,
      employee: observable,

      account: action,
      setUserData: action,
    });
    // this.rootStore = // rootStore;
  }

  api = {
    get: 'miniUser',
    gets: 'miniUsers',
    post: 'miniUsers',
    put: 'miniUser',
    patch: 'miniUsers',
    delete: 'miniUsers',
  };

  setUserData(data = {}) {
    console.log('setUserData', data);
    this.userData = data;
  }

  async account(data) {
    return await fetch({ url: `/miniUser/account`, data, method: 'GET' });
  }
}
