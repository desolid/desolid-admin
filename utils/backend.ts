import 'cross-fetch/polyfill';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, OperationVariables, ApolloQueryResult } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import gql from 'graphql-tag';
import * as store from 'store2';

const API_URL = window.location.origin == 'http://localhost:8000' ? process.env.API_URL : window.location.origin;

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

export const client = new ApolloClient<InMemoryCache>({
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

/**
 * Throws Error in case of requests errors
 * @param type
 * @param query
 * @param variables
 */
async function safeRequest<T = any>(type: 'query' | 'mutation', query: string, variables?: OperationVariables) {
    try {
        switch (type) {
            case 'query':
                return await client.query<T>({
                    query: gql(query),
                    variables,
                    errorPolicy: 'none',
                });
            case 'mutation':
                return await client.mutate<T>({
                    mutation: gql(query),
                    variables,
                    errorPolicy: 'none',
                });
        }
    } catch (error) {
        const [graphqlError] = error?.graphQLErrors;
        throw { code: graphqlError?.extensions?.code, message: graphqlError?.message };
    }
}

/**
 * Throws Error in case of query errors
 * @param type
 * @param query
 * @param variables
 */
export async function safeQuery<T = any>(query: string, variables?: OperationVariables) {
    return safeRequest<T>('query', query, variables);
}

/**
 * Throws Error in case of mutation errors
 * @param type
 * @param query
 * @param variables
 */
export async function safeMutation<T = any>(query: string, variables?: OperationVariables) {
    return safeRequest<T>('mutation', query, variables);
}
