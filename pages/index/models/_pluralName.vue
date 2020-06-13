<template>
    <div>
        <PageHeader :title="model.pluralName" icon="data">
            <span>{{records.count}} Records</span>&nbsp;|
            <vs-button @click="showCreateModelDialg = true" dark>Create</vs-button>
        </PageHeader>
        <CreateModelDialog
            :show="showCreateModelDialg"
            :model="model"
            @closed="showCreateModelDialg=false"
            @created="reload"
        />
        <div class="container content">
            <DataTable :model="model" :records="records" :loading="loading" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '~/components/PageHeader.vue';
import DataTable from '~/components/DataTable.vue';
import CreateModelDialog from '~/components/CreateModelDialog.vue';
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
    data: () => ({
        showCreateModelDialg: false,
        loading: false,
    }),
    components: {
        PageHeader,
        DataTable,
        CreateModelDialog,
    },
    methods: {
        async reload($event) {
            // this.loading = true;
            try {
                this.records = await this.$store.dispatch('model/readAll', this.model);
            } catch (error) {
                alert(error.message);
            }
            // this.loading = false;
        },
    },
});
</script>

<style lang="scss" scoped>
</style>