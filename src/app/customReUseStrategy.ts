import { RouteReuseStrategy,  DetachedRouteHandle, ActivatedRouteSnapshot } from "@angular/router";
// https://www.angulararchitects.io/aktuelles/sticky-routes-in-angular-2-3/
// This impl. bases upon one that can be found in the router's test cases.

// better: https://medium.com/swlh/how-to-toggle-caching-for-routing-components-in-angular-5a327ea87310
export class CustomReuseStrategy implements RouteReuseStrategy {
    private cache: { [key: string]: DetachedRouteHandle } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
      return route.routeConfig.data && route.routeConfig.data.reuse;
    }
    store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle): void {
      if (handler) {
        this.cache[this.getUrl(route)] = handler;
      }
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
      return !!this.cache[this.getUrl(route)];
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
      if (!route.routeConfig || route.routeConfig.loadChildren) {
        return null;
      }
      return this.cache[this.getUrl(route)];
    }
    shouldReuseRoute(
      future: ActivatedRouteSnapshot,
      current: ActivatedRouteSnapshot
    ): boolean {
      if (
        future.routeConfig &&
        future.routeConfig.data &&
        future.routeConfig.data.reuse !== undefined
      ) {
        return future.routeConfig.data.reuse;
      }
      return future.routeConfig === current.routeConfig;
    }
    getUrl(route: ActivatedRouteSnapshot): string {
      if (route.routeConfig) {
        return route.routeConfig.path;
      }
    }
}