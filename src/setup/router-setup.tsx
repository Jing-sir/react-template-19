import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import routes from '../routes';  // 假设你的 routes 配置是一个数组

export const router = createBrowserRouter(routes);

router.subscribe((state) => { // 滚动到顶部
    window.scrollTo(0, 0);
});

export default () => (
    <RouterProvider router={router}>
        <ScrollRestoration />
    </RouterProvider>
);
