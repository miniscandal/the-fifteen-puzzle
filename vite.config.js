import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@assets-icons': '/src/assets/icons',
            '@assets-images': '/src/assets/images',
            '@assets-textures': '/src/assets/textures',

            '@core-game': '/src/core/game',

            '@shared-components': '/src/shared/components/',
            '@shared-logic': '/src/shared/logic/screens'
        }
    }
});
