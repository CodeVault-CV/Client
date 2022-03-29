
export default class Router {
    static #instance;
    constructor(routes) {
        if(Router.#instance) return Router.#instance;

        this.routes = new Map(routes);

        window.addEventListener("popstate", () => {
            this.render(location.pathname);
        });

        this.render(location.pathname);
        Router.#instance = this;
    }
    render(path) {
        if(this.routes.has(path)) this.routes.get(path)();
        else {
            history.pushState({}, "", "/");
            this.routes.get("/")();
        };
    }
}