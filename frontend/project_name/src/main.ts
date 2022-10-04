import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import authConfig from './auth_config.json'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App)

app.use(router)

app.use(
    createAuth0({
      domain: authConfig.domain,
      client_id: authConfig.clientId,
      redirect_uri: window.location.origin,
      audience: authConfig.audience
    })
  );

app.mount('#app')
