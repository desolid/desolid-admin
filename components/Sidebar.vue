<template>
    <aside class="sidebar">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="160"
            viewBox="0 0 160 160"
            class="effect1"
        >
            <path
                id="Trazado_200"
                data-name="Trazado 200"
                d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
                transform="translate(0 10)"
            />
        </svg>
        <div class="content-sidebar">
            <slot name="top" />
            <ul class="sidebar-links">
                <li>
                    <nuxt-link to="/" class="sidebar-heading">
                        <box-icon name="home"></box-icon>&nbsp;
                        Home
                    </nuxt-link>
                </li>
                <li>
                    <section>
                        <p class="sidebar-heading">
                            <box-icon name="data"></box-icon>&nbsp;
                            Data models
                            <!-- <box-icon name="chevron-right" size="sm"></box-icon> -->
                        </p>
                        <ul>
                            <li v-for="(model, index) in models" :key="index">
                                <nuxt-link
                                    :to="`/models/${model.pluralName}`"
                                    class="sidebar-items"
                                >{{model.name}}</nuxt-link>
                            </li>
                        </ul>
                    </section>
                </li>
                <!-- <li>
                    <nuxt-link to="/files" class="sidebar-heading">
                        <box-icon name="images"></box-icon>&nbsp;
                        Files
                    </nuxt-link>
                </li> -->
            </ul>
        </div>
        <!-- <vs-alert>
            <template #title>Wellcome to desolid</template>
            Lorem ipsum dolor sit amet, consectetur adipiscin.
        </vs-alert>-->
        <a href="https://desolid.netlify.app/" target="_blank" class="bottom-panel">
            <box-icon type="solid" name="flame" size="sm" color="gray"></box-icon>&nbsp;by&nbsp;
            <strong>DESOLID</strong>
        </a>
    </aside>
</template>

<script lang="ts">
import Vue from 'vue';

const primitiveModels = [];

export default Vue.extend({
    computed: {
        models() {
            return this.$store.state.system.models.filter((model: any) => primitiveModels.indexOf(model.name) == -1);
        },
    },
});
</script>

<style lang="scss" scoped>
.sidebar .sidebar-links {
    transition: all 0.15s ease;
}
.sidebar ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    line-height: 1.7;
    padding-left: 1.2em;
}
.sidebar {
    padding: 1.5rem 0;
    background: var(--vs-theme-layout);
    border-bottom-right-radius: 48px;
    width: 260px;
    position: fixed;
    z-index: 10;
    margin: 0;
    top: 57px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    border-right: 0;
    overflow-y: auto;
    padding-right: 5px;
    z-index: 12000 !important;
    transition: all 0.25s ease;
    overflow: inherit !important;
    .content-sidebar {
        overflow: auto;
        max-height: 100%;
        .sidebar-links {
            padding: 1.5rem 0;
            .sidebar-heading {
                color: var(--vs-theme-text-color);
                transition: color 0.15s ease;
                // cursor: pointer;
                font-size: 1em;
                font-weight: 700;
                padding: 0.35rem 1.5rem 0.35rem 1.25rem;
                width: 100%;
                box-sizing: border-box;
                margin: 0;
                border-left: 0.25rem solid transparent;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                text-decoration: none;
            }
            .sidebar-items {
                margin-left: 36px;
                color: #969fa8;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-weight: 100;
                text-decoration: none;
            }
        }
    }
}
.effect1 {
    transform: rotate(-90deg);
    position: absolute;
    max-width: 40px;
    max-height: 40px;
    z-index: 200;
    right: -37px;
    top: -2px;
    pointer-events: none;
    fill: var(--vs-theme-layout);
}
.bottom-panel {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace !important;
    text-decoration: none;
    color: gray;
    strong {
        font-family: monospace !important;
        font-weight: bold;
    }
}
</style>