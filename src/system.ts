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

import { observable, action } from 'mobx';
import Taro from '@tarojs/taro';
import Store from './Store';
import { fetch } from '@ysyp/utils';

export class SystemStore extends Store {
  @observable mineList = []
  @observable firstRegisterLimit = []
  api = {
    get: 'system',
    gets: '',
    post: '',
    put: '',
    patch: '',
    delete: ''
  }

  @action
  async getOneByEfunc(url, data={}) {
    Taro.showLoading({
      title: "加载中..."
    });
    const sysData = await fetch(`/${this.api.get}${url}`, data) || {};
    console.log('sysData', sysData);
    const result = (sysData.data && sysData.data.length) ? JSON.parse(sysData.data[0].value) : null
    Taro.hideLoading();
    return result
  }
}

// export createContext(new shopStore())
export default new SystemStore()