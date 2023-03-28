import { MockMethod } from 'vite-plugin-mock'
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
          icon: 'EditOutlined',
          title: '编辑器',
          path: '/editor',
          children: [
            {
              icon: 'FileMarkdownOutlined',
              path: '/editor/markdown',
              title: 'markdown',
            },
            {
              icon: 'FileOutlined',
              path: '/editor/tinymce',
              title: '富文本编辑器',
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
          ],
        },
      ],
      msg: '成功',
    }),
  },
] as MockMethod[]
