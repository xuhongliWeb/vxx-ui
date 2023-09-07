<template>
    <div class="shake">
        <k-link href="#">link</k-link>
        <k-button >测试</k-button>
        <k-input v-model="isshake" clearable></k-input>
        <k-modal v-model:visible="isshake"></k-modal>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const isshake = ref(true)
</script>
<style lang='less'>

</style>