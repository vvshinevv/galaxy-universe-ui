import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/router';
// import store from 'stores/store';
import './assets/style/main.scss'; //공통적으로 사용되는 UI들만 main.scss에 @import합니다.
import 'wowjs/css/libs/animate.css'

const app = createApp(App);
app.use(router);
// app.use(store);
app.mount('#app');
