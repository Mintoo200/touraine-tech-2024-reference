import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.provide('queryParams', new URLSearchParams(window.location.search))

app.mount('body')
