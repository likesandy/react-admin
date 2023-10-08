import { MockMethod } from 'vite-plugin-mock'
// ! sb插件，必须配置icon，搞了半天才发现问题

export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => ({
      code: 200,
      message: '成功!',
      type: 'succeed',
      data: {
        token: 'ilun',
      },
    }),
  },
  {
    url: '/api/menu/list',
    method: 'get',
    response: () => ({
      code: 200,
      data: [
        {
          icon: 'HomeOutlined',
          title: '首页',
          path: '/home/index',
        },
        {
          icon: 'FileDoneOutlined',
          title: '文章',
          path: '/article',
          children: [
            {
              icon: 'FileTextOutlined',
              path: '/article/ranking',
              title: '文章排名',
            },
            {
              icon: 'FileAddOutlined',
              path: '/article/create',
              title: '创建文章',
            },
          ],
        },
        {
          icon: 'UnlockOutlined',
          title: '权限管理',
          path: '/auth',
          children: [
            {
              icon: 'MenuOutlined',
              path: '/auth/menu',
              title: '菜单权限',
            },
            {
              icon: 'MenuOutlined',
              path: '/auth/button',
              title: '按钮权限',
            },
          ],
        },
        {
          icon: 'FundOutlined',
          title: 'Dashboard',
          path: '/dashboard',
          children: [
            {
              icon: 'AppstoreOutlined',
              path: '/dashboard/dataVisualize',
              title: '数据可视化',
            },
            {
              icon: 'AppstoreOutlined',
              path: '/dashboard/embedded',
              title: 'bing',
            },
          ],
        },
        {
          icon: 'AppstoreOutlined',
          title: '常用组件',
          path: '/commonly',
          children: [
            {
              icon: 'UploadOutlined',
              path: '/commonly/upload',
              title: '上传',
            },
            {
              icon: 'SendOutlined',
              path: '/commonly/guide',
              title: '引导',
            },
            {
              icon: 'TranslationOutlined',
              path: '/commonly/internationalization',
              title: '国际化',
            },
          ],
        },
        {
          icon: 'PieChartOutlined',
          title: 'Echarts',
          path: '/echarts',
          children: [
            {
              icon: 'AppstoreOutlined',
              path: '/echarts/waterChart',
              title: '水型图',
            },
            {
              icon: 'AppstoreOutlined',
              path: '/echarts/columnChart',
              title: '柱状图',
            },
            {
              icon: 'AppstoreOutlined',
              path: '/echarts/lineChart',
              title: '折线图',
            },
            {
              icon: 'AppstoreOutlined',
              path: '/echarts/pieChart',
              title: '饼图',
            },
            {
              icon: 'AppstoreOutlined',
              path: '/echarts/radarChart',
              title: '雷达图',
            },
            {
              icon: 'AppstoreOutlined',
              path: '/echarts/nestedChart',
              title: '嵌套环形图',
            },
          ],
        },
        {
          icon: 'ExclamationCircleOutlined',
          title: '错误页面',
          path: '/error',
          children: [
            {
              icon: 'AppstoreOutlined',
              path: '/404',
              title: '404页面',
            },
            {
              icon: 'AppstoreOutlined',
              path: '/403',
              title: '403页面',
            },
            {
              icon: 'AppstoreOutlined',
              path: '/500',
              title: '500页面',
            },
          ],
        },
        {
          icon: 'PaperClipOutlined',
          title: '外部链接',
          path: '/link',
          children: [
            {
              icon: 'AppstoreOutlined',
              path: '/link/github',
              title: 'github',
              isLink: 'https://github.com/likesandy',
            },
            {
              icon: 'AppstoreOutlined',
              path: '/link/blog',
              title: 'blog',
              isLink: 'https://codertao.icu',
            },
          ],
        },
      ],
      msg: '成功',
    }),
  },
] as MockMethod[]
