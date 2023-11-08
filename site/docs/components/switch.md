# Switch

## 基础用法

通过绑定 Boolean 值控制选择状态

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

通过 disabled 属性控制不可选状态

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

## 异步操作

通过 on-before-ok 控制开关的异步操作

<div class="example">
    <div>
    <k-switch v-model="val3" :on-before-ok="handleBeforeOk"></k-switch>
    </div>
</div>

::: details 显示代码

```html
<template>
    <k-switch v-model="val"></k-switch>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    const val = ref(false);
    const handleBeforeOk = async () => {
        // 进行异步操作
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return false;
    };
</script>
```

:::

<script setup lang="ts">
   import { ref } from "vue";
    const val = ref(false);
    const val2 = ref(false);
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
| checkValue         | 开启时的值 | String Number Boolean |                                               | true 
| uncheckValue         | 关闭时的值 | String Number Boolean |                                               | false 
| round         | 是否圆角按钮 | boolean | —                                                  | false |
| checkText      | 开启时的文本内容     | string | —                                                  |  |
| uncheckText      | 关闭时的文本内容     | string | —                                                  |  |
| on-before-ok          | 触发确定前的回调，返回false 则中断     |   | —                                                  | —     |