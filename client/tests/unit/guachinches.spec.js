import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import Guachinches from '@/components/Guachinches.vue';
import { guachinches } from "@/store/guachinches.module";

const localVue = createLocalVue();

Vue.use(Vuetify);
Vue.use(Vuex);

describe("Guachinche component", () => {
  let vuetify;
  let wrapper;

  const store = new Vuex.Store({
    modules: {
      guachinches
    }
  });

  beforeEach( async () => {
    vuetify = new Vuetify(); 
    wrapper = shallowMount(Guachinches, {
      localVue,
      store,
    });
  });

  it('Se monta guachinches en el wrapper', () => {
    expect(wrapper.vm.$options.name).toBe("Guachinches");
   }); 
});
