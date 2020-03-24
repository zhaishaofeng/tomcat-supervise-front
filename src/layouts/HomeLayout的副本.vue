<template>
  <a-layout id="components-layout-demo-responsive">
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
          <a-menu-item class="center gray-level-2">设置</a-menu-item>
          <a-menu-item class="center gray-level-2">实例</a-menu-item>
          <a-menu-item class="center gray-level-2">关于</a-menu-item>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <!-- 内容 -->
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <a-tabs class="tabs-container" defaultActiveKey="1" @change="callback">
            <!-- 基础配置 -->
            <a-tab-pane tab="基础配置" key="1">
              <a-card class="base-card" hoverable style="width: 260px">
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="setting" key="setting" />
                </template>
                <a-card-meta title="Tomcat 8.5" description="这是项目使用的Tomcat">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </a-tab-pane>
            <!-- 多实例方式 -->
            <a-tab-pane tab="多实例方式" key="2" forceRender>
              <a-card class="base-card" hoverable style="width: 260px">
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  slot="cover"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="edit" key="edit" />
                </template>
                <a-card-meta title="产品 HSE模块">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                  <template slot="description">
                    http://localhost:8080
                  </template>
                </a-card-meta>
              </a-card>
            </a-tab-pane>
            <!-- 内部署方式 -->
            <a-tab-pane tab="内部署方式" key="3">
              <template>
                <a-empty><span slot="description">请收养一只猫吧 . . . </span></a-empty>
              </template>
            </a-tab-pane>
            <a-button slot="tabBarExtraContent" type="link" icon="plus">新增</a-button>
        </a-tabs>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
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
      callback(key) {
        console.log(key);
      },
    },
  };
</script>

<style>
  #components-layout-demo-responsive {
    min-height: 100%;
  }
  #components-layout-demo-responsive .logo {
    text-align: center;
  }
  #components-layout-demo-responsive .ant-layout-content {
      min-height: 80%;
  }
  .ant-layout-sider-children .ant-menu {
    background: none;
    border: none;
    margin-top: 50px;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected, .ant-menu .ant-menu-item:active {
    background-color: transparent;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    color: #BF9F65;
  }
  .ant-layout-header, .ant-layout-footer {
    background: none !important;
    color:darkgrey;
  }
  /*.ant-layout-content .div-content {
    background: rgba(169,169,169,0.3) !important;
    color: aliceblue;
  }*/
  .user-logo {
    margin: 40px;
    width: 160px;
    height: 160px;
    border-radius: 80px;
    opacity: 0.8;
    filter: alpha(opacity=80);
  }
  .base-card {
    opacity: 0.9;
    filter: alpha(opacity=90);
  }
  .ant-layout-sider {
    background: none;
  }
  .center {
    text-align: center;
  }
  .ant-layout {
    background: url(~@/assets/bg-img/bg1.jpg)
  }
 
  .gray-level-1 {
    color:antiquewhite;
  }

  .gray-level-2 {
    color:darkgrey;
  }
  .ant-divider-dashed {
    border-top: 1px dashed darkgrey;
  }
  .tabs-container {
    height: 100%;
    margin-right: 50px;
  }
  .ant-tabs-content {
    height: 100%;
  }
  .ant-tabs-content .ant-tabs-tabpane-active {
    padding: 38px;
    background: rgba(169,169,169,0.3) !important;
    color: aliceblue;
  }
  .ant-tabs-tab {
    color: rgb(155,123,44);
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: rgb(207,172,88);
  }
  .ant-tabs-ink-bar {
    background-color: rgb(207,172,88);
  }
  .ant-tabs-extra-content .ant-btn {
    color: rgb(255,184,0);
  }
</style>
