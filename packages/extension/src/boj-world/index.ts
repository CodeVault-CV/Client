import createAjaxInterceptor from "./ajaxInterceptor";

console.log("CodeVault running...");

function onIntercept(data: any) {
  console.log(data);
  postMessage("")
}

const ajaxInterceptor = createAjaxInterceptor();
ajaxInterceptor
  .subscribeResponse(onIntercept)
  .start();