import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app'
Vue.use(Vuex)

//生成store实例
export default new Vuex.Store({
    modules:{
        app
    }
})