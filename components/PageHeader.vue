<template>
    <header ref="header" class="header-page">
        <div class="header__content container">
            <div ref="flex" class="flex-header">
                <h1 ref="title" id="header-title">
                    <box-icon :name="icon" size="md"></box-icon>
                    &nbsp;{{title}}
                </h1>
                <div class="actions text">
                    <slot />
                </div>
            </div>
        </div>
        <svg
            class="header-effect"
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="160"
            viewBox="0 0 160 160"
        >
            <path
                id="Trazado_200"
                data-name="Trazado 200"
                d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
                transform="translate(0 10)"
                fill="#fff"
            />
        </svg>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: ['title', 'icon'],
});
</script>
<style lang="scss" scoped>
.header-page {
    height: auto;
    border-radius: 0 0 0 30px;
    transition: background 0.25s ease, border-radius 0.25s ease;
    top: 0;
    width: 100%;
    position: absolute;
    background: var(--vs-theme-bg2);
    text-transform: capitalize;
    .header__content {
        padding: 2rem 2.5rem;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 200px;
        padding-top: 0;
        padding-bottom: 0;
        background: transparent;
        padding: 0 40px !important;
        .flex-header {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 70px;
            h1 {
                display: flex;
                align-items: center;
                justify-content: center;
                // font-size: 35px;
                // margin: 0;
                // padding: 13px 0 15px;
                // font-weight: 600;
            }
            .actions {
                display: flex;
                align-items: center;
                justify-content: center;
                list-style: none;
                padding-bottom: 13px;
                margin: 0;
                color: gray;
                // &>span {
                //     border-right-width: 6px;
                //     border-right-color: grey;
                //     border-right-style: solid;
                //     margin-right: 3px;
                //     padding-right: 3px;
                // }
            }
        }
    }
    .header-effect {
        position: absolute;
        bottom: 0;
        transform: rotate(0deg);
        max-width: 40px;
        max-height: 40px;
        z-index: 200;
        right: 0;
        bottom: -38px;
        transition: all 0.25s ease;
        #Trazado_200 {
            fill: var(--vs-theme-bg2) !important;
            stroke: var(--vs-theme-bg2) !important;
        }
    }
}
</style>