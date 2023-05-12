import { TourProps } from 'antd'

const isCollapse = document.querySelector('#isCollapse')
const internationalization = document.querySelector('#internationalization')
const breadcrumb = document.querySelector('#breadcrumb')
const eltheme4 = document.querySelector('#theme')
const fullScreen = document.querySelector('#full-screen')
const componentSize = document.querySelector('#component-size')

const steps = [
  {
    title: '折叠菜单',
    description: '这里是折叠菜单按钮，可以通过点击右侧的🥼里界面设置选择折叠菜单选项进行调整',
    target: () => isCollapse,
  },
  {
    title: '面包屑导航',
    description: '这里是面包屑导航，可以通过点击右侧的🥼里界面设置选择面包屑导航选项进行调整',
    target: () => breadcrumb,
  },
  {
    title: '组件大小切换',
    description: '这里是组件大小切换，可以在这里对Antd组件大小进行切换',
    target: () => componentSize,
  },
  {
    title: '国际化',
    description: '这里是国际化，可以在这里对全局配置国际化文案',
    target: () => internationalization,
  },
  {
    title: '布局设置',
    description: '这里是布局设置，可以在这里对全局主题或者界面进行设置',
    target: () => eltheme4,
  },
  {
    title: '全屏设置',
    description: '这里是全屏设置，可以在进行全屏模式和普通模式的切换',
    target: () => fullScreen,
  },
] as TourProps['steps']

export default steps
