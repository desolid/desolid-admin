import { Middleware } from '@nuxt/types';

export default (async ({ store, error, redirect, route }) => {
    localStorage.clear();
}) as Middleware;
