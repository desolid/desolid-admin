import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import * as store from 'store2';
import { safeQuery, safeMutation } from '@/utils/backend';
import { IModel } from '~/types';

const storage = store.namespace('system');

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Model extends VuexModule {
    public queryLimit = 10;
    @Action({ rawError: true })
    async create({ model, record }: { model: IModel; record: any }) {
        const fields = model.fields.filter((field) => (!field.readonly && !field.relationType) || field.type == 'File');
        const variablesDeclaration = fields
            .map((field) => `$${field.name}: ${field.type == 'File' ? 'Upload' : field.type}!`)
            .join(', ');
        const { data } = await safeMutation(
            /* GraphQL */ `
            mutation create(${variablesDeclaration}) {
                create${model.name}( data: { ${fields.map((field) => `${field.name}: $${field.name}`).join(',')} }) {
                    id
                    createdAt
                }
            }
        `,
            record,
        );
        return data[`create${model.pluralName}`];
    }
    @Action({ rawError: true })
    async remove({ model, recordId }: { model: IModel; recordId: string | number }) {
        const { data } = await safeMutation(
            /* GraphQL */ `
            mutation delete($id: ID!) {
                delete${model.name}( where: { id: $id }) {
                    id
                    createdAt
                }
            }
        `,
            {
                id: recordId,
            },
        );
        return data[`delete${model.pluralName}`];
    }
    @Action({ rawError: true })
    async readAll({ model, page }: { model: IModel; page: number }) {
        const { data } = await safeQuery(/* GraphQL */ `
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
        `);
        return {
            data: data[model.pluralName],
            count: data[`${model.pluralName}Connection`].aggregate.count,
        };
    }
}
