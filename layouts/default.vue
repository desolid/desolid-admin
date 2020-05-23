<template>
    <div>
        <Navbar />
        <div class="content">
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

<style src="~/assets/styles/variables.scss" lang="scss"></style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600;700&display=swap');

* {
    font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
        Droid Sans, Helvetica Neue, sans-serif;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-weight: 100;
    margin: 0;
}

html {
    background: var(--vs-theme-bg2);
}

p {
    font-size: 0.85rem;
}

h1 {
    font-size: 35px;
    font-weight: 600;
}

.content {
    background-color: var(--vs-theme-bg) !important;
    margin-left: 260px;
    padding-left: 0 !important;
    display: block;
    margin-top: 57px;
    position: relative;
    margin-bottom: 0;
    padding-top: 200px !important;
    transition: all 0.25s ease;
    width: calc(100% - 260px);
}
</style>