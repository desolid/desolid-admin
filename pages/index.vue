<template>
    <div class="app">
        <header ref="header" class="header-page">
            <div class="header__content">
                <div ref="flex" class="flex-header">
                    <h1 ref="title" id="header-title">Item !</h1>
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
        <div>
            <slot name="top" />
            <h1>hereeklkj</h1>
            <vs-button v-for="i in 50" :key="i">Hello World Vuesax + Nuxtjs {{i}}</vs-button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app {
    width: 100%;
    background-color: var(--vs-theme-bg) !important;
}

.header-page {
    height: auto;
    border-radius: 0 0 0 30px;
    transition: background 0.25s ease, border-radius 0.25s ease;
    top: 0;
    width: 100%;
    position: absolute;
    background: var(--vs-theme-bg2);
    .header__content {
        max-width: 900px;
        margin: 0 auto;
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
            .header-page .header__content h1 {
                font-size: 35px;
                margin: 0;
                padding: 13px 0 15px;
                font-weight: 600;
            }
        }
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
            width: 110%;
            height: 100%;
            z-index: -1;
            box-shadow: 0 25px 20px -25px rgba(0, 0, 0, 0.1);
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