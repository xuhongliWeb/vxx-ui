# 气泡确认 Popconfirm

在元素附近弹出气泡确认框进行交互

## 基础用法

<ClientOnly>
<div class="example">
    <k-popconfirm position="bottom" content="请确认是否执行操作">
    <k-button>弹出气泡确认</k-button>
  </k-popconfirm>
</div>
</ClientOnly>

::: details 显示代码

```html
<div class="example">
    <k-popconfirm position="bottom" content="请确认是否执行操作">
        <k-button>弹出气泡确认</k-button>
    </k-popconfirm>
</div>
```

:::

## 异步操作

通过 on-before-ok 控制开关的异步操作

<ClientOnly>
<div class="example">
    <k-popconfirm position="bottom" content="请确认是否执行操作" :on-before-ok="handleBeforeOk">
    <k-button>弹出气泡确认</k-button>
  </k-popconfirm>
</div>
</ClientOnly>

::: details 显示代码

```html
<div class="example">
    <k-popconfirm
        position="bottom"
        content="请确认是否执行操作"
        :on-before-ok="handleBeforeOk"
    >
        <k-button>弹出气泡确认</k-button>
    </k-popconfirm>
</div>
```

:::

<script setup lang="ts">
const handleBeforeOk = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return true;
};
</script>




## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| content         | 文本内容         | string  |                              | —     | --
| type          | 类型        | string | | info | success | warning | danger    |
| position         | 弹出位置 | String | top | bottom | left | right |                                               | true 
| uncheckValue         | 关闭时的值 | String Number Boolean |                                               | false 
| round         | 是否圆角按钮 | boolean | —                                                  | false |
| okText      | 确认按钮文本     | string | —                                                  |  |
| cancleText      | 取消按钮文本     | string | —                                                  |  |
| on-before-ok          | 触发确定前的回调，返回false 则中断     |   | —                                                  | —     |


## 事件

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| ok         | 点击确认触发         | -  |                              | —     | --
| cancle          | 点击取消触发        | 