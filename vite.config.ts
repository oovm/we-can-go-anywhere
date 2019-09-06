import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {viteImageToAVIFPlugin} from "vite-image-to-avif-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteImageToAVIFPlugin({
            sourcePaths: ["public"],
            quality: 75,
            outputDir: "dist",
            preserveStructure: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@import "./src/styles/variables.scss";`
            }
        }
    }
})