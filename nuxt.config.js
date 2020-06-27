export default {
    mode: 'spa',
    server: {
        port: 8000, // default: 3000
    },
    env: {
        API_URL: process.env.API_URL || 'http://localhost:3000',
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'DESOLID',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['vuesax/dist/vuesax.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: '@/plugins/vuesax', ssr: false }],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxt/typescript-build'],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // '@nuxtjs/pwa',
    ],
    router: {
        base: '/admin/',
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
};
