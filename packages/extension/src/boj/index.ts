import createAjaxInterceptor from "./ajaxInterceptor";

function onIntercept(data: any) {
  console.log(data);
}

const ajaxInterceptor = createAjaxInterceptor();
ajaxInterceptor
  .subscribeResponse(onIntercept)
  .start(); 