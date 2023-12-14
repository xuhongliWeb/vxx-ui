<template>
    <div :class="name">
      <slot></slot>
  
      <div :class="`${name}-mask`" v-if="slots.default && loading">
        <div :class="`${name}-loading`">
        <k-icon name="close"   class="bp-icon-loading ri-loader-4-line"></k-icon>
          <p :class="`${name}-tip`">{{ tip }}</p>
        </div>
      </div>
  
      <div v-else-if="loading" :class="`${name}-loading`">
        <!-- <i class="bp-icon-loading ri-loader-4-line"></i> -->
        <k-icon name="close"   class="bp-icon-loading ri-loader-4-line"></k-icon>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
import './style/index.less'
  
  export default defineComponent({
    name: "k-spin",
    props: {
      loading: { type: Boolean, default: false },
      tip: { type: String, default: "" },
    },
    setup(props, { slots }) {
      const name = "k-spin";
      return {
        name,
        slots,
      };
    },
  });
  </script>
  