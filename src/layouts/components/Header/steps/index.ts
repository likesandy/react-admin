import { TourProps } from 'antd'

export default [
  {
    title: 'Upload File',
    description: 'Put your files here.',
    target: () => '#isCollapse' as any as HTMLElement,
  },
] as TourProps['steps']
