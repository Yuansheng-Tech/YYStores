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

export class ClassifyStore extends Store {
  rootStore;

  constructor(rootStore) {
    super();
    makeObservable(this, {
      rootStore: false,
      ...StoreProps,

      periphery: action,
    });
    this.rootStore = rootStore;
  }
  api = {
    get: 'classify',
    gets: 'classifies',
    post: 'classifies',
    put: 'classifies',
    patch: 'classifies',
    delete: 'classifies',
  };

  /**
   * 获取周边分类
   *
   * @param shopId
   * @param data
   */
  periphery(shopId, data) {
    return fetch({
      url: `/classify/periphery/${shopId}`,
      data,
      method: 'GET',
    });
  }
}
