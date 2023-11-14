# 图片 Image

展示图片

## 基础用法

<ClientOnly>
<div class="example">
     <k-image width="100" @load="imgLoad" @error="imgError"
                    src="https://cos.birdpaper.com/birdpaper-ui/v2/image-demo/3.JPG?imageMogr2/thumbnail/!50p"></k-image>
</div>
</ClientOnly>

::: details 显示代码

```html
<div class="example">
    <k-image width="100" @load="imgLoad" @error="imgError"
                    src="https://cos.birdpaper.com/birdpaper-ui/v2/image-demo/3.JPG?imageMogr2/thumbnail/!50p"></k-image>
</div>

<script setup lang="ts">
const imgError = () => {
    console.log('imgError');
}
const imgLoad = () => {
    console.log('imgLoad');
}
</script>
```

:::



<script setup lang="ts">
const imgError = () => {
    console.log('imgError');
}
const imgLoad = () => {
    console.log('imgLoad');
}
</script>




## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| src        | 图片资源地址         | string  |                              | —     | --
| fit         | 图片适应类型        | string |   |
| width         | 宽度 | String ||                                               | -- 
| height         | 图片高度 | String  |                                               |  

## Image 事件

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| load         | 	图片加载完成触发         | -  |                              | —     | --
| error         | 	图片加载失败触发         | -  |                              | —     | --