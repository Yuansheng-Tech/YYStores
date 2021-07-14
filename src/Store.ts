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
import Taro from '@tarojs/taro';

import { fetch } from '@ysyp/utils';

export const StoreProps = {
  data: observable,
  datas: observable,
  page: observable,

  setData: action,
  setDatas: action,
  setPage: action,

  get: action,
  gets: action,
  post: action,
  put: action,
  delete: action,
  patch: action,
};
export default class Store {
  data = '';
  datas = [];
  page = {
    count: 0,
    skip: 0,
    take: 10,
  };

  api = {
    get: '',
    gets: '',
    post: '',
    put: '',
    delete: '',
    patch: '',
  };

  setData(data) {
    this.data = data;
  }
  setDatas(datas = []) {
    if (this.page.skip) {
      this.datas = this.datas.concat(datas);
    } else {
      this.datas = datas;
    }
  }
  setPage(page) {
    this.page = {
      ...this.page,
      ...page,
    };
  }
  /** @param url 路径 或者 ID */
  async get(url: string | object = '', data) {
    return await fetch({
      url: `/${this.api.get}${url}`,
      data,
      method: 'GET',
    });
  }

  async gets(url: string, data) {
    return await fetch({
      url: `/${this.api.gets}${url}`,
      data,
      method: 'GET',
    });
  }

  async fetchs(data) {
    return await fetch({
      url: `/${this.api.gets}`,
      data,
      method: 'GET',
    });
  }

  async post(data) {
    return await fetch({
      url: `/${this.api.post}`,
      data,
      method: 'POST',
    });
  }

  async put(data) {
    return await fetch({ url: `/${this.api.put}`, data, method: 'PUT' });
  }

  async patch(data) {
    return await fetch({
      url: `/${this.api.patch}`,
      data,
      method: 'PUT',
    });
  }

  async delete(data) {
    return await fetch({
      url: `/${this.api.delete}/${data.id}`,
      data,
      method: 'DELETE',
    });
  }
}
