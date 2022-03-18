export default class Router {
    static instance;
    constructor(routes) {
        if(Router.instance) return Router.instance;

        this._routes = new Map(routes);

        window.addEventListener("popstate", () => {
            this.render(window.location.pathname);
        });

        this.render(window.location.pathname);
        Router.instance = this;
    }
    render(path) {
        if(this._routes.has(path)) this._routes.get(path)();
        else {
            history.pushState({}, "", "/");
            this._routes.get("/")();
        };
    }
}