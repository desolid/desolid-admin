<template>
    <div class="navbar">
        <img
            src="https://desolid.netlify.app/logo_outline.png"
            alt="Desolid"
            class="logo"
            height="32"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
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
    justify-content: flex-start;
    h2 {
        font-size: 0.5rem;
    }
}
</style>