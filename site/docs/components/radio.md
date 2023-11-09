## 基础用法

<ClientOnly>
<div class="example">
    <div>
        <k-radio v-model="val1">单选</k-radio>
    </div>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
    <k-radio v-model="val">单选</k-radio>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    const val = ref("");
</script>
```

:::

## 单选框组

<ClientOnly>
<div class="example">
    <div>
    <k-radio-group v-model="val" type="button">
    <template v-for="v in optionList">
      <k-radio :value="v.value">{{ v.label }}</k-radio>
    </template>
  </k-radio-group>
    </div>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
    <k-radio v-model="val">单选</k-radio>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    const val = ref("");
</script>
```

:::

<script setup lang="ts">
   import { ref } from "vue";

    const val1 = ref();
    const val = ref(0);
const optionList = [
  { value: 0, label: "选项一" },
  { value: 1, label: "选项二" },
  { value: 2, label: "选项三" },
];

</script>

## Attributes

| 参数     | 说明         | 类型                  | 可选值 | 默认  |
| -------- | ------------ | --------------------- | ------ | ----- | ------- |
| v-model  | 单选框绑定值 | String Number Boolean | -- /   | —     | primary |
| value    | 选项的值     | String Number Boolean |        | --    |
| disabled | 禁用         | boolean               |        | false |

## 事件

| 参数   | 说明           | 类型                  | 可选值 | 默认 |
| ------ | -------------- | --------------------- | ------ | ---- | ----- |
| change | 选项值改变触发 | String Number Boolean | -- /   | —    | value |

## RadioGroup 属性

| 参数      | 说明         | 类型                  | 可选值    | 默认  |
| --------- | ------------ | --------------------- | --------- | ----- | ------- |
| v-model   | 单选框绑定值 | String Number Boolean | -- /      | —     | primary |
| value     | 选项的值     | String Number Boolean |           | --    |
| disabled  | 禁用         | boolean               |           | false |
| direction | 排列方向     | vertical              | horizonta |       |
