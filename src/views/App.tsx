import Header from '@/components/Header/Index';
import { Outlet } from 'react-router-dom';
import { Button } from 'antd';

export default () => (
    <div>
        <Header />
        <Button type="primary">
            按钮
        </Button>
        Hello React.App!<br />
        <Outlet />
    </div>
);
