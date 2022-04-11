import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// TODO: temporal fix for injected refs
// remove in next vue version!
app.config.unwrapInjectedRef = true

app.mount('#app')
