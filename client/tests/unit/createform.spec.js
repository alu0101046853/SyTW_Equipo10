import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue, } from '@vue/test-utils';
import CreateForm from '@/components/CreateForm.vue';
import { guachinches } from "@/store/guachinches.module";

const localVue = createLocalVue();

Vue.use(Vuetify);
Vue.use(Vuex);

describe("CreateForm component", () => {
  let name, location, description, hour, phone, delivery, image;
  let vuetify;
  let wrapper;

  const store = new Vuex.Store({
    modules: {
      guachinches
    }
  });

  beforeEach( async () => {
    vuetify = new Vuetify(); 
    wrapper = shallowMount(CreateForm, {
      localVue,
      store,
      });
    });

    it('Se espera el nombre del guachinches', () => {
      name = wrapper.find('[name = "name"]');
      name.vm.$emit("input", "Guachinche El Primero");
      expect(wrapper.vm.name).toBe("Guachinche El Primero");
     });

     it('Se espera la ubicación del guachinche', () => {
      location = wrapper.find('[name = "location"]');
      location.vm.$emit("input", "Calle Malpais 10, 38390 Santa Úrsula, Santa Cruz de Tenerife");
      expect(wrapper.vm.location).toBe("Calle Malpais 10, 38390 Santa Úrsula, Santa Cruz de Tenerife");
     });

     it('Se espera la descripción del guachinche', () => {
      description = wrapper.find('[name = "description"]');
      description.vm.$emit("input", "En nuestro bodegón guachinche ‘El Primero’ Santa Úrsula, te sentirás como en casa. Disfruta de comida casera y de calidad a buen precio en el Norte de Tenerife");
      expect(wrapper.vm.description).toBe("En nuestro bodegón guachinche ‘El Primero’ Santa Úrsula, te sentirás como en casa. Disfruta de comida casera y de calidad a buen precio en el Norte de Tenerife");
     });

     it('Se espera la hora del guachinche', () => {
      hour = wrapper.find('[name = "hour"]');
      hour.vm.$emit("input", "L y D de 13:00-17:00 M a S de 13:00-17:00 y 19:00-23:00");
      expect(wrapper.vm.hour).toBe("L y D de 13:00-17:00 M a S de 13:00-17:00 y 19:00-23:00");
     });

     it('Se espera el teléfono del guachinche', () => {
      phone = wrapper.find('[name = "phone"]');
      phone.vm.$emit("input", "650 61 02 85");
      expect(wrapper.vm.phone).toBe("650 61 02 85");
     });

     it('Se espera si el guachinche tiene reparto a domicilio', () => {
      delivery = wrapper.find('[name = "delivery"]');
      delivery.vm.$emit("change", true);
      expect(wrapper.vm.delivery).toBe(true);
     });

     it('Se espera una url que sea la imagen del guachinche', () => {
      image = wrapper.find('[name = "image"]');
      image.vm.$emit("input", "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/0e/05/4e/el-primero.jpg");
      expect(wrapper.vm.image).toBe("https://media-cdn.tripadvisor.com/media/photo-m/1280/16/0e/05/4e/el-primero.jpg");
     });
  });