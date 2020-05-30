<template>
    <div>
        <PageHeader title="Categories">
            13245&nbsp;
            <box-icon name="heart" type="solid"></box-icon>
        </PageHeader>
        <div class="container content">
            <slot name="top" />
            <h2>Header2</h2>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Habitasse platea dictumst vestibulum rhoncus est. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ultrices gravida dictum fusce ut. Quis eleifend quam adipiscing vitae. Hac habitasse platea dictumst vestibulum rhoncus est. Ipsum consequat nisl vel pretium lectus. Sed lectus vestibulum mattis ullamcorper velit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Mauris vitae ultricies leo integer malesuada nunc vel. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Lectus nulla at volutpat diam ut. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Blandit cursus risus at ultrices. Ultrices sagittis orci a scelerisque. Rhoncus mattis rhoncus urna neque. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.</p>
                <br />
                <br />
                <br />
                <p>Ultricies tristique nulla aliquet enim tortor at auctor. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Ullamcorper eget nulla facilisi etiam dignissim. Aliquet bibendum enim facilisis gravida neque. A cras semper auctor neque vitae tempus quam pellentesque. Viverra aliquet eget sit amet. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ultrices dui sapien eget mi proin sed libero enim sed. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Iaculis nunc sed augue lacus viverra vitae congue eu. Morbi quis commodo odio aenean sed adipiscing. Porttitor massa id neque aliquam vestibulum morbi. Integer vitae justo eget magna fermentum iaculis.</p>
                <br />
                <br />
                <br />
                <p>Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Congue quisque egestas diam in arcu cursus euismod. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Magna ac placerat vestibulum lectus. Cursus eget nunc scelerisque viverra. Etiam erat velit scelerisque in dictum non. Eu mi bibendum neque egestas congue quisque. Feugiat nisl pretium fusce id velit ut. Duis tristique sollicitudin nibh sit. Massa massa ultricies mi quis hendrerit dolor magna eget. Malesuada fames ac turpis egestas. Lacus luctus accumsan tortor posuere ac ut consequat. Scelerisque varius morbi enim nunc. Malesuada fames ac turpis egestas. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Urna nec tincidunt praesent semper feugiat nibh sed. Cras tincidunt lobortis feugiat vivamus at augue. Elementum nibh tellus molestie nunc non blandit massa enim nec. A lacus vestibulum sed arcu. Sapien eget mi proin sed libero enim sed faucibus turpis.</p>
                <br />
                <br />
                <br />
                <p>Diam phasellus vestibulum lorem sed. Habitant morbi tristique senectus et. Sit amet consectetur adipiscing elit. Sollicitudin tempor id eu nisl nunc mi ipsum. Quisque egestas diam in arcu cursus. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Ultricies mi eget mauris pharetra. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Id consectetur purus ut faucibus pulvinar elementum. Sit amet est placerat in egestas erat imperdiet sed euismod. Dignissim sodales ut eu sem integer vitae justo eget. Tincidunt praesent semper feugiat nibh. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Sed vulputate mi sit amet mauris. Adipiscing elit pellentesque habitant morbi tristique senectus. Nunc sed blandit libero volutpat sed. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Senectus et netus et malesuada fames. Quam pellentesque nec nam aliquam sem et tortor consequat id.</p>
                <br />
                <br />
                <br />
                <p>Libero id faucibus nisl tincidunt. In iaculis nunc sed augue lacus viverra vitae. Nunc aliquet bibendum enim facilisis gravida neque. Morbi quis commodo odio aenean sed. Quis risus sed vulputate odio ut enim. Magna fermentum iaculis eu non. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Libero id faucibus nisl tincidunt eget nullam. Porta nibh venenatis cras sed felis eget velit. Arcu non sodales neque sodales ut. At volutpat diam ut venenatis tellus. Enim nunc faucibus a pellentesque sit amet. Quis auctor elit sed vulputate mi. Gravida in fermentum et sollicitudin.</p>
                <br />
                <br />
                <br />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '~/components/PageHeader.vue';

export default Vue.extend({
    layout: 'dashboard',
    middleware: 'auth',
    async fetch({ params, store }) {
        await store.dispatch('system/getModels');
    },
    components: {
        PageHeader,
    },
});
</script>

<style lang="scss" scoped>
.content {
    padding: 2rem 2.5rem;
    p {
        padding: 5px 20px;
        margin: 0;
        z-index: 200;
        position: relative;
        line-height: 1.7;
        font-size: 0.85rem;
    }
}
</style>