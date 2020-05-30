<template>
    <div>
        <PageHeader title="Model">
            13245&nbsp;
            <box-icon name="heart" type="solid"></box-icon>
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

export default Vue.extend({
    layout: 'dashboard',
    middleware: 'auth',
    async fetch({ params, store }) {
        await store.dispatch('system/getModels');
    },
    components: {
        PageHeader,
    },
});
</script>

<style lang="scss" scoped>
.content {
    padding: 2rem 2.5rem;
    p {
        padding: 5px 20px;
        margin: 0;
        z-index: 200;
        position: relative;
        line-height: 1.7;
        font-size: 0.85rem;
    }
    min-height: calc( 100vh - 270px);
}
</style>