import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import GuachincheCard from '@/components/GuachincheCard.vue';
import { authentication } from "@/store/authentication.module";
import { guachinches } from "@/store/guachinches.module";

const localVue = createLocalVue();

Vue.use(Vuetify);
Vue.use(Vuex);

describe("Guachinche Card component", () => {
  let vuetify;
  let wrapper;

  const store = new Vuex.Store({
    modules: {
      authentication,
      guachinches
    }
  });

  beforeEach( async () => {
    vuetify = new Vuetify(); 
    wrapper = shallowMount(GuachincheCard, {
      localVue,
      store,
      propsData: {
        data: {
        name: "Guachinche El Primero",
        location: "Guachinche El Primero Calle Malpais 10, 38390 Santa Úrsula, Santa Cruz de Tenerife",
        description: "Se come bien",
        hour: "L y D de 13:00-17:00 M a S de 13:00-17:00 y 19:00-23:00",
        phone: "650 61 02 85",
        delivery: true,
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/0e/05/4e/el-primero.jpg",
        id: "1",
        }
      }
    });
  });

  it('Se espera que se reciba la prop de nombre bien', () => {
    expect(wrapper.vm.props().data.name).toBe("Guachinche El Primero");
  });
});