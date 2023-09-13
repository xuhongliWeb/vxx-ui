# 对话框 Modal

在当前页面打开一个与用户对话、交互的弹框。

### 基础用法

<div class="example">
    <div>
       <k-button @click="handleClick">点击显示</k-button>
        <k-modal v-model:visible="show">
            <p>对话框内容</p>
        </k-modal>
    </div>

</div>

<script lang="ts" setup>
import { ref } from "vue";

const show = ref(false);

const handleClick = () => {
    show.value = true;
};
</script>

::: details 显示代码

```html
<template>
    <div>
        <k-button @click="handleClick">禁用按钮</k-button>
        <k-modal v-model="show">
            <p>对话框内容</p>
        </k-modal>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from "vue";

    const show = ref(false);

    const handleOpen = () => {
        show.value = true;
    };
</script>
```

:::

### 自定义底部


::: details 显示代码

```html
<template>
    <div>
        <k-button @click="handleClick">禁用按钮</k-button>
        <k-modal v-model="show">
            <p>对话框内容</p>
            <template #footer>自定义底部</template>
        </k-modal>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from "vue";

    const show = ref(false);

    const handleClick = () => {
        show.value = true;
    };
</script>
```

:::

