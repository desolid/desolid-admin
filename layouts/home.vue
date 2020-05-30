<template>
    <div class="layout">
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
<style lang="scss" scoped>
.layout {
    background-color: var(--vs-theme-bg) !important;
    margin-left: 260px;
    padding-left: 0 !important;
    display: block;
    margin-top: 57px;
    position: relative;
    margin-bottom: 0;
    padding-top: 48px !important;
    transition: all 0.25s ease;
    width: calc(100% - 260px);
}
p {
    font-size: 0.85rem;
}

h1 {
    color: var(--vs-theme-text-color);
    font-size: 35px;
    font-weight: 600;
    &:hover {
        padding-left: 12px;
    }
}

h2 {
    color: var(--vs-theme-text-color);
    font-size: 1.5rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #eaecef;
    font-weight: 600;
    padding-top: 20px !important;
    margin: 0;
    border-bottom: 0;
    padding: 15px 20px 10px;
    z-index: 200;
    position: relative;
    &:hover {
        padding-left: 24px;
    }
}

.container {
    max-width: 900px;
    margin: 0 auto;
}
</style>