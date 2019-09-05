import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteImagemin({
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4
            },
            webp: {
                quality: 80,
                lossless: false
            },
            // avif: {
            //     quality: 80,
            //     lossless: false
            // }
        })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@import "./src/styles/variables.scss";`
            }
        }
    }
})