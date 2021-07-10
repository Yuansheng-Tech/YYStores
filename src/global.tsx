import { makeObservable, observable } from 'mobx';

export class GlobalStore {
  rootStore;

  constructor(rootStore) {
    makeObservable(this, {
      rootStore: false,

      sourceShow: observable,
      configShow: observable,
    });
    this.rootStore = rootStore;
  }

  public sourceShow: boolean = true;
  public configShow: boolean = true;

  toggleSourceShow = () => {
    this.sourceShow = !this.sourceShow;
  };
  toggleConfigShow = () => {
    this.configShow = !this.configShow;
  };
}
