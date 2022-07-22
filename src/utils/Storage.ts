const storage = localStorage;

const StorageHelper = {
  get(key: string) {
    let storedItem = storage.getItem(key);
    if (storedItem === null) return;
    return JSON.parse(storedItem);
  },
  set(key: string, value: any) {
    storage.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    storage.removeItem(key);
  },
};

export interface StorageMapper<T> {
  toJson(target: T): any;
  fromJson(json: any): T;
}

export default class Storage<T> {
  constructor(private key: string, private mapper: StorageMapper<T>) {}

  get(): T {
    return this.mapper.fromJson(StorageHelper.get(this.key));
  }

  set(target: T) {
    StorageHelper.set(this.key, this.mapper.toJson(target));
  }

  remove() {
    StorageHelper.remove(this.key);
  }
}
