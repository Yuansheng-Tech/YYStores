import { makeAutoObservable, observable, action } from 'mobx';

export class UIStore {
  language = 'zh_CN';

  /** 展示提示的堆栈 */
  noticeStack: any[] = [];

  pendingRequest = false;

  rootStore;
  constructor(rootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      noticeStack: observable,
      pendingRequest: observable,
      togglePendingRequest: action,
    });
    this.rootStore = rootStore;
  }

  togglePendingRequest() {
    this.pendingRequest = !this.pendingRequest;
  }

  setNoticeStack(data: any, type: 'insert' | 'remove' | 'all') {
    switch (type) {
      case 'insert':
        this.noticeStack.push(data);
      case 'remove':
        this.noticeStack.pop();
      case 'all':
        this.noticeStack = data;
    }
  }
}
