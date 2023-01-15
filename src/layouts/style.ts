import styled from 'styled-components'

export const LayoutsWrapper = styled.div`
  display: flex;
  min-width: 950px;
  height: 100%;
  .ant-layout-sider {
    box-sizing: border-box;
  }
  .ant-layout {
    background-color: #f0f2f5 !important;
    /* 防止 tabs 超出不收缩 */
    overflow-x: hidden;
    .ant-layout-content {
      box-sizing: border-box;
      flex: 1;
      padding: 20px;
      overflow-x: hidden;
    }
  }
`
