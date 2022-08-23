import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './files/script'
import VueAnimateOnScroll from 'vue3-animate-onscroll'
import { createHead } from '@vueuse/head'
import vuex from '@/store/index'
import YmapPlugin from 'vue-yandex-maps'
import Maska from 'maska'
import '@/assets/scss/style.scss'
import axios from '@/axios/index'
import VueAxios from 'vue-axios'

const head = createHead()

createApp(App).use(router).use(Maska).use(head).use(vuex).use(VueAnimateOnScroll).use(YmapPlugin).use(VueAxios, axios).mount('#app')
