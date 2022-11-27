import AjaxInterceptor from "./AjaxInterceptor";

function onIntercept(data: any) {
  console.log(data);
}

new AjaxInterceptor()
  .subscribeRequest(onIntercept);