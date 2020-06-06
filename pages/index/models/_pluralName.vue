<template>
    <div>
        <PageHeader :title="model.pluralName" icon="data">
            <span>{{records.count}} Records</span>&nbsp;|
            <vs-button @click="true" success>Create</vs-button>
        </PageHeader>
        <div class="container content">
            <DataTable :model="model" :records="records" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '~/components/PageHeader.vue';
import DataTable from '~/components/DataTable.vue';
import backend from '@/utils/backend';
import gql from 'graphql-tag';

export default Vue.extend({
    async asyncData({ store, params }) {
        const model = store.state.system.models.find((model) => model.pluralName == params.pluralName);
        const records = await store.dispatch('model/readAll', model);
        return {
            model,
            records,
        };
    },
    components: {
        PageHeader,
        DataTable,
    },
});
</script>

<style lang="scss" scoped>
</style>