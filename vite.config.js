import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@assets-icons': '/src/assets/icons',
            '@assets-images': '/src/assets/images',
            '@assets-textures': '/src/assets/textures',

            '@core-controllers': '/src/core/controllers',
            '@core-factories': '/src/core/factories',
            '@core-states': '/src/core/states',

            '@feat-game-mode': '/src/features/game-mode',
            '@feat-prefers-color-scheme': '/src/features/prefers-color-scheme',
            '@feat-puzzle-grid': '/src/features/puzzle-grid',
            '@feat-screen': '/src/features/screen',

            '@feat-screen-ui-play': '/src/features/screen-ui-play',
            '@feat-screen-ui-practice': '/src/features/screen-ui-practice',
            '@feat-screen-ui-start': '/src/features/screen-ui-start',

            '@shared-components': '/src/shared/components',
            '@shared-constants': '/src/shared/constants',
            '@shared-utils': '/src/shared/utils',
            '@shared-dom-elements': '/src/shared/dom-elements',
        }
    }
});
