import { observable, toJS, makeObservable } from 'mobx';
import React from 'react';
import _ from 'lodash';

import { componentsData } from '@ysyp/ui';

export interface ImainSource {
  icon: string;
  text: string;
  image: string;
  component: React.ReactNode;
  data: object;
}

export class EditorStore {
  public data = componentsData;

  public mainSource: ImainSource[] = [];

  public configSource: any = {};
  public configDataSource: any = {};
  public selectConfigSource: number = 0;

  public preview: boolean = false;

  rootStore;

  constructor(rootStore) {
    makeObservable(this, {
      rootStore: false,

      data: observable,
      mainSource: observable,
      configSource: observable,
      configDataSource: observable,
      selectConfigSource: observable,
      preview: observable,
    });
    this.rootStore = rootStore;
  }

  setMainSource(val: ImainSource[], replace = false) {
    replace ? (this.mainSource = val) : this.mainSource.push(...val);
  }

  setMainSourceItem(type: string, index: number, item: ImainSource) {
    const mainSourceStash = toJS(this.mainSource);
    index = Number(index);
    switch (type) {
      case 'delete':
        this.mainSource.splice(index, 1);
        break;
      case 'plus':
        this.mainSource.splice(index, 0, mainSourceStash[index]);
        break;
      case 'up':
        if (!index) {
          return;
        }
        const stash = mainSourceStash[index - 1];
        this.mainSource[index - 1] = mainSourceStash[index];
        this.mainSource[index] = stash;
        break;
      case 'down':
        if (index + 1 === mainSourceStash.length) {
          return;
        }
        const stash1 = this.mainSource[index + 1];
        this.mainSource[index + 1] = mainSourceStash[index];
        this.mainSource[index] = stash1;
        break;
      case 'add':
        this.mainSource = mainSourceStash
          .slice(0, index + 1)
          .concat(item)
          .concat(mainSourceStash.slice(index + 1));
        break;
      case 'replace':
        mainSourceStash[index] = item;
        this.setMainSource(mainSourceStash, true);
        break;
    }
  }

  setConfigSource(val: any, key: number) {
    this.configSource = val;
    this.configDataSource = val.data;
    this.selectConfigSource = key;
  }

  setConfigDataSource(val: any, index: number, key: string) {
    this.selectConfigSource = index;
    _.set(this.configDataSource, key, val);
    _.set(this.mainSource[index].data, key, val);
  }

  setPreview(val: boolean) {
    this.preview = val;
  }
}
