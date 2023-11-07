# Switch

## 基础用法

<ClientOnly>
<div class="example">
    <div>
        <k-switch v-model="val"></k-switch>
    </div>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
    <k-switch v-model="val"></k-switch>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    const val = ref(false);
</script>
```
:::

## 禁用状态

<div class="example">
    <div>
    <k-switch v-model="val2" disabled></k-switch>
    </div>
</div>

::: details 显示代码

```html
<template>
    <k-switch v-model="val" disabled></k-switch>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    const val = ref(false);
</script>
```
:::
<script setup lang="ts">
   import { ref } from "vue";
    const val = ref(false);
    const val2 = ref(false);
</script>
