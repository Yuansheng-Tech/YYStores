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
import Store, { StoreProps } from '../Store';

export class CareerApplyStore extends Store {
  constructor() {
    super();
    makeObservable(this, {
      // rootStore: false,
      ...StoreProps,
    });
    // this.rootStore = // rootStore;
  }

  api = {
    get: 'career/apply',
    gets: 'career/apply',
    post: 'career/apply',
    put: 'career/apply',
    patch: 'career/apply',
    delete: 'career/apply',
  };
}
