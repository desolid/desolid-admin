import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import * as store from 'store2';
import { plural } from 'pluralize';
import { safeQuery } from '@/utils/backend';
import { IModel } from '~/types';

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
    setModels(value: IModel[]) {
        this.models = value.map((model) => ({
            ...model,
            pluralName: plural(model.name).toLowerCase(),
        }));
    }

    @Action({ rawError: true })
    async getInfo() {
        const result = await safeQuery(/* GraphQL */ `
            {
                system {
                    version
                    adminUserExists
                }
            }
        `);
        const {
            data: { system },
        } = result;
        storage.set('info', system);
        return system;
    }
    @Action({ rawError: true })
    async getModels() {
        const result = await safeQuery(/* GraphQL */ `
            {
                system {
                    models {
                        name
                        fields {
                            name
                            type
                            isScalar
                            isString
                            readonly
                            list
                            relationType
                            values
                        }
                    }
                }
            }
        `);
        const {
            data: {
                system: { models },
            },
        } = result;
        this.context.commit('setModels', models);
        return models;
    }
}
