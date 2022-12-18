export type InterceptListener = (data: string) => void;

export default interface iInterceptor {
  addListener: (listener: InterceptListener) => void;
}
