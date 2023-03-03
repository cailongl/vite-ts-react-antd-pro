import type { MenuDataItem } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import React, { Suspense, useMemo } from 'react';
import { Link, Redirect, Route, useLocation, Switch } from 'react-router-dom';

import routesConfig, { ROUTE_MAP } from './routes';

function resolcePath(path: string) {
  const url = path
    .split('/')
    .filter((p) => !!p)
    .join('/');
  return '/' + url;
}

/**
 * 处理路由数据 => Routes，将数据处理成对应的`Route`，Route 跟随数据一直，嵌套的
 * @param routeData {MenuDataItem} 路由数据
 * @param cacheRoutes {any} Route数组
 * @returns
 */
function generateRoute(routeData: MenuDataItem[]) {
  const loop = (route: MenuDataItem[], parentPath: string) => {
    return route.map((rt) => {
      const { component: renderComponent, redirect = '', routes, path = '' } = rt;
      const currentPath = path.startsWith('/') ? path : resolcePath(`${parentPath}/${path}`);
      if (redirect) {
        const redirectUrl = redirect.startsWith('/')
          ? redirect
          : resolcePath(`${parentPath}/${redirect}`);
        return (
          <Redirect
            exact
            strict
            key={`redirect-${redirectUrl}`}
            from={currentPath}
            to={redirectUrl}
          />
        );
      }
      const child = (
        <Switch>{Array.isArray(routes) && !!routes.length && loop(routes, currentPath)}</Switch>
      );
      if (renderComponent) {
        const RouteComponent = React.lazy(() => renderComponent());
        return (
          <Route strict key={`route-${currentPath}`} path={currentPath}>
            <RouteComponent>{child}</RouteComponent>
          </Route>
        );
      }
      return (
        <Route strict key={`route-${currentPath}`} path={currentPath}>
          {child}
        </Route>
      );
    });
  };
  return loop(routeData, '/');
}

const App = function App() {
  const location = useLocation();
  const nestedRoutes = useMemo(() => generateRoute(routesConfig), []);
  console.log('nestedRoutes...', nestedRoutes, routesConfig);
  return (
    <ProLayout
      route={{ routes: routesConfig }}
      location={location}
      headerHeight={56}
      navTheme="light"
      contentWidth="Fluid"
      title="GAIA"
      colorWeak={false}
      fixedHeader={false}
      fixSiderbar
      splitMenus
      layout="mix"
      siderWidth={208}
      breadcrumbProps={{
        itemRender: (route) => <Link to={route.path}>{route.breadcrumbName}</Link>,
      }}
      breadcrumbRender={() => {
        const currentRouteData = ROUTE_MAP[location.pathname];
        return currentRouteData?.position || [];
      }}
      menuItemRender={(item: any, dom: any) => <Link to={item.path}>{dom}</Link>}
    >
      <Suspense fallback={<div>loading...</div>}>
        <Switch>{nestedRoutes}</Switch>
      </Suspense>
    </ProLayout>
  );
};

export default App;
