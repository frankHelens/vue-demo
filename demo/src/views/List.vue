<template>
  <div>
    <!-- 数组渲染 -->
    <ul>
      <li v-for="i in 10" :key="i">{{i}}</li>
    </ul>
    <ul>
      <li
        v-for="(item, i) in list"
        :key="i">
      {{i}} - <strong>{{item.name}}：</strong>{{item.value}}
      </li>
    </ul>

    <!-- 对象遍历 -->
    <ul>
      <li
        v-for="(value, key, i) in obj"
        :key="i">
      {{i}} - <strong>{{key}}：</strong>{{value}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        name: '姓名',
        value: 'frank'
      }, {
        name: '性别',
        value: '男'
      }, {
        name: '年龄',
        value: 18
      }],
      obj: {
        name: 'frank',
        sex: '男',
        age: 18
      }
    }
  }
}
</script>

<style>

</style>
