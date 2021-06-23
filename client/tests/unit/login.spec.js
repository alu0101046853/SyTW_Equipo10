import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';
import { authentication } from "@/store/authentication.module";

const localVue = createLocalVue();

Vue.use(Vuetify);
Vue.use(Vuex);

describe("LoginForm component", () => {
  let username, password;
  let vuetify;
  let wrapper;

  const store = new Vuex.Store({
    modules: {
      authentication
    }
  });

  beforeEach( async () => {
    vuetify = new Vuetify(); 
    wrapper = shallowMount(LoginForm, {
      localVue,
      store,
    });
  });

  it('Se espera el username correcto', () => {
    username = wrapper.find('[name = "username"]');
    username.vm.$emit("input", "Ozuna");
    expect(wrapper.vm.username).toBe("Ozuna");
   });
 
   it('Se espera la contraseña correcta', () => {
     password = wrapper.find('[name = "password"]');
     password.vm.$emit("input", "prueba123");
     expect(wrapper.vm.password).toBe("prueba123");
    });
});