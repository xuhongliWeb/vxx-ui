import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite';
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [,vueJsx({}),vue(), DefineOptions()]
})