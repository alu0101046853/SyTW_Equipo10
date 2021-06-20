import { reservaService } from '../services';

export const reservas = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getbyid({ commit }, {id}) {
            commit('getAllRequest');
            reservaService.getAllbyID(id)
                .then(
                    reservas => commit('getAllSuccess', reservas),
                    error => commit('getAllFailure', error)
                );
        },
        _delete({dispatch, commit}, {id}){
            reservaService._delete(id)
            .then(
                reserva => {
                    commit('deleteSuccess', reserva, id)
                    dispatch('alert/success', "reserva borrado con éxito", {root: true});
                },
                error => {
                    dispatch('alert/error', error, {root: true});
                }
            );
        },
        create({dispatch, commit}, {time,date,comensales,name,id_usuario, id_guachinche}){
            reservaService.create(time,date,comensales,name,id_usuario, id_guachinche)
            .then(
                () => {
                    dispatch('alert/success', "Reserva creada con exito", {root: true});
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
        getAllSuccess(state, reservas) {
            state.all = { items: reservas };
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
        },
        deleteSuccess(state, id) {
            const itemIndex = state.all.items.findIndex((item) => item.id === id);
            state.all.items.splice(itemIndex, 1);
        }
    }
}