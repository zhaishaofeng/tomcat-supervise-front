<template>
    <a-table class="table-contanier" :columns="columns" :dataSource="data">
        <a slot="name" slot-scope="text">{{text}}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
        <a-tag
            v-for="tag in tags"
            :color="tag==='loser' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
            :key="tag"
        >
            {{tag.toUpperCase()}}
        </a-tag>
        </span>
        <span slot="action">
        <a>修改</a>
        <a-divider type="vertical" />
        <a>删除</a>
        </span>
    </a-table>
</template>
<script>
  const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      slots: { title: 'customTitle' },
      scopedSlots: { customRender: 'name' },
    },
    {
      title: '编码',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '项目',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '访问地址',
      dataIndex: 'faddress',
      key: 'faddress',
    },
    {
      title: '状态',
      key: 'tags',
      dataIndex: 'tags',
      scopedSlots: { customRender: 'tags' },
    },
    {
      title: '操作',
      key: 'action',
      scopedSlots: { customRender: 'action' },
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      faddress: 'http://localhost:8080',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      faddress: 'http://localhost:8080',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      faddress: 'http://localhost:8080',
      tags: ['cool', 'teacher'],
    },
  ];

  export default {
    data() {
      return {
        data,
        columns,
      };
    },
  };
</script>
<style>
    .table-contanier {
        background: white;
    }
    .ant-table-pagination.ant-pagination {
        margin: 16px 16px;
    }
</style>