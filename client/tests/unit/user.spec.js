import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from '@vue/test-utils';
import UserForm from "../../src/components/UserForm.vue";
import { authentication } from "@/store/authentication.module";

const localVue = createLocalVue();

Vue.use(Vuetify);
Vue.use(Vuex);

describe("LoginForm component", () => {
  let username, email;
  let wrapper;
  let vuetify;

  const store = new Vuex.Store({
    modules: {
      authentication
    }
  });

  beforeEach( async () => {
   vuetify = new Vuetify(); 
    wrapper = shallowMount(UserForm, {
      localVue,
      store,
    });
  });

  it('Se espera un nuevo username', () => {
    console.log(wrapper);
    /*
    username = wrapper.find('[name = "user.username"]');
    username.vm.$emit("input", "New username");
    expect(wrapper.vm.username).toBe("New username"); */
   });
 
   /*it('Se espera un nuevo email', () => {
     /*
     email = wrapper.find('[name = "user.email"]');
     email.vm.$emit("input", "prueba2@gmail.com");
     expect(wrapper.vm.email).toBe("prueba2@gmail.com");
    }); */
});