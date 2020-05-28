

<template>
    <form class="signin card">
        <header>
            <img
                src="https://desolid.netlify.app/logo_outline.png"
                alt="Desolid"
                class="logo"
                height="64"
            />
            <br />
        </header>
        <br />
        <vs-input type="email" v-model="email" placeholder="email" name="email">
            <template #icon>@</template>
        </vs-input>
        <br />
        <vs-input type="password" v-model="password" placeholder="Password" name="password">
            <template #icon>
                <box-icon name="lock" color="#606161"></box-icon>
            </template>
        </vs-input>
        <br />
        <vs-button block>Sign in</vs-button>
    </form>
</template>



<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    layout: 'gateway',
    data: () => ({
        email: '',
        password: '',
    }),
});
</script>

<style lang="scss">
.signin {
    min-width: 360px;
    background-color: white;
    padding: 36px;
    border-radius: 24px;
    .vs-input {
        width: 100% !important;
    }
    header {
        text-align: center;
    }
}
</style>