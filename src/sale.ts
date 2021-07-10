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

import { observable, action, makeObservable } from 'mobx';

import { fetch } from '@ysyp/utils';

export class SaleStore {
  goodSale = [];
  sourceCount = [];
  rootStore;

  constructor(rootStore) {
    makeObservable(this, {
      rootStore: false,

      getGoodCount: action,
      getSourceCount: action,
    });
    this.rootStore = rootStore;
  }

  async getGoodCount(
    data = {
      shop: {
        id: 0,
      },
    }
  ) {
    const res = await fetch({ url: `/dashboard/good/count`, data, method: 'GET' });
    this.goodSale = res.data || [];
    return res.data || [];
  }

  async getSourceCount(
    data = {
      shop: {
        id: 0,
      },
    }
  ) {
    const res = await fetch({ url: `/dashboard/source/count`, data, method: 'GET' });
    this.sourceCount = res.data || [];
    return res.data || [];
  }
}
