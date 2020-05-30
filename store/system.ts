import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import * as store from 'store2';
import gql from 'graphql-tag';
import backend from '@/utils/backend';

const storage = store.namespace('system');

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class System extends VuexModule {
    models = [];

    get info() {
        return storage.get('info');
    }

    @Mutation
    setModels(value) {
        this.models = value;
    }

    @Action({ rawError: true })
    async getInfo() {
        const result = await backend.query({
            query: gql`
                {
                    system {
                        version
                        adminUserExists
                    }
                }
            `,
            fetchPolicy: 'no-cache',
        });
        const {
            data: { system },
        } = result;
        storage.set('info', system);
        return system;
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
