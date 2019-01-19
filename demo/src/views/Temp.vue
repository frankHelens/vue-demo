<template>
  <div>
    <p>{{message}}</p>
    <p>{{100 + 200}}</p>
    <p>{{ok ? 'YES' : 'NO' }}</p>
    <div>{{domData}}</div>
    <div v-html="domData"></div>
    <p>{{cusData | setCurData}}</p>
  </div>
</template>

<script>
export default {
  filters: {
    setCurData (val) {
      return val + '66666'
    }
  },
  data () {
    return {
      message: '内容内容内容内容内容内容内容内容',
      ok: true,
      domData: '<div class="red">渲染dom</div>',
      cusData: '自定义模板'
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>
