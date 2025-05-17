import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";


export default defineConfig({
  build: {
    plugins: [cssInjectedByJsPlugin()],
    lib: {
      entry: 'src/index.js', // основной вход
      name: 'InteractiveGuide',
      fileName: (format) => `interactive-guide.${format}.js`,
      formats: ['iife'], // чтобы можно было вставить через <script>
    },
    json: {
      stringify: true // преобразует JSON в string и инлайтит в код
    }
  }
})
