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
            @created="reload(page)"
        />
        <div class="container content">
            <DataTable
                :model="model"
                :records="records"
                :page="page"
                :loading="loading"
                @page-changed="goTo($event)"
                @recordDeleted="goTo($event)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '~/components/PageHeader.vue';
import DataTable from '~/components/DataTable.vue';
import CreateModelDialog from '~/components/CreateModelDialog.vue';
import gql from 'graphql-tag';

export default Vue.extend({
    async asyncData({ store, params, query }) {
        const page = query.page || 1;
        const model = store.state.system.models.find((model) => model.pluralName == params.pluralName);
        const records = await store.dispatch('model/readAll', { model, page });
        return {
            model,
            records,
            page,
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
        async reload() {
            const loader = this.$vs.loading({ color: 'dark' });
            try {
                this.records = await this.$store.dispatch('model/readAll', {
                    model: this.model,
                    page: this.page,
                });
            } catch (error) {
                alert(error.message);
            }
            loader.$root.$el.parentNode.removeChild(loader.$root.$el);
        },
        async goTo(page) {
            this.$router.push({ path: this.$route.path, query: { page } });
            this.page = page;
            this.reload();
        },
    },
});
</script>

<style lang="scss" scoped>
</style>