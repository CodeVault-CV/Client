export default interface iStorage {
  get(): any;
  set(data: any): void;
  remove(): void;
}