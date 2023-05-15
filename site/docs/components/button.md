# 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <k-button>默认按钮</k-button>
        <k-button icon="edit" type="primary">主要按钮</k-button>
        <k-button type="success">成功按钮</k-button>
        <k-button type="info">信息按钮</k-button>
        <k-button type="warning">警告按钮</k-button>
        <k-button type="danger">危险按钮</k-button>
        <k-button type="text">文字按钮</k-button>
        <br>
        <br>
        <k-button plain>朴素按钮</k-button>
        <k-button type="primary" plain>主要按钮</k-button>
        <k-button type="success" plain>成功按钮</k-button>
        <k-button type="info" plain>信息按钮</k-button>
        <k-button type="warning" plain>警告按钮</k-button>
        <k-button type="danger" plain>危险按钮</k-button>
        <br>
        <br>
        <k-button round>圆角按钮</k-button>
        <k-button type="primary" round>主要按钮</k-button>
        <k-button type="success" round>成功按钮</k-button>
        <k-button type="info" round>信息按钮</k-button>
        <k-button type="warning" round>警告按钮</k-button>
        <k-button type="danger" round>危险按钮</k-button>
    </div>

</div>

::: details 显示代码

```html
<template>
  <div>
    <k-button>默认按钮</k-button>
    <k-button type="primary">主要按钮</k-button>
    <k-button type="success">成功按钮</k-button>
    <k-button type="info">信息按钮</k-button>
    <k-button type="warning">警告按钮</k-button>
    <k-button type="danger">危险按钮</k-button>
    <k-button type="text">文字按钮</k-button>

    <k-button plain>朴素按钮</k-button>
    <k-button type="primary" plain>主要按钮</k-button>
    <k-button type="success" plain>成功按钮</k-button>
    <k-button type="info" plain>信息按钮</k-button>
    <k-button type="warning" plain>警告按钮</k-button>
    <k-button type="danger" plain>危险按钮</k-button>

    <k-button round>圆角按钮</k-button>
    <k-button type="primary" round>主要按钮</k-button>
    <k-button type="success" round>成功按钮</k-button>
    <k-button type="info" round>信息按钮</k-button>
    <k-button type="warning" round>警告按钮</k-button>
    <k-button type="danger" round>危险按钮</k-button>
  </div>
</template>
```

:::

## 禁用状态

使用`disabled`控制按钮是否可以点击

<div class="example">
    <div>
        <k-button disabled>禁用按钮</k-button>
        <k-button type="primary" disabled>主要按钮</k-button>
        <k-button type="success" disabled>成功按钮</k-button>
        <k-button type="info" disabled>信息按钮</k-button>
        <k-button type="warning" disabled>警告按钮</k-button>
        <k-button type="danger" disabled>危险按钮</k-button>
        <br>
        <br>
        <k-button disabled>禁用按钮</k-button>
        <k-button type="primary" disabled plain>主要按钮</k-button>
        <k-button type="success" disabled plain>成功按钮</k-button>
        <k-button type="info" disabled plain>信息按钮</k-button>
        <k-button type="warning" disabled plain>警告按钮</k-button>
        <k-button type="danger" disabled plain>危险按钮</k-button>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <k-button disabled>禁用按钮</k-button>
    <k-button type="primary" disabled>主要按钮</k-button>
    <k-button type="success" disabled>成功按钮</k-button>
    <k-button type="info" disabled>信息按钮</k-button>
    <k-button type="warning" disabled>警告按钮</k-button>
    <k-button type="danger" disabled>危险按钮</k-button>
    <br />
    <br />
    <k-button disabled>禁用按钮</k-button>
    <k-button type="primary" disabled plain>主要按钮</k-button>
    <k-button type="success" disabled plain>成功按钮</k-button>
    <k-button type="info" disabled plain>信息按钮</k-button>
    <k-button type="warning" disabled plain>警告按钮</k-button>
    <k-button type="danger" disabled plain>危险按钮</k-button>
  </div>
</template>
```

:::

## 调整尺寸

使用`size`控制按钮大小

<div class="example">
    <div>
        <k-button>默认按钮</k-button>
        <k-button size="medium">中等按钮</k-button>
        <k-button size="small">小型按钮</k-button>
        <k-button size="mini">超小按钮</k-button>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <k-button>默认按钮</k-button>
    <k-button size="medium">中等按钮</k-button>
    <k-button size="small">小型按钮</k-button>
    <k-button size="mini">超小按钮</k-button>
  </div>
</template>
```

:::

## 图标按钮

<div class="example">
    <div>
        <k-button icon="edit" type="primary"></k-button>
        <k-button icon="edit" icon-position="right" type="success">编辑</k-button>
        <k-button icon="edit" icon-position="left">编辑</k-button>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <k-button icon="edit" type="primary"></k-button>
    <k-button icon="edit" icon-position="right" type="success">编辑</k-button>
    <k-button icon="edit" icon-position="left">编辑</k-button>
  </div>
</template>
```

:::

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| size          | 尺寸         | string  | medium / small / mini                              | —     |
| type          | 类型         | string  | primary / success / warning / danger / info / text | —     |
| plain         | 是否朴素按钮 | boolean | —                                                  | false |
| round         | 是否圆角按钮 | boolean | —                                                  | false |
| disabled      | 是否禁用     | boolean | —                                                  | false |
| icon          | 图标类型     | string  | —                                                  | —     |
| icon-position | 图标位置     | string  | left/right                                         | left  |
