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

/** 权限，登录，注册 */
export class AuthStore extends Store {
  rootStore;

  constructor(rootStore) {
    super();
    makeObservable(this, {
      rootStore: false,
      ...StoreProps,

      wxlogin: action,
      register: action,
      encrypt: action,
      welogin: action,
      login: action,
    });
    this.rootStore = rootStore;
  }

  /** 微信登录 */
  async wxlogin(data) {
    return await fetch({
      url: `/mini/login`,
      data,
      method: 'POST',
    });
  }
  /** 用户注册 */
  async register(data) {
    return await fetch({
      url: `/mini/register`,
      data,
      method: 'POST',
    });
  }
  /** 登录解密 */
  async encrypt(data) {
    return await fetch({
      url: `/mini/encrypt`,
      data,
      method: 'POST',
    });
  }

  /** 公众号登陆 */
  async welogin(data) {
    return await fetch({
      url: `/mini/welogin`,
      data,
      method: 'POST',
    });
  }

  /** H5 登录 */
  async login(data) {
    return await fetch({
      url: `/login`,
      data,
      method: 'POST',
    });
  }
}
