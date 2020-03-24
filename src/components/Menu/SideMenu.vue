<template>
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint" 
      :style="{ maxWidth: '20%', minWidth: '20%', width: '20%'}"
    >
      <!-- 用户logo -->
      <div class="logo">
        <img src="~@/assets/userLogo.png" alt="user-logo" class="user-logo">
      </div>
      <!-- 用户描述 -->
      <div class="center gray-level-2">
        <p>
          ㊞ 让猫换个姿势跑.🙀
        </p>
        <a-divider dashed :style="{ maxWidth: '60%', minWidth: '60%', width: '60%', margin: 'auto'}" />
      </div>
      <!-- 菜单 -->
      <div>
        <a-menu>
          <a-menu-item><router-link class="center" to="/setting">设置</router-link></a-menu-item>
          <a-menu-item><router-link class="center" to="/running">实例</router-link></a-menu-item>
          <a-menu-item><router-link class="center" to="/about">关于</router-link></a-menu-item>
        </a-menu>
      </div>
    </a-layout-sider>
</template>
<script>
export default {
    methods: {
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      onBreakpoint(broken) {
        console.log(broken);
      },
    },
  };
</script>
<style>
  .logo {
    text-align: center;
  }
  .ant-layout-sider-children .ant-menu {
    background: none;
    border: none;
    margin-top: 50px;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected, .ant-menu .ant-menu-item:active {
    background-color: transparent;
  }
  .ant-menu-item .router-link-active {
    color: #BF9F65;
  }
  .user-logo {
    margin: 40px;
    width: 160px;
    height: 160px;
    border-radius: 80px;
    opacity: 0.8;
    filter: alpha(opacity=80);
  }
  .ant-layout-sider {
    background: none;
  }
  .ant-divider-dashed {
    border-top: 1px dashed darkgrey;
  }
  .ant-menu-item > a {
      color:darkgrey;
  }
</style>