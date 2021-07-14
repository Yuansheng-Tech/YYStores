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
import Store, { StoreProps } from './Store';
import { fetch } from '@ysyp/utils';

export class FileStore extends Store {
  file = '';
  rootStore;

  constructor(rootStore) {
    super();
    makeObservable(this, {
      rootStore: false,
      ...StoreProps,

      fileUpload: action,
    });
    this.rootStore = rootStore;
  }
  api = {
    get: '',
    gets: '',
    post: `/file/wxupload`,
    put: '',
    patch: '',
    delete: '',
  };

  async fileUpload(data) {
    return await fetch({
      url: `/file/wxupload`,
      data,
      method: 'GET',
    });
  }
}
