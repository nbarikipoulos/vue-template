// Composables
import { createApp } from 'vue'
// Components
import App from '@/App.vue'
import { MyItem } from '@/components'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app
  .component('MyItem', MyItem)
  .mount('#app')
