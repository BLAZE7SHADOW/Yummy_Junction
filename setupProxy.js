import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
    app.use(
        '/dapi',
        createProxyMiddleware({
            target: 'https://www.swiggy.com',
            changeOrigin: true,
        })
    );
}
