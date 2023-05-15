<template>
    <k-input v-model="input" autosize type="textarea" placeholder="请输入内容"></k-input>
    <br>

    <k-input v-model="input" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="请输入内容"></k-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>