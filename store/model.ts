import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import * as store from 'store2';
import { plural } from 'pluralize';
import gql from 'graphql-tag';
import backend from '@/utils/backend';
import { IModel, IQuery } from '~/types';

const storage = store.namespace('system');

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Model extends VuexModule {
    @Action({ rawError: true })
    async readAll({ pluralName }: IModel, query: IQuery) {
        return backend
            .query({
                query: gql`
                {
                    ${pluralName}(where: {}, limit: 120) {
                        id
                        name
                        createdAt
                        posts {
                            id
                            title
                            createdAt
                        }
                    }
                }
            `,
            })
            .then((res) => res.data[pluralName]);
    }
    @Action({ rawError: true })
    async getModels() {
        const result = await backend.query({
            query: gql`
                {
                    system {
                        models {
                            name
                            fields {
                                name
                                type
                            }
                        }
                    }
                }
            `,
            fetchPolicy: 'no-cache',
        });
        const {
            data: {
                system: { models },
            },
        } = result;
        this.context.commit('setModels', models);
        return models;
    }
}
