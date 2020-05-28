<template>
    <div>
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
    p {
        padding: 5px 20px;
        margin: 0;
        z-index: 200;
        position: relative;
        line-height: 1.7;
        font-size: 0.85rem;
    }
}
</style>