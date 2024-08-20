import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';
// import { patchCssModules } from 'vite-css-modules';
const fileEndings = ['css'];
// const fileEndings = ['css', 'scss', 'sass'];

console.log(
    process.env.IS_STORYBOOK ? 'Vite uses plugin set for storybook' : 'Vite uses plugin set for app'
);
const HackCSSModule = () => ({
    name: 'hack-css-module-hmr',
    // @ts-ignore
    handleHotUpdate(ctx) {
        // prevent full reload due to non self-accepting css module.
        // here only "?direct" module should be filtered out as it doesn't have a parent module.
        if (
            ctx.file.includes('module') &&
            fileEndings.some((ending) => ctx.file.endsWith(ending))
        ) {
            // @ts-ignore
            return ctx.modules.filter((m) => !m.id?.includes('?direct'));
        }
    },
});
const config: UserConfig = {
    plugins: [react(), vike()],
};

export default config;
