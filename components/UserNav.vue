<template>
    <vs-tooltip v-if="$store.state.auth.user" shadow bottom not-hover v-model="showTooltip">
        <vs-avatar #text @click="showTooltip=!showTooltip">{{$store.state.auth.user.name}}</vs-avatar>
        <template #tooltip>
            <div class="user-nav-tooltip">
                <box-icon name="user" size="lg" color="gray"></box-icon>
                <h4>{{$store.state.auth.user.name}}</h4>
                <br />
                <footer>
                    <vs-button @click="signout" flat dark block>Sign Out</vs-button>
                </footer>
            </div>
        </template>
    </vs-tooltip>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data: () => ({
        showTooltip: false,
    }),
    methods: {
        async signout() {
            this.showTooltip = false;
            await this.$nextTick();
            this.$store.dispatch('auth/signout');
            this.$router.push('/signin');
        },
    },
});
</script>

<style lang="scss" scoped>
.vs-tooltip-content {
    cursor: pointer;
}
</style>
<style lang="scss">
.user-nav-tooltip {
    padding: 12px;
}
</style>