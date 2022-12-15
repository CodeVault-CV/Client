import pusherInterceptor from "./interceptor/pusherInterceptor";

console.log("CodeVault running...");

pusherInterceptor.addListener((data) => {
  console.log(JSON.parse(data));
});