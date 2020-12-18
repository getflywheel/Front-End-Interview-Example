import { createApp } from 'vue';
import App from './components/app/app.vue';
import { createStore } from './store/index';

const app = createApp(App);
app.config.isCustomElement = tag => /^x-/.test(tag);
app.use(createStore());
app.mount('app-root');
