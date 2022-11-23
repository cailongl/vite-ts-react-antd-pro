import type { MenuDataItem } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import { Suspense, useMemo } from 'react';
import { Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

import routesConfig, { ROUTE_MAP } from './routes';

/**
 * 处理路由数据 => Routes，将数据处理成对应的`Route`，但不是跟数据一样嵌套的，这边节点是打平的，为了更方便变更菜单，不然会有前缀path必须一致的问题
 * @param routeData {MenuDataItem} 路由数据
 * @param cacheRoutes {any} Route数组
 * @returns
 */
function generateRoute(routeData: MenuDataItem[], cacheRoutes: any[] = []) {
  const loop = (route: MenuDataItem, parentRoute?: MenuDataItem) => {
    const { component: RenderComponent, redirect, routes } = route;
    if (Array.isArray(routes) && routes.length > 0) {
      // 有子集渲染子集Route，自己不渲染Route
      routes.forEach((rs: MenuDataItem) => loop(rs, route));
    } else if (redirect) {
      // 渲染redirect Route
      cacheRoutes.push(
        <Route
          key={`redirect-${redirect}`}
          path={parentRoute?.path || '/'}
          element={<Navigate replace to={redirect} />}
        />,
      );
    } else {
      // 渲染正常的Route
      cacheRoutes.push(
        <Route
          key={`route-${route.path}`}
          path={route.path}
          element={RenderComponent ? <RenderComponent /> : <Outlet />}
        />,
      );
    }
  };
  routeData.map((rt) => loop(rt));
  return cacheRoutes;
}

const App = function App() {
  const location = useLocation();
  const nestedRoutes = useMemo(() => generateRoute(routesConfig), []);
  return (
    <ProLayout
      route={{ routes: routesConfig }}
      location={location}
      headerHeight={56}
      navTheme="light"
      contentWidth="Fluid"
      title="Glite"
      colorWeak={false}
      fixedHeader={false}
      fixSiderbar
      splitMenus
      layout="mix"
      siderWidth={208}
      breadcrumbRender={() => {
        const currentRouteData = ROUTE_MAP[location.pathname];
        return currentRouteData?.position || [];
      }}
      menuItemRender={(item: any, dom: any) => <Link to={item.path}>{dom}</Link>}
    >
      <Suspense fallback={<div>loading...</div>}>
        <Routes>{nestedRoutes}</Routes>
      </Suspense>
    </ProLayout>
  );
};

export default App;
