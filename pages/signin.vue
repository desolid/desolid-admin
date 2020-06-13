

<template>
    <form class="desolid-form signin" @submit.prevent="signin">
        <header>
            <img src="/logo.png" alt="Desolid" class="logo" height="64" />
            <br />
        </header>
        <br />
        <vs-alert v-if="hasError" color="dark" relief :hidden-content="true">
            <template #icon>
                <!-- <box-icon name="error" color="rgba(var(--vs-color), 1)"></box-icon> -->
                <box-icon name="error" color="white"></box-icon>
            </template>
            <template #title>Authentication failed !</template>
        </vs-alert>
        <vs-input type="email" v-model="email" placeholder="email" name="email" required>
            <template #icon>@</template>
        </vs-input>
        <vs-input
            type="password"
            v-model="password"
            placeholder="Password"
            name="password"
            required
        >
            <template #icon>
                <box-icon name="key" color="#606161"></box-icon>
            </template>
        </vs-input>
        <vs-button block color="dark" :loading="loading">Sign in</vs-button>
    </form>
</template>



<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
    layout: 'gateway',
    middleware: 'systemStatus',
    data: () => ({
        email: '',
        password: '',
        hasError: false,
        loading: false,
    }),
    mounted() {
        localStorage.clear();
    },
    methods: {
        ...mapActions('auth', ['authenticate']),
        async signin(event: Event) {
            this.loading = true;
            try {
                this.hasError = false;
                await this.authenticate({ email: this.email, password: this.password });
                const { $vs } = this as any;
                this.$router.push('/');
                $vs.notification({
                    title: `You are authenticated`,
                    text: `Wellcome to desolid admin zone 🤖`,
                    // position: 'bottom-center',
                    // color: 'dark',
                });
            } catch (error) {
                this.hasError = true;
                console.log({ error });
            }
            this.loading = false;
        },
    },
});
</script>

<style lang="scss">
.signin {
    background-color: white;
    padding: 36px;
}
</style>