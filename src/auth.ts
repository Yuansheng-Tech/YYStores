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

import { action } from 'mobx';
import Store from './Store';
import { fetch } from '@ysyp/utils';

export class AuthStore extends Store {
  // 微信登录
  @action
  async wxlogin(data) {
    const res = await fetch({
      url: `/mini/login`,
      data,
      method: 'POST'
    });
    return res
  }
  // 用户注册
  @action
  async register(data) {
    const res = await fetch({
      url: `/mini/register`,
      data,
      method: 'POST'
    });
    return res
  }
  // 登录解密
  @action
  async encrypt(data) {
    const res = await fetch({
      url: `/mini/encrypt`,
      data,
      method: 'POST'
    });
    return res.data
  }

  // 公众号登陆
  @action
  async welogin(data) {
    const res = await fetch({
      url: `/mini/welogin`,
      data,
      method: 'POST'
    });
    return res.data
  }

  @action
  async login(data) {
    const res = await fetch({
      url: `/login`,
      data,
      method: 'POST'
    });
    return res
  }
}

// export createContext(new ClassifyStore())
export default new AuthStore()