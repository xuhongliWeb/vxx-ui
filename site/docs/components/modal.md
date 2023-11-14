# 对话框 Modal

在当前页面打开一个与用户对话、交互的弹框。

## 基础用法

<ClientOnly>
<div class="example">
    <k-button @click="handleOpen">打开对话框</k-button>
     <k-modal v-model:visible="show">
    <p>对话框内容</p>
  </k-modal>
</div>
</ClientOnly>

::: details 显示代码

```html
<div class="example">
      <k-button @click="handleOpen">打开对话框</k-button>
     <k-modal v-model:visible="show">
    <p>对话框内容</p>
  </k-modal>
</div>
```

:::

## 自定义底部

通过底部插槽 footer 自定义内容

<ClientOnly>
<div class="example">
<k-button @click="handleOpen2">自定义底部</k-button>
  <k-modal v-model:visible="show2">
    <p>对话框内容</p>
    <template #footer>
        <k-button type="plain" @click="show2 = false">取消</k-button>
        <k-button type="primary" status="danger" @click="show2 = false">确认删除</k-button>
    </template>
  </k-modal>
</div>
</ClientOnly>

::: details 显示代码

```html
<div class="example">
<k-button @click="handleOpen2">自定义底部</k-button>
  <k-modal v-model:visible="show2">
    <p>对话框内容</p>
    <template #footer>
        <k-button type="plain" @click="show2 = false">取消</k-button>
        <k-button type="primary" status="danger" @click="show2 = false">确认删除</k-button>
    </template>
  </k-modal>
</div>
```

:::

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
const show2 = ref(false);

const handleOpen = () => {
  show.value = true;
};
const handleOpen2 = () => {
  show2.value = true;
};
</script>




## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| v-model:visible        | 对话框显示状态         | boolean  |                              | —     | --
| title          | 标题        | string |   |
| width         | 宽度 | String ||                                               | -- 
| top         | 距离顶部的位置 | String  |                                               |  

## 插槽

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| footer         | 底部         | -  |                              | —     | --