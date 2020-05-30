import { Middleware } from '@nuxt/types';

export default (({ store, error, redirect }) => {
    if (!store.state.auth.user) {
        redirect(401, '/signin');
    }
}) as Middleware;
