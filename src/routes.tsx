import { Suspense, lazy, type ReactNode } from "react";
import { useUnit } from 'effector-react';

import App from './views/App';
import { $userInfo } from './store/global';

const NotFound = lazy(() => import('./views/NotFound'));
const NotPermission = lazy(() => import('./views/NotPermission'));
const Home = lazy(() => import('./views/Home'));

interface WrapAuthComponentProp {
  children: ReactNode,
  // eslint-disable-next-line react/require-default-props
  roles?: string | string[],
  // eslint-disable-next-line react/require-default-props
  fallback?: ReactNode,
}
const WrapAuthComponent = ({ // 路由鉴权
    children,
    roles = '*',
    fallback = (<>...</>)
}: WrapAuthComponentProp) => {
    const userInfo = useUnit($userInfo);
    const authComponent = (<Suspense fallback={fallback}>{children}</Suspense>);

    if (roles === '*') return authComponent; // 通配
    if (roles.includes(userInfo.role)) return authComponent; // 特定权限
    return (<Suspense fallback={fallback}><NotPermission /></Suspense>);
}

export default [
    // These are the same as the props you provide to <Route>
    {
        path: "/",
        element: <App />,
        children: [{ path: '', element: <WrapAuthComponent><Home /></WrapAuthComponent> }]
    },
    { path: "/test", element: <>Hello React.Router.Test!</> },
    // Not found routes work as you'd expect
    { path: "*", element: <WrapAuthComponent roles="*"><NotFound /></WrapAuthComponent>}
]
