import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import * as store from 'store2';
import { safeQuery, safeMutation } from '@/utils/backend';

const storage = store.namespace('auth');

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Auth extends VuexModule {
    user = storage.get('user');

    @Mutation
    setUser(value) {
        this.user = value;
        storage.set('user', value);
    }

    @Action({ rawError: true })
    async authenticate({ email, password }) {
        this.context.commit('setUser', null);
        const result = await safeQuery(/* GraphQL */ `{
            authenticate(email: "${email}", password: "${password}") {
                token
                user {
                    id
                    name
                }
            }
        }`);
        const {
            data: {
                authenticate: { token, user },
            },
        } = result;
        storage.set('token', token);
        this.context.commit('setUser', user);
    }

    @Action({ rawError: true })
    async createUser({ name, email, password, group }) {
        const result = await safeMutation(/* GraphQL */ `mutation {
            createUser(data: { name: "${name}", email: "${email}", password: "${password}", group: ${group} }) {
                id
            }
        }`);
        const {
            data: {
                createUser: { id },
            },
        } = result;
        return id;
    }

    @Action({ rawError: true })
    async signout() {
        this.context.commit('setUser', null);
    }
}
