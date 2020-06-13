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
    public queryLimit = 10;
    @Action({ rawError: true })
    async create({ model, record }: { model: IModel; record: any }) {
        const fields = model.fields.filter((field) => !field.readonly && !field.relationType);
        const { data } = await backend.mutate({
            mutation: gql`
                mutation create(${fields.map((field) => `$${field.name}: ${field.type}!`).join(',')}) {
                    create${model.name}( data: { ${fields
                .map((field) => `${field.name}: $${field.name}`)
                .join(',')} }) {
                        id,
                        createdAt
                    }
                }
            `,
            variables: record,
        });
        return data[`create${model.pluralName}`];
    }
    @Action({ rawError: true })
    async readAll({ model, page }: { model: IModel; page: number }) {
        const { data } = await backend.query({
            query: gql`
                {
                    ${model.pluralName}(where: {}, limit: ${this.queryLimit}, offset: ${(page - 1) * this.queryLimit}) {
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
