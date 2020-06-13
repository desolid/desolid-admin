<template>
    <div class="data-table">
        <vs-table striped>
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
                <vs-pagination v-model="page" :length="$vs.getLength(records.data, max)" />
            </template>
        </vs-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: ['model','records'],
    data: () => ({
        page: 1,
        max: 10,
    }),
    computed: {
        fields() {
            return this.model.fields.filter(field => field.isScalar && field.type != 'Password');
        }
    }
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