import { userService } from '../services';
import {router} from '../helpers';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ dispatch, commit }, { username, password }) {
            commit('loginRequest', { username });

            userService.login(username, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/');
                    },
                    error => {
                        commit('loginFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
        signup({dispatch, commit}, {username, password, name, email}){
            userService.signup(username, password, name, email)
            .then(
                () => {
                    dispatch('alert/success', "Usuario creado con éxito", {root: true});
                    setTimeout(()=>{router.push('/login')}, 1250);
                },
                error => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, {root: true});
                }
            );
        },
        update({dispatch}, {username, name, email, id}){
            userService.update(username, name, email, id)
            .then(
                () => {
                    dispatch('alert/success', "Usuario actualizado con éxito", {root: true});
                    setTimeout(()=>{router.push('/login')}, 1250);
                },
                error => {
                    dispatch('alert/error', error, {root: true});
                }
            );
        },
        _delete({dispatch}, {id}){
            userService._delete(id)
            .then(
                () => {
                    dispatch('alert/success', "Usuario borrado con éxito", {root: true});
                    setTimeout(()=>{router.push('/login')}, 1250);
                },
                error => {
                    dispatch('alert/error', error, {root: true});
                }
            );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
        }
    },
    mutations: {
        loginRequest(state, user) {
            state.user = user;
        },
        loginSuccess(state, user) {
            state.user = user;
        },
        loginFailure(state) {
            state.user = null;
        },
        registerFailure(state) {
            state.user = null;
        },
        logout(state) {
            state.user = null;
        }
    }
}