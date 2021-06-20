import Vue from 'vue'
import Vuex from 'vuex'
import { alert } from './alert.module';
import { authentication } from './authentication.module';
import { users } from './users.module';
import { guachinches } from './guachinches.module';
import { reservas } from './reservas.module';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        alert,
        authentication,
        users,
        guachinches,
        reservas
    }
});