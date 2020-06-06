<template>
    <div>
        <PageHeader :title="model.pluralName" icon="data">
            <span>13.2K Records</span>&nbsp;|
            <vs-button @click="signout" success>Create</vs-button>
        </PageHeader>
        <div class="container content">
            <vs-alert dark>
                <template #title>Wellcome to DESOLID</template>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </vs-alert>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '~/components/PageHeader.vue';
import backend from '@/utils/backend';
import gql from 'graphql-tag';

export default Vue.extend({
    async asyncData({ store, params }) {
        const model = store.state.system.models.find((model) => model.pluralName == params.pluralName);
        const records = store.dispatch('model/readAll', model);
        return {
            model,
        };
    },
    components: {
        PageHeader,
    },
});
</script>

<style lang="scss" scoped>
</style>