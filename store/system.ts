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
    get info() {
        return storage.get('info');
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
}
