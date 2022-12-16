export type interceptListener = (data: string) => void;

export default interface iInterceptor {
  addListener: (listener: interceptListener) => void;
}
