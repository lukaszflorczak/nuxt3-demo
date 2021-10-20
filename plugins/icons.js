import { defineNuxtPlugin } from '#app'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

export default defineNuxtPlugin(ctx => {
  ctx.vueApp.component('fa-icon', FontAwesomeIcon)
  ctx.vueApp.component('fa-layers', FontAwesomeLayers)
})
