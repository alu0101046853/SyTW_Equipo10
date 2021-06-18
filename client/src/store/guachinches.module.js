import { guachincheService } from '../services';
import { router } from '../helpers';

export const guachinches = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            guachincheService.getAll()
                .then(
                    guachinches => commit('getAllSuccess', guachinches),
                    error => commit('getAllFailure', error)
                );
        },
        create({dispatch, commit}, {name, location}){
            commit('createRequest', {name});
            guachincheService.create(name, location)
            .then(
                () => {
                    dispatch('alert/success', "Guachinche creado con exito", {root: true});
                    setTimeout(()=>{router.push('/')}, 1250);
                },
                error => {
                    commit('createFailure', error);
                    dispatch('alert/error', error, {root: true});
                }
            );
        },
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, guachinches) {
            state.all = { items: guachinches };
        },
        getAllFailure(state, error) {
            state.all = { error };
        },
        createRequest(state) {
            state.all = {loading: true}
        },
        createSuccess(state) {
            state.all = {}
        },
        createFailure(state) {
            state.status = {}
        }
    }
}