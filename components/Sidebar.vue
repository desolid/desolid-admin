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
                    <box-icon name='heart' type='solid' ></box-icon>
                    item1
                </li>
            </ul>
            <slot name="bottom" />
        </div>
    </aside>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
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
    background: var(--vs-theme-layout);
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
            li {
                color: var(--vs-theme-color);
                transition: color 0.15s ease;
                cursor: pointer;
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
</style>