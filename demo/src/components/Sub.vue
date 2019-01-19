<template>
  <div class="sub">
    <p class="title">组件标题：{{title}}</p>
    <ul v-for="(item, i) in textList" :key="i">
      <li><strong>{{item.name}}：</strong>{{item.content}}</li>
    </ul>
    <button @click="detailSubEvent">查看</button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    },
    title: {
      type: String,
      default: '默认内容'
    },
    textList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  methods: {
    detailSubEvent () {
      this.$emit('detailEvent', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #0378d8;
.sub {
  .title{
    color: $main-color;
  }
  width: 500px;
  border: 1px solid #ddd;
  margin: 30px auto;
  padding: 20px;
}
</style>
