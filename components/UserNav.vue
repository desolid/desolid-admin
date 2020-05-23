<template>
    <vs-tooltip bottom shadow not-hover v-model="showTooltip">
        <vs-avatar #text @click="showTooltip=!showTooltip">Evan You</vs-avatar>
        <template #tooltip>
            <div class="content-tooltip">
                <h4 class="center">Confirm</h4>
                <p>You are sure to delete this user, by doing so you cannot recover the data</p>
                <footer>
                    <vs-button @click="showTooltip=false" danger block>Delete</vs-button>
                    <vs-button @click="showTooltip=false" transparent dark block>Cancel</vs-button>
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
});
</script>

<style lang="scss" scoped>
.vs-tooltip-content {
    cursor: pointer;
}
</style>