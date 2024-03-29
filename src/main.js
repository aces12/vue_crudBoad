// import Vue from "vue";
import { createApp } from "vue";
import App from "./App";
import router from './routes/index'

// Element UI 세팅
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// if you're using CDN, please remove this line.
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const App = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    App.component(key, component)
}

createApp(App).use(router).use(ElementPlus).mount("#app");
