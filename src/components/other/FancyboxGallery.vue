<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<script>
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
  },
  mounted() {
    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...this.options,
    });
  },
  updated() {
    Fancybox.unbind(this.$refs.container);
    Fancybox.close();

    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...this.options,
    });
  },
  beforeDestroy() {
    Fancybox.destroy();
  },
};
</script>

<style>
/* Thêm các kiểu CSS cần thiết ở đây */
</style>
