<template>
  <div>
    <!-- class -->
    <div class="box"></div>
    <div :class="box"></div>
    <div :class="['box', 'blue-box']"></div>
    <div :class="['box', {'blue-box': isBlue}]"></div>
    <p :class="isBlue ? 'blue-box': 'red-box'"></p>
    <!-- style -->
    <div :style="boxStyle"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      box: 'box',
      isBlue: true,
      boxStyle: {
        width: '100px',
        height: '100px',
        background: 'green',
        marginLeft: '100px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.box {
  width: 100px;
  height: 100px;
  margin: 20px 100px;
  background: red;
}
p {
  @extend .box;
}
.red-box {
  background: red;
}
.blue-box {
  background: blue;
}
</style>
