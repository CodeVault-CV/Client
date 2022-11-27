// jQuery AJAX response interceptor
if ($) {
  $.ajaxSetup({
    dataFilter: function (data, type) {
      console.log(data);
      return data;
    }
  });
}

// XMLHTTPRequest response interceptor
(function (open) {
  console.log("injecting to XMLHTTPRequest");
  XMLHttpRequest.prototype.open = function (method: string, url: any, async?: any, username?: string, password?: string) {
    console.log("XMLHTTPRequest called");
    this.addEventListener("load", () => {
      console.log(this.responseText);
    });
    return open.apply(this, [method, url, async, username, password]);
  };
})(XMLHttpRequest.prototype.open);

// Fetch response interceptor
((fetch) => {
  window.fetch = async (...args) => {
    const res = await fetch(...args);

    res
      .clone()
      .json()
      .then(data => console.log(data));

    return res;
  }
})(window.fetch);