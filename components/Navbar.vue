<template>
    <div class="navbar">
        <nuxt-link to="/" class="brand">
            <img
                src="https://desolid.netlify.app/logo_outline.png"
                alt="Desolid"
                class="logo"
                height="32"
            />
            <span class="brand-title">D E S O L I D</span>
        </nuxt-link>
        <div>
            <UserNav />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserNav from '~/components/UserNav.vue';
export default Vue.extend({
    components: {
        UserNav,
    },
});
</script>

<style lang="scss" scoped>
.navbar {
    position: fixed;
    z-index: 20000;
    top: 0;
    right: 0;
    left: auto;
    height: 58px;
    background-color: var(--vs-theme-layout);
    box-sizing: border-box;
    border-bottom: 0 !important;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 30px 0;
    transition: all 0.25s ease;
    justify-content: space-between;
}
.brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    .brand-title {
        margin-left: 6px;
        // font-weight: 700;
        font-size: 16px;
        font-family: monospace;
        background-color: black;
        color: white;
        border-radius: 3px;
        padding: 3px 12px;
    }
}
</style>