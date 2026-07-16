import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import Layout from './Layout.vue'
import './style.css'
import './print.css'

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
