import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';
// import { patchCssModules } from 'vite-css-modules';

const config: UserConfig = {
    plugins: [
        {
            name: 'hack-css-module-hmr',
            handleHotUpdate(ctx) {
                // prevent full reload due to non self-accepting css module.
                // here only "?direct" module should be filtered out as it doesn't have a parent module.
                if (ctx.file.includes('module.css')) {
                    return ctx.modules.filter((m) => !m.id?.includes('?direct'));
                }
            },
        },
        react(),
        vike(),
    ],
};

export default config;
