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

  api = {
    get: '',
    gets: '',
    post: '',
    put: '',
    delete: '',
    patch: '',
  };

  /** @param url 路径 或者 ID */
  async get(url: string | object = '', data) {
    Taro.showLoading({
      title: '加载中...',
    });
    const res = await fetch({
      url: `/${this.api.get}${url}`,
      data,
      method: 'GET',
    });
    this.data = res.data || '';
    Taro.hideLoading();
    return res.data;
  }

  async gets(url: string, data) {
    Taro.showLoading({
      title: '加载中...',
    });
    const res = await fetch({
      url: `/${this.api.gets}${url}`,
      data,
      method: 'GET',
    });
    this.datas = res.data || [];
    Taro.hideLoading();
    return res.data || [];
  }

  async fetchs(data) {
    Taro.showLoading({
      title: '加载中...',
    });
    const res = await fetch({
      url: `/${this.api.gets}`,
      data,
      method: 'GET',
    });
    this.datas = res.data || [];
    Taro.hideLoading();
    return res.data || [];
  }

  async post(data) {
    Taro.showLoading({
      title: '加载中...',
    });
    const res = await fetch({
      url: `/${this.api.post}`,
      data,
      method: 'POST',
    });
    this.data = res.data || '';
    Taro.hideLoading();
    return res.data;
  }

  async put(data) {
    Taro.showLoading({
      title: '加载中...',
    });
    const res = await fetch({ url: `/${this.api.put}`, data, method: 'PUT' });
    this.data = res.data || '';
    Taro.hideLoading();
    return res.data;
  }

  async patch(data) {
    Taro.showLoading({
      title: '加载中...',
    });
    const res = await fetch({
      url: `/${this.api.patch}`,
      data,
      method: 'PUT',
    });
    this.data = res.data || '';
    Taro.hideLoading();
    return res.data;
  }

  async delete(data) {
    Taro.showLoading({
      title: '加载中...',
    });
    const res = await fetch({
      url: `/${this.api.delete}/${data.id}`,
      data,
      method: 'DELETE',
    });
    this.data = res.data || '';
    Taro.hideLoading();
    return res.data;
  }
}
