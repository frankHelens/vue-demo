<template>
  <div>
    <Sub
      v-for="(sub, index) in subList"
      :key="index"
      :id="sub.id"
      :title="sub.title"
      :textList="sub.textList"
      @detailEvent="detailEvent"/>
  </div>
</template>

<script>
import Sub from '@/components/Sub'

export default {
  name: 'home',
  components: {
    Sub
  },
  data () {
    return {
      subList: [{
        id: 0,
        title: '组件名称1',
        textList: [{
          name: '内容标题1',
          content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1'
        }]
      }, {
        id: 1,
        title: '组件名称2',
        textList: [{
          name: '内容标题2',
          content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2'
        }]
      }, {
        id: 2,
        title: '组件名称3',
        textList: [{
          name: '内容标题3',
          content: '内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3'
        }]
      }]
    }
  },
  methods: {
    detailEvent (id) {
      alert(id)
    }
  }
}
</script>
