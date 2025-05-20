import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@assets-icons': '/src/assets/icons',
            '@assets-images': '/src/assets/images',
            '@assets-textures': '/src/assets/textures',

            '@core-composes': '/src/core/composes',
            '@core-controllers': '/src/core/controllers',
            '@core-factories': '/src/core/factories',
            '@core-states': '/src/core/states',

            '@feat-game-mode': '/src/features/game-mode',
            '@feat-prefers-color-scheme': '/src/features/prefers-color-scheme',
            '@feat-puzzle-grid': '/src/features/puzzle-grid',
            '@feat-screen-navigator': '/src/features/screen-navigator',

            '@feat-setup-screen-ui-features': '/src/features/setup-screen-ui-features',

            '@feat-atomic-design-start-screen': '/src/features/atomic-design-features/start-screen',
            '@feat-atomic-design-practice-screen': '/src/features/atomic-design-features/practice-screen',
            '@feat-atomic-design-play-screen': '/src/features/atomic-design-features/play-screen',

            '@shared-components': '/src/shared/components',
            '@shared-constants': '/src/shared/constants',
            '@shared-utils': '/src/shared/utils',
            '@shared-dom-elements': '/src/shared/dom-elements',
            '@shared-accessors-dom-elements': '/src/shared/accessors/dom-elements',
        }
    }
});
