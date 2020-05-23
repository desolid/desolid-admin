<template>
    <div>
        <PageHeader title="Item 1" right="2565" />
        <div class="container content">
            <slot name="top" />
            <h2>hereeklkj</h2>
            <vs-button v-for="i in 50" :key="i">Hello World Vuesax + Nuxtjs {{i}}</vs-button>
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
.content {
    padding: 2rem 2.5rem;
}
</style>