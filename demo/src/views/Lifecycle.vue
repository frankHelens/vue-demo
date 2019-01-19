<template>
  <div>
    <h1>{{message}}</h1>
    <button @click="updateEvent">更新</button>
    <button @click="destroyEvent">销毁页面</button>
  </div>
</template>

<script>
export default {
  data () {
    console.log('Hello Vue!')
    return {
      message: '生命周期'
    }
  },
  beforeCreate () {
    console.log("vue beforeCreate......")
  },
  created () {
    console.log("vue created......")
  },
  beforeMount () {
    console.log("vue beforeMount......")
  },
  mounted () {
    console.log("vue mounted......")
  },
  beforeUpdate () {
    console.log("vue beforeUpdate......")
  },
  updated () {
    console.log("vue updated......")
  },
  beforeDestroy () {
    console.log("vue beforeDestroy......")
  },
  destroyed () {
    console.log("vue destroyed......")
  },
  methods: {
    updateEvent () {
      this.message = '更新生命周期'
    },
    destroyEvent () {
      this.$router.push('/')
    }
  }
}
</script>
