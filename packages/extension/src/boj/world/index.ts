import createAjaxInterceptor from "./ajaxInterceptor";

console.log("CodeVault running...");

function onIntercept(data: any) {
  postMessage(data);
}

const ajaxInterceptor = createAjaxInterceptor();
ajaxInterceptor
  .onResponse(onIntercept)
  .onRequest(onIntercept)
  .start();