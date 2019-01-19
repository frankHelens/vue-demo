<template>
  <div>
    <div class="tab-title">
      <button
        v-for="(tab, i) in tabList"
        :key="i"
        :class="{'active': active === tab.title}"
        @click="changeTab(tab.title)">
        {{tab.title}}
      </button>
    </div>
    <ul>
      <li
        class="tab"
        v-for="(tab, i) in tabList"
        :key="i"
        v-show="active === tab.title">
        {{tab.content}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      tabList: [{
        title: 0,
        content: 'content0'
      }, {
        title: 1,
        content: 'content1'
      }, {
        title: 2,
        content: 'content2'
      }, {
        title: 3,
        content: 'content3'
      }]
    }
  },
  methods: {
    changeTab (title) {
      this.active = title
    }
  }
}
</script>

<style lang="scss" scoped>
  button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &.active{
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
  }
  ul, li {
    list-style: none;
    padding-inline-start: 0;
    margin: 0;
  }
  .tab-title {
    margin: auto;
    text-align: center;
  }
  .tab{
    width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 10px auto;
    text-align: center;
    border: 1px solid #ddd;
  }
</style>
