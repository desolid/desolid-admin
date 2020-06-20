<template>
    <div class="data-table">
        <vs-table ref="table" striped>
            <template #thead>
                <vs-tr>
                    <vs-th v-for="(field,index) in fields" :key="index">{{field.name}}</vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="record.id" v-for="record in records.data" :data="record">
                    <vs-td v-for="field in fields" :key="field.name">{{record[field.name]}}</vs-td>
                    <template #expand>
                        <div class="row-expand">
                            <vs-button
                                border
                                info
                                @click="edit(record)"
                                disabled
                            >Edit {{model.name}}</vs-button>
                            <vs-button
                                border
                                danger
                                @click="remove(record.id)"
                                :loading="deleteLoadings[record.id]"
                            >Remove {{model.name}}</vs-button>
                        </div>
                    </template>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination
                    v-model="currentPage"
                    :length="$vs.getLength({ length: records.count }, queryLimit)"
                    dark
                />
            </template>
        </vs-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
    props: ['model', 'records', 'loading', 'page'],
    data: () => ({
        loader: undefined,
        currentPage: 1,
        deleteLoadings: {},
    }),
    mounted() {
        this.currentPage = this.page;
        console.log(this.$vs);
    },
    computed: {
        ...mapState('model', ['queryLimit']),
        fields() {
            return this.model.fields.filter((field) => field.isScalar && field.type != 'Password');
        },
    },
    watch: {
        currentPage(value) {
            if (value != this.page) {
                this.$emit('page-changed', value);
            }
        },
    },
    methods: {
        edit(record: { id: string }) {
            alert(`Edit ${record.id}`);
        },
        async remove(recordId: string | number) {
            this.deleteLoadings[recordId] = true;
            await this.$store.dispatch('model/remove', { model: this.model, recordId });
            this.deleteLoadings[recordId] = false;
            this.$emit('page-changed', this.page);
        },
    },
});
</script>

<style lang="scss">
.data-table {
    background-color: white;
    padding: 32px;
    border-radius: 12px;
    th {
        font-weight: bold !important;
    }
    .row-expand {
        display: flex;
        justify-content: flex-end;
    }
}
</style>