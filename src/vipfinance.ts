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

import Store from './Store';

export class VipfinanceStore extends Store {
  api = {
    get: 'vipfinance',
    gets: 'vipfinancees',
    post: 'vipfinancees',
    put: 'vipfinancees',
    patch: 'vipfinancees',
    delete: 'vipfinancees'
  }
}

// export createContext(new vipfinanceStore())
export default new VipfinanceStore()