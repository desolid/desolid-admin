<template>
    <NuxtChild />
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '~/components/PageHeader.vue';

export default Vue.extend({
    layout: 'dashboard',
    middleware: [
        'auth',
        /**
         * Loading models list
         */
        async ({ store, redirect }) => {
            await store.dispatch('system/getModels');
        },
    ],
    components: {
        PageHeader,
    },
});
</script>

<style lang="scss" scoped>
.content {
    padding-top: 64px !important;
}
</style>