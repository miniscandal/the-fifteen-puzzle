import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@assets-icons': '/src/assets/icons',
            '@assets-images': '/src/assets/images',
            '@assets-textures': '/src/assets/textures',

            '@core-game-management': '/src/core/game-management',
            '@core-screen-management': '/src/core/screen-management',

            '@shared-components': '/src/shared/components',

            '@feature-practice-screen-main': '/src/features/practice-screen/main',

            '@feature-start-screen': '/src/features/start-screen',
        }
    }
});
