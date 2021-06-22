import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import RegisterForm from '@/components/RegisterForm.vue';
import { authentication } from "@/store/authentication.module";

const localVue = createLocalVue();

Vue.use(Vuetify);
//localVue.use(Vuetify);
//localVue.use(Vuex);
Vue.use(Vuex);

describe("Register", () => {
  let username, name, email, pass;
  let vuetify;

  const store = new Vuex.Store({
    modules: {
      authentication
    }
  });


  beforeEach( async () => {
    vuetify = new Vuetify(); 
  });



  it('Username montado en wrapper', async () => {
    const wrapper = shallowMount(RegisterForm, {
      localVue,
      store,
    });

  username = wrapper.find("#pepe-grillo > input").setValue("tester");

  console.log(username);
  name = wrapper.find('[name = "name"]');
  email = wrapper.find('[name = "email"]');
  pass = wrapper.find('[name = "password"]');



  //await username.setValue("tester"); 
  /*await name.setValue("Ejemplo");
  await email.setValue("ejemplo@gmail.com");
  await pass.setValue("tester123");
  */

    expect(wrapper.vm.username).not.toBe(undefined);
  });

});
