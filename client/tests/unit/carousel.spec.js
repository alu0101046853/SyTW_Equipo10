import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import Carousel from '@/components/Carousel.vue';

const localVue = createLocalVue();

Vue.use(Vuetify);


describe("Header component", () => {
  let vuetify;
  let wrapper;
  const photos =  [ {src: ""},{ src: ""},{ src: "" }, { src: ""}];
 
  beforeEach( async () => {
    vuetify = new Vuetify(); 
    wrapper = shallowMount(Carousel, {
      localVue,
      data() {
        return {
          items: photos
        }
      },
    });
  });

  it('El componente tiene como data un array con las url de las fotos', () => {
    expect(wrapper.vm.$data.items).toStrictEqual(photos);
  });
});