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
            '@shared-utils': '/src/shared/utils',
            '@shared-helpers': '/src/shared/helpers',

            '@feature-practice-screen': '/src/features/practice-screen',

            '@feature-start-screen': '/src/features/start-screen',

            '@feature-play-screen': '/src/features/play-screen'
        }
    }
});
