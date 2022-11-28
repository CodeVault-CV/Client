export type interceptListener = (data: any) => void;
export default interface iInterceptor {
  addListener: (data: any) => void;
}