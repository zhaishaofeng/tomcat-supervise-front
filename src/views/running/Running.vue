<template>
    <div class="running-card">
        <a-card class="base-card" hoverable style="width: 260px">
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                slot="cover"
            />
            <template class="ant-card-actions" slot="actions">
                <a-icon type="caret-right" key="caret-right" />
                <a-icon type="bug" key="bug" />
                <a-icon type="stop" key="stop" />
                <a-icon type="exception" key="exception" />
            </template>
            <a-card-meta title="Tomcat 8.5" description="这是项目使用的Tomcat">
                <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
            </a-card-meta>
        </a-card>
    </div>
</template>
<script>
  
</script>
<style>
  .running-card {
    height: 100%;
    margin-right: 50px;
    padding: 38px;
    background: rgba(169,169,169,0.3) !important;
  }
</style>