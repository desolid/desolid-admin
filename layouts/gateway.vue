<template>
    <div class="layout">
        <nuxt />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '~/components/Navbar.vue';
import Sidebar from '~/components/Sidebar.vue';

export default Vue.extend({
    components: {
        Navbar,
        Sidebar,
    },
});
</script>

<style src="~/assets/styles/styles.scss" lang="scss"></style>
<style lang="scss" scoped>
.layout {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>