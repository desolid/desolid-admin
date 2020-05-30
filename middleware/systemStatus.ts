import { Middleware } from '@nuxt/types';

export default (async ({ store, error, redirect, route }) => {
    if (store.state.auth.user) {
        redirect(302, '/');
    } else {
        const { adminUserExists } = await store.dispatch('system/getInfo');
        if (adminUserExists) {
            if (route.name !== 'signin') {
                redirect(302, '/signin');
            }
        } else {
            if (route.name !== 'signup') {
                redirect(302, '/signup');
            }
        }
    }
}) as Middleware;
