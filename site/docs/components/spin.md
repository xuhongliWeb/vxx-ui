# 加载 Spin

用于在合适区域内展示加载状态，提升用户等待体验。

## 基础用法

<ClientOnly>
<div class="example">
     <k-spin loading/>
</div>
</ClientOnly>

::: details 显示代码

```html
<div class="example">
    <k-spin loading />
</div>
<script setup lang="ts">
    import { ref } from "vue";
    const loading = ref(true);
</script>
```
:::


## 在容器中使用

<ClientOnly>
<div class="example">
     <k-spin :loading="loading1" tip="加载中，请稍候">
    <div class="demo-spin-box">在容器中使用</div>
  </k-spin>
</div>
</ClientOnly>

::: details 显示代码

```html
<k-spin loading tip="加载中，请稍候">
    <div class="demo-spin-box"></div>
</k-spin>
<script setup lang="ts">
    import { ref } from "vue";
    const loading = ref(true);
</script>
```
:::

<script setup lang="ts">
    import { ref } from "vue";
    const loading = ref(true);
    const loading1 = ref(true);
    
</script>


## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| loading        | 是否开启加载         | boolean  |                              | —     | --
| tip         | 加载提示文字        | string |   |