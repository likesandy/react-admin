import styled from 'styled-components'

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .ant-menu-root {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  /* 去除菜单 Loading 遮罩层 */
  .ant-spin-nested-loading,
  .ant-spin-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    .ant-spin {
      max-height: 100% !important;
    }
    .ant-spin-container::after {
      background: transparent !important;
    }
    .ant-spin-blur {
      overflow: auto !important;
      clear: none !important;
      opacity: 1 !important;
    }
  }
`
