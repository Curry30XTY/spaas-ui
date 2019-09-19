<template>
  <el-tabs class="el-tabs-dotted" :tab-position="tabPosition">
    <slot></slot>
  </el-tabs>
</template>

<script>
import ElTabs from 'element-ui/packages/tabs';
export default {
  name: 'ElTabsDotted',
  props: {
    tabPosition: {
      type: String,
      default: 'top'
    }
  },
  components: {
    ElTabs
  }
};
</script>
