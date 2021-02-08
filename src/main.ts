import { createApp } from 'vue';
import EditButton from '@/components/EditButton.vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/theme.scss';

const app = createApp(App);
app.use(store).use(router).mount('#app');

// Components
app.component('edit-button', EditButton);
