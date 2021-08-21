import { defineClientAppEnhance } from '@vuepress/client'
import Experience from './components/Experience.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Experience', Experience)
})