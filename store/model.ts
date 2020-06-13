import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import * as store from 'store2';
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
    async readAll(model: IModel, query: IQuery) {
        const { data } = await backend.query({
            query: gql`
                {
                    ${model.pluralName}(where: {}, limit: 120) {
                        ${model.fields
                            .filter((field) => field.isScalar && field.type != 'Password')
                            .map((field) => field.name)
                            .join(',')}
                    }
                    ${model.pluralName}Connection(where: {}) {
                        aggregate {
                            count
                        }
                    }
                }
            `,
        });
        return {
            data: data[model.pluralName],
            count: data[`${model.pluralName}Connection`].aggregate.count,
        };
    }
}
