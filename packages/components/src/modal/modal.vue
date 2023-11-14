<template>
    <teleport to="body">
    <div :class="`${name}-container`" v-show="visible">
      <Transition name="fade-modal-mask">
        <div :class="`${name}-mask`" v-show="visible"></div>
      </Transition>
  
      <Transition name="modal-fade">
        <div :class="`${name}-wrapper`" v-show="visible">
          <div :class="`${name}`" :style="`width:${width};top:${top}`">
            <div :class="`${name}-header`">
              <p :class="`${name}-header-title`">{{ title }}</p>
              <i :class="`${name}-header-close`" class="ri-close-line" @click="handleCancle"></i>
            </div>
            <div :class="`${name}-body`">
              <slot></slot>
            </div>
           
            <slot name="footer">
                <div :class="`${name}-footer`">
                <k-button @click="handleCancle">取消</k-button>
                <k-button @click="handleOk" type="primary" status="primary">确认</k-button>
            </div>
            </slot>

          </div>
        </div>
      </Transition>
    </div>
    </teleport>
  </template>

  <script setup lang="ts" name="k-modal">
import './style/index.less'

  import { useSlots } from "vue";
  
  const props = defineProps({
    visible: { type: Boolean, default: false },
    title: { type: String, default: "标题" },
    width: { type: String, default: "600px" },
    top: { type: String, default: "20vh" },
  });
  const emits = defineEmits<{
    ok: [];
    cancle: [];
    "update:visible": [visible: boolean];
  }>();
  
  const name = "k-modal";
  const slots = useSlots();
  
  const handleCancle = () => {
    emits("cancle");
    emits("update:visible", false);
  };
  
  const handleOk = () => {
    emits("ok");
    emits("update:visible", false);
  };
  </script>
  
  <script lang="ts">
export default {
    name: 'k-modal'
};
</script>
  <style>

</style>

