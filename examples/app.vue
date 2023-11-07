<template>
    <div class="shake">
        <k-link href="#">link</k-link>
        <k-button>测试</k-button>
        <k-input v-model="isshake" clearable></k-input>
        <k-modal v-model:visible="isshake"></k-modal>
        <div style="padding: 20px;margin: 100px;">
            <k-popconfirm position="top" content="请确认是否执行操作">
                <k-button>弹出气泡确认</k-button>
            </k-popconfirm>

                <k-image width="100" @load="imgLoad" @error="imgError"
                    src="https://cos.birdpaper.com/birdpaper-ui/v2/image-demo/3.JPG?imageMogr2/thumbnail/!50p"></k-image>
        </div>


        <k-switch  v-model="val"></k-switch>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const isshake = ref(false)

const imgError = () => {
    console.log('imgError');
}
const imgLoad = () => {
    console.log('imgLoad');
}


const val = ref(true);
</script>
<style lang='less'></style>