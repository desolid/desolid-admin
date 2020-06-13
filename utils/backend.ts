import 'cross-fetch/polyfill';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import * as store from 'store2';

const API_URL = document.getElementById('API_URL').getAttribute('content');

const link = setContext((_, { headers, ...context }) => {
    const token = store.namespace('auth').get('token');
    return {
        headers: {
            ...headers,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        ...context,
    };
}).concat(createUploadLink({ uri: API_URL }));

export default new ApolloClient<InMemoryCache>({
    link,
    cache: new InMemoryCache() as any,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});
