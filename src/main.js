import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Chart from 'primevue/chart';
import router from './router'


// axios
import axios from 'axios';

/** primevue */
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers["Content-Type"] = "application/json"
axios.mode = "no-cors"

const app = createApp(App)
.use(router)
.use(PrimeVue);

app.component('Chart', Chart);

// variables globales
self.$http = axios

createApp(App).use(router).mount('#app')
