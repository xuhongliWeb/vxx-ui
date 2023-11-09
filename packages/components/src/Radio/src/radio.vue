<template>
    <label :class="[name, disabled ? `${name}-disabled` : '']" @click="handleInput">
      <input type="radio" :class="`${name}-inner`" />
  
      <span v-if="type === 'radio'" :class="[`${name}-radio`, isCheck ? `${name}-check` : '']"></span>
  
      <span :class="[`${name}-label`, isCheck ? `${name}-check-label` : '']">
        <slot></slot>
      </span>
    </label>
  </template>
  
  <script lang="ts">
  import { PropType, defineComponent } from "vue";
  import { computed } from "vue";
  import { RadioType } from "./type";
  import './style/index.less';
  export default defineComponent({
    name: "k-radio",
    props: {
      /** 单选框绑定值 */
      modelValue: { type: [String, Number, Boolean], default: false },
      /** 选项的值 */
      value: { type: [String, Number, Boolean], default: false },
      /** 是否禁用 */
      disabled: { type: Boolean, default: false },
      /** 单选框类型 */
      type: { type: String as PropType<RadioType>, default: "radio" },
    },
    emits: ["update:modelValue", "change"],
    setup(props, { emit }) {
      const name = "k-radio";
  
      const handleInput = () => {
        console.log("props.modelValue",props.modelValue)
        console.log("props.value",props.value)
        if (props.disabled) return;
  
        if (props.modelValue !== props.value) {
          emit("update:modelValue", props.value);
          emit("change", props.value);
        }
      };
  
      const isCheck = computed(() => props.modelValue === props.value);
  
      return {
        name,
        handleInput,
        isCheck,
      };
    },
  });
  </script>
  