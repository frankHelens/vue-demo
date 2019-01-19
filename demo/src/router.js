import Vue from 'vue'
import Router from 'vue-router'
import Demo from './views/Demo'
import HelloWorld from './views/HelloWorld'
import Temp from './views/Temp'
import ClassAndStyle from './views/ClassAndStyle'
import Condition from './views/Condition'
import List from './views/List'
import Event from './views/Event'
import Lifecycle from './views/Lifecycle'
import Tab from './views/Tab'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/temp',
      name: 'temp',
      component: Temp
    },
    {
      path: '/classAndStyle',
      name: 'ClassAndStyle',
      component: ClassAndStyle
    },
    {
      path: '/condition',
      name: 'Condition',
      component: Condition
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/lifecycle',
      name: 'Lifecycle',
      component: Lifecycle
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
