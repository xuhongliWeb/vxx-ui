<template>
    <div :class="cls" @click="handleClick">
      <input type="checkbox" :class="`${name}-inner`" />
  
      <span :class="[`${name}-checkbox`, isCheck ? `${name}-check` : '']">
        <i v-if="isCheck" class="ri-check-line"></i>
      </span>
      <span :class="`${name}-label`">
        <slot></slot>
      </span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { computed } from "vue";
import './style/index.less'
  
  export default defineComponent({
    name: "k-checkbox",
    props: {
      /** 绑定值 Binding value */
      modelValue: { type: Boolean, default: false },
      /** 是否禁用 Disabled or not */
      disabled: { type: Boolean, default: false },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
      const name = "k-checkbox";
      const cls = computed(() => {
        let clsName = [name];
        if (props.disabled) {
          clsName.push(`${name}-disabled`);
        }
        return clsName;
      });
  
      const isCheck = computed(() => props.modelValue);
  
      const handleClick = () => {
        if (props.disabled) {
            return false
        }
        emit("update:modelValue", !props.modelValue);
      };
      return {
        cls,
        name,
        isCheck,
        handleClick,
      };
    },
  });
  </script>
  