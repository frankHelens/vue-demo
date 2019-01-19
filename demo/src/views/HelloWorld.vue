<template>
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="value">
    <p>{{value}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Hello World!',
      value: '双向绑定'
    }
  }
}
</script>

<style scoped lang="scss">
p{
  font-size: 20px;
}
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  