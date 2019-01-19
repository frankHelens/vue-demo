<template>
  <div>
    <!-- v-if -->
    <p v-if="name === 'frank'">frank</p>
    <p v-else>other</p>
    <!-- v-show -->
    <p v-show="isFrank">{{name}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'frank',
      isFrank: false
    }
  }
}
</script>

<style>

</style>
