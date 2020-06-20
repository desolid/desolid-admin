<template>
    <div class="layout">
        <h1>
            <div class="skull">☠️</div>
            {{error.message}}
        </h1>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
    props: ['error'],
    layout: 'default', // you can set a custom layout for the error page
    mounted() {
        switch (this.error.code) {
            case 'UNAUTHENTICATED':
                this.$store.dispatch('auth/signout');
                this.$router.push('signin');
                // location.href = '/signin';
                break;
        }
    },
});
</script>
<style lang="scss" scoped>
.layout {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .skull {
        text-align: center;
        font-size: 24vh;
    }
}
</style>