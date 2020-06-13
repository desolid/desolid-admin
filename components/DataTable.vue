<template>
    <div class="data-table">
        <vs-table ref="table" striped>
            <template #thead>
                <vs-tr>
                    <vs-th v-for="(field,index) in fields" :key="index">{{field.name}}</vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="i" v-for="(tr, i) in records.data" :data="tr">
                    <vs-td v-for="(field,index) in fields" :key="index">{{tr[field.name]}}</vs-td>
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
    }),
    mounted() {
        this.currentPage = this.page;
        console.log(this.$vs)
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
}
</style>