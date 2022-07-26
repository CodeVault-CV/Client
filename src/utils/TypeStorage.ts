const key_prefix = "ALGONG_";

export default class TypeStorage<T> {
  constructor(private key: string, private storage: Storage) {
    this.key = key_prefix + key;
  }

  get(): T | null {
    const json = this.storage.getItem(this.key);
    if(!json) return null;
    return JSON.parse(json);
  }

  set(data: T) {
    this.storage.setItem(this.key, JSON.stringify(data));
  }

  remove() {
    this.storage.removeItem(this.key);
  }
}
