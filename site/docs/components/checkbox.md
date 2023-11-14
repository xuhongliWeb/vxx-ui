# Checkbox

## 基础用法

通过绑定 Boolean 值控制选择状态

<ClientOnly>
<div class="example">
    <div>
        <k-checkbox v-model="val">选项1</k-checkbox>
    </div>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
    <k-checkbox v-model="val"></k-checkbox>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    const val = ref(false);
</script>
```

:::

## 禁用

通过 disabled

<ClientOnly>
<div class="example">
    <div>
        <k-checkbox  v-model="val3"  :disabled="dis">选项1</k-checkbox >
    </div>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
    <k-checkbox v-model="val" :disabled="dis">checkbox</k-checkbox>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    const val = ref(false);
    const dis = ref(true);
</script>
```

:::

<script setup lang="ts">
   import { ref } from "vue";
    const val = ref(false);
    const dis = ref(true);
    const val3 = ref(false);

    const handleBeforeOk = async () => {
        // 进行异步操作
        await new Promise(resolve => setTimeout(resolve, 2000));
        return false;
    }
</script>



## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| v-model          | 绑定值         | boolean  |                              | —     | false
| disabled          | 是否禁用        | boolean | | false    |
