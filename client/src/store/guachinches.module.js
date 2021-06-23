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
        _delete({dispatch, commit}, {id}){
            guachincheService._delete(id)
            .then(
                guachinche => {
                    commit('deleteSuccess', guachinche, id)
                    dispatch('alert/success', "Guachinche borrado con éxito", {root: true});
                },
                error => {
                    dispatch('alert/error', error, {root: true});
                }
            );
        },
        create({dispatch, commit}, {name, location, hour, phone, delivery, image, description}){
            commit('createRequest', {name});
            guachincheService.create(name, location, hour, phone, delivery, image, description)
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
            state.status = { loading: true };
        },
        getAllSuccess(state, guachinches) {
            state.all = { items: guachinches };
            state.status = { loading: false };
        },
        getAllFailure(state, error) {
            state.all = { error };
            state.status = { loading: false };
        },
        createRequest(state) {
            state.all = {loading: true}
        },
        createSuccess(state) {
            state.all = {}
        },
        createFailure(state,error) {
            state.all = { error }
        },
        deleteSuccess(state, id) {
            const itemIndex = state.all.items.findIndex((item) => item.id === id);
            state.all.items.splice(itemIndex, 1);
        }
    }
}