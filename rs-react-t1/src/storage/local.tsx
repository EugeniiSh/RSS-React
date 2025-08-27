import type { IDetailedInfo } from './external';

interface IStorageObject {
  last: string;
  other: {
    [key: string]: IDetailedInfo[] | null;
  };
}

class UserStorage {
  private lsKey: string;

  protected startValue: IStorageObject;

  constructor() {
    this.lsKey = 'RssRcEvSh';
    this.startValue = { last: '', other: {} };
  }

  public getStorage(): IStorageObject {
    const storage = localStorage.getItem(this.lsKey);
    if (storage) {
      return JSON.parse(storage) as IStorageObject;
    }

    return { ...this.startValue };
  }

  public setStorage(value: IStorageObject): void {
    const storage = JSON.stringify(value);
    localStorage.setItem(this.lsKey, storage);
  }
}

const userStorage = new UserStorage();
export { userStorage };
