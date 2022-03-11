export default class Router {
    constructor(routes) {
        this._routes = new Map(routes);

        window.addEventListener("popstate", () => {
            this.render(window.location.pathname);
        });

        this.render(window.location.pathname);
    }
    render(path) {
        if(this._routes.has(path)) this._routes.get(path)();
    }
}