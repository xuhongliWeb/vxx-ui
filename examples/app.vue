<template>
    <div class="shake">
        <k-input v-model="isshake" clearable></k-input>
        <k-message v-model="isshake"></k-message>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const isshake = ref(true)
</script>
<style lang='less'>

</style>