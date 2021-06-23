import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import { authentication } from "@/store/authentication.module";
import { alert } from "@/store/alert.module";


const localVue = createLocalVue();

Vue.use(Vuetify);
Vue.use(Vuex);

describe("Header component", () => {
  let vuetify;
  let wrapper;

  const store = new Vuex.Store({
    modules: {
      authentication,
      alert
    }
  });

  beforeEach( async () => {
    vuetify = new Vuetify(); 
    wrapper = shallowMount(Header, {
      localVue,
      store,
    });
  });

  it('Se monta el header en el wrapper', () => {
    expect(wrapper.vm.$options.name).toBe("Header");
   }); 

});