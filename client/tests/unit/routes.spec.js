import Router from "vue-router";
import { shallowMount, createLocalVue, } from '@vue/test-utils';

const localVue = createLocalVue();

localVue.use(Router);

describe("Vue router", () => {
  const router = new Router({
    routes: [
      { path: '/', component: () => import("../../src/views/Home.vue")},
      { path: '/login', component: () => import("../../src/views/Login.vue") },
      { path: '/signup', component: () => import("../../src/views/Signup.vue")},
      { path: '/guachincheregister', component: () => import("../../src/views/GuachincheRegister.vue")},
      { path: '/myreservas', component: () => import("../../src/views/MyReservas.vue")},
      { path: '/user/:id',component: () => import("../../src/views/User.vue") },
  
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
  });

  it("Se espera que exista una ruta a home", async () => {
    expect(router.options.routes[0].path).toBe('/');
  });

  it("Se espera que exista una ruta a login", async () => {
    expect(router.options.routes[1].path).toBe('/login');
  });

  it("Se espera que exista una ruta a signup", async () => {
    expect(router.options.routes[2].path).toBe('/signup');
  });

  it("Se espera que exista una ruta a registrar guachinches", async () => {
    expect(router.options.routes[3].path).toBe('/guachincheregister');
  });

  it("Se espera que exista una ruta a mis reservas", async () => {
    expect(router.options.routes[4].path).toBe('/myreservas');
  });

  it("Se espera que exista una ruta hacia el perfil del usuario", async () => {
    expect(router.options.routes[5].path).toBe('/user/:id');
  });

  it("Se espera que se redirija a home si una ruta no existe", async () => {
    expect(router.options.routes[6].path).toBe('*');
  });
});