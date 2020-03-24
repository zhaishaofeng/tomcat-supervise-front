<template>
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
            <instances-mode-table />
        </a-tab-pane>
        <!-- 内部署方式 -->
        <a-tab-pane tab="内部署方式" key="3">
            <template>
            <a-empty><span slot="description">请收养一只猫吧 . . . </span></a-empty>
            </template>
        </a-tab-pane>
        <a-button slot="tabBarExtraContent" type="link" icon="plus">新增</a-button>
    </a-tabs>
</template>
<script>
  import InstancesModeTable from './InstancesModeTable'
  export default {
    components: {
      InstancesModeTable
    },
    data() {
      return {};
    },
    methods: {
      callback(key) {
        console.log(key);
      },
    },
  };
</script>
<style>
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