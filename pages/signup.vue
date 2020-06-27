

<template>
    <form class="desolid-form signup" @submit.prevent="signup">
        <header>
            <img src="~/static/logo.png" alt="Desolid" class="logo" height="64" />
            <br />
        </header>
        <br />
        <vs-alert v-if="error" color="dark" relief :hidden-content="true">
            <template #icon>
                <!-- <box-icon name="error" color="rgba(var(--vs-color), 1)"></box-icon> -->
                <box-icon name="error" color="white"></box-icon>
            </template>
            <template #title>{{error}}</template>
        </vs-alert>
        <br />
        <vs-input type="text" v-model="name" placeholder="Name" name="name" required>
            <template #icon>
                <box-icon name="user" color="#606161"></box-icon>
            </template>
        </vs-input>
        <br />
        <vs-input type="email" v-model="email" placeholder="email" name="email" required>
            <template #icon>@</template>
        </vs-input>
        <br />
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
        <br />
        <vs-button block color="dark" :loading="loading">Create Admin</vs-button>
    </form>
</template>



<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
    layout: 'gateway',
    middleware: ['clearStorage', 'systemStatus'],
    data: () => ({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
    }),
    methods: {
        ...mapActions('auth', ['createUser']),
        async signup(event: Event) {
            this.loading = true;
            try {
                this.error = '';
                await this.createUser({ name: this.name, email: this.email, password: this.password, group: 'Admin' });
                const { $vs } = this as any;
                $vs.notification({
                    title: `Admin user created`,
                    text: `Sign in to enter the admin zone 🤖`,
                });
                this.$router.push('/signin');
            } catch (error) {
                this.error = `Creating user failed !`;
                console.log({ error });
            }
            this.loading = false;
        },
    },
});
</script>

<style lang="scss">
.signup {
    background-color: white;
    padding: 36px;
}
</style>