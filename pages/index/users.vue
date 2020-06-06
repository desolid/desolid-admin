<template>
    <div>
        <PageHeader title="Users" icon="user">
            13245&nbsp;|
            <box-icon name="user" type="solid"></box-icon>
        </PageHeader>
        <div class="content">
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
    components: {
        PageHeader,
    },
});
</script>

<style lang="scss" scoped>
</style>