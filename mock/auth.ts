import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/auth/buttons',
    method: 'get',
    response: ({}) => {
      return {
        code: 200,
        message: '成功！',
        data: {
          authButton: ['add', 'edit', 'delete', 'import', 'export'],
          useProTable: ['add', 'batchAdd', 'export', 'batchDelete', 'status'],
        },
      }
    },
  },
] as MockMethod[]
