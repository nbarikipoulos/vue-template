/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import { createHead } from '@unhead/vue'

const head = createHead()

export function registerPlugins (app) {
  loadFonts()
  app.use(vuetify)
  app.use(head)
}
