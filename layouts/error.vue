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
    async beforeMount() {
        if (this.error.graphQLErrors?.length > 0) {
            this.error.graphQLErrors.forEach((error) => {
                switch (error.extensions?.code) {
                    case 'UNAUTHENTICATED':
                        localStorage.clear();
                        this.$router.go('/signin');
                        break;
                    default:
                        break;
                }
            });
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