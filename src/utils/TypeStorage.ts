export class WebStorage {
  constructor(
    private storage: any
  ) {}
  get(key: string) {
    return this.storage.getItem(key);
  }
  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }
  remove(key: string) {
    this.storage.removeItem(key);
  }
}

export interface IStorageMapper<T> {
  toJson(target: T): any;
  fromJson(json: any): T;
}

export default class TypeStorage<T> {
  constructor(
    private key: string,
    private mapper: IStorageMapper<T>,
    private storage: WebStorage
  ) {}

  get(): T {
    return this.mapper.fromJson(this.storage.get(this.key));
  }

  set(target: T) {
    this.storage.set(this.key, this.mapper.toJson(target));
  }

  remove() {
    this.storage.remove(this.key);
  }
}