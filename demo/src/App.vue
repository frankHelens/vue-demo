<template>
  <div id="app">
    <div class="container">
      <div class="nav">
         <h2
            v-for="(item, i) in demoList"
            :key="i">
            <router-link :to="item.path">{{item.label}}</router-link>
          </h2>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demoList: [{
        label: 'helloworld',
        path: '/helloworld'
      }, {
        label: '模板语法',
        path: '/temp'
      }, {
        label: 'Class和Style的绑定',
        path: '/classAndStyle'
      }, {
        label: '条件渲染',
        path: '/condition'
      }, {
        label: '列表渲染',
        path: '/list'
      }, {
        label: '事件处理',
        path: '/event'
      }, {
        label: '实现简单的tab切换',
        path: '/tab'
      }, {
        label: '生命周期',
        path: '/lifecycle'
      }, {
        label: '组件化',
        path: '/home'
      }]
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
  display: flex;
}
.nav {
  width: 230px;
  padding: 30px;
  background: #e5e9f2;
  margin-right: 20px;
  a {
    color: #303133;
    text-decoration: none;
    &:hover {
      color: #0378d8;
    }
  }
}
.main {
  background: #F2F6FC;
  overflow: hidden;
  flex: 1;
  padding: 20px;
}
</style>
