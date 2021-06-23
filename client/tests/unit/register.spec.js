import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import RegisterForm from '@/components/RegisterForm.vue';
import { authentication } from "@/store/authentication.module";

const localVue = createLocalVue();

Vue.use(Vuetify);
Vue.use(Vuex);

describe("RegisterForm component", () => {
  let username, name, email, password;
  let vuetify;
  let wrapper;

  const store = new Vuex.Store({
    modules: {
      authentication
    }
  });


  beforeEach( async () => {
    vuetify = new Vuetify(); 
    wrapper = shallowMount(RegisterForm, {
      localVue,
      store,
    });
  });

  it('Se espera el username correcto', () => {
   username = wrapper.find('[name = "username"]');
   username.vm.$emit("input", "Ozuna");
   expect(wrapper.vm.username).toBe("Ozuna");
  });

  it('Se espera el nombre correcto', () => {
    name = wrapper.find('[name = "name"]');
    name.vm.$emit("input", "Juan Carlos");
    expect(wrapper.vm.name).toBe("Juan Carlos");
   });

   it('Se espera un correo válido', () => {
    email = wrapper.find('[name = "email"]');
    email.vm.$emit("input", "prueba@gmail.com");
    expect(wrapper.vm.email).toBe("prueba@gmail.com");
   });

   it('Se espera una contraseña válida', () => {
    password = wrapper.find('#pass');
    password.vm.$emit("input", "prueba123");
    expect(wrapper.vm.password).toBe("prueba123");
   });

});
