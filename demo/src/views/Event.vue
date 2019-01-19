<template>
  <div>
    <button @click="num++">+</button>
    <button @click="setNum">-</button>
    <h1>{{num}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    setNum () {
      this.num--
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
}
</style>
