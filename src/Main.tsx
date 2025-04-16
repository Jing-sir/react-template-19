import { unstableSetRender, ConfigProvider, theme } from 'antd';
import { I18nextProvider } from 'react-i18next';
import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';
import Routes from './setup/router-setup';
import './assets/stylesheet/main.css';
import './setup/i18n-setup';
import i18n from 'i18next';

const App = () => {

    unstableSetRender((node, container) => {
        // @ts-ignore
        container._reactRoot ||= createRoot(container);
        // @ts-ignore
        const root = container._reactRoot;
        root.render(node);
        return async () => {
            // @ts-ignore
            await new Promise((resolve) => setTimeout(resolve, 0));
            root.unmount();
        };
    });

    return (
        <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
            <I18nextProvider i18n={i18n}>
                <Routes />
            </I18nextProvider>
        </ConfigProvider>
    );
};

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
