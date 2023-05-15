import { createApp } from 'vue'
import App from './app.vue'
const app = createApp(App)
import vxxui from "vxx-ui"
import { Button } from 'vxx-ui'
app.use(vxxui)
app.use(Button)
console.log(vxxui);

app.mount('#app') 