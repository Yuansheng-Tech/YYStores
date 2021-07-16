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
import { action, makeObservable, observable } from 'mobx';
import { fetch } from '@ysyp/utils';

export interface IGood {
  id: string;
  updateId: string;
  name: string;
  type: string;
  status: number;
  icon: string;
  summary: string;
  description: string;
  price_min: string;
  stock: number;
  total_sale: number;
  special_price: boolean;
  weight: number;
  unit: string;
  vip_channel: string;
  wow: string;
  // vlog:	[...]
  // album:	[...]
  // materiels:	[...]
  // product_introduction_imgs:	[...]
  // menu_imgs:	[...]
  // test_report_imgs:	[...]
  // recommends:	[...]
  // source:	SourceEntity{...}
  // tags:	[...]
}

export class GoodStore extends Store {
  rootStore;

  constructor(rootStore) {
    super();
    makeObservable(this, {
      rootStore: false,
      ...StoreProps,

      byids: action,
    });
    this.rootStore = rootStore;
  }
  api = {
    get: 'good',
    gets: 'goods',
    post: 'goods',
    put: 'goods',
    patch: 'goods',
    delete: 'goods',
  };

  async byids(data) {
    return await fetch({ url: `/goods/byids`, data, method: 'GET' });
  }
}
