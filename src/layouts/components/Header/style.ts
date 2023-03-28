import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  .ant-layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    background-color: #ffffff !important;
    height: 55px;
    padding: 0 20px;
  }
  .header-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .collapsed {
      margin-right: 15px;
      font-size: 18px;
      cursor: pointer;
      transition: color 0.3s;
    }
    .ant-breadcrumb a:hover {
      color: rgba(0, 0, 0, 0.85);
      background-color: #ffffff;
    }
    .ant-breadcrumb li:last-child {
      color: rgba(0, 0, 0, 0.85);
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .icon-style {
      margin-right: 22px;
      font-size: 19px;
      line-height: 19px;
      cursor: pointer;
    }
  }
`
