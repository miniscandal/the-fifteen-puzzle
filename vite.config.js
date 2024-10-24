import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@assets-icons': '/src/assets/icons',
            '@assets-images': '/src/assets/images',
            '@assets-textures': '/src/assets/textures',

            '@core-controllers': '/src/core/controllers',

            '@feat-game-mode': '/src/features/game-mode',
            '@feat-prefers-color-scheme': '/src/features/prefers-color-scheme',
            '@feat-puzzle-grid': '/src/features/puzzle-grid',
            '@feat-puzzle-scene': '/src/features/puzzle-scene',
            '@feat-screen-mode': '/src/features/screen-mode',

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
