<template>
    <div>
        <Navbar />
        <div>
            <Sidebar />
            <nuxt />
        </div>
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