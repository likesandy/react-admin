import Shepherd from 'shepherd.js'
import 'shepherd.js/dist/css/shepherd.css'

const tour = new Shepherd.Tour({
  useModalOverlay: true,
  keyboardNavigation: true,
  defaultStepOptions: {
    classes: 'basic-tour',
  },
})

export const buttons = [
  {
    secondary: true,
    text: '关闭',
    action: tour.cancel,
  },
  {
    text: '上一步',
    action: tour.back,
  },
  {
    text: '下一步',
    action: tour.next,
  },
]

const setps = [
  {
    title: '引导页按钮',
    text: '下面分别是关闭 && 上一步 && 下一步按钮',
    attachTo: {
      element: '#antd-button',
      on: 'bottom',
    },
    buttons,
  },
  {
    title: '折叠菜单',
    text: '这里是折叠菜单按钮，可以通过点击右侧的🥼里界面设置选择折叠菜单选项进行调整',
    attachTo: {
      element: '#isCollapse',
      on: 'right',
    },
    classes: 'example-collapse',
    buttons,
  },
  {
    title: '面包屑导航',
    text: '这里是面包屑导航，可以通过点击右侧的🥼里界面设置选择面包屑导航选项进行调整',
    attachTo: {
      element: '#breadcrumb',
      on: 'bottom',
    },
    buttons,
  },

  {
    title: '布局设置',
    text: '这里是布局设置，可以在这里对全局主题或者界面进行设置',
    attachTo: {
      element: '#theme',
      on: 'bottom',
    },
    buttons,
  },
  {
    title: '全屏设置',
    text: '这里是全屏设置，可以在进行全屏模式和普通模式的切换',
    attachTo: {
      element: '#full-screen',
      on: 'bottom',
    },
    buttons: [
      {
        text: '上一步',
        action: tour.back,
      },
      {
        secondary: true,
        text: '结束',
        action: tour.next,
      },
    ],
  },
]

tour.addSteps(setps)

export default tour
