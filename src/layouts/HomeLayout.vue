<template>
  <a-layout id="components-layout-demo-responsive">
    <!-- 菜单 -->
    <side-menu />
    <a-layout>
      <!-- 页头 -->
      <global-header />
      <!-- 内容 -->
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <!-- <basic-setting /> -->
        <router-view/>
      </a-layout-content>
      <!-- 页脚 -->
      <global-footer />
    </a-layout>
  </a-layout>
</template>
<script>
  import SideMenu from '@/components/Menu/SideMenu'
  import GlobalHeader from '@/components/GlobalHeader/GlobalHeader'
  import GlobalFooter from '@/components/GlobalFooter/GlobalFooter'
  export default {
    name: 'HomeLayout',
    components: {
      SideMenu,
      GlobalHeader,
      GlobalFooter,
    },
  };
</script>

<style>
  #components-layout-demo-responsive {
    min-height: 100%;
  }
  #components-layout-demo-responsive .ant-layout-content {
      min-height: 80%;
  }
  .ant-layout-header, .ant-layout-footer {
    background: none !important;
    color:darkgrey;
  }
  .base-card {
    opacity: 0.9;
    filter: alpha(opacity=90);
  }
  .center {
    text-align: center;
  }
  .ant-layout {
    background: url(~@/assets/bg-img/bg1.jpg)
  }
  .gray-level-2 {
    color:darkgrey;
  }
</style>
