import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@assets-icons': '/src/assets/icons',
            '@assets-images': '/src/assets/images',
            '@assets-textures': '/src/assets/textures',

            '@core-game': '/src/core/game',

            '@shared-components': '/src/shared/components/',
            '@shared-logic': '/src/shared/logic/',

            '@feature-practice-screen': '/src/feature-practice-screen',

            '@feature-start-screen-main': '/src/feature-start-screen/main',
            '@feature-start-screen-components': '/src/feature-start-screen/components'
        }
    }
});
