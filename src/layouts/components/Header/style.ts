import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  .ant-layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    background-color: #ffffff !important;
    height: 55px;
    padding: 0 40px 0 20px;
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
    .ant-breadcrumb {
      font-size: 15px;
      & a:hover {
        background-color: #ffffff;
      }
      & li:last-child {
        color: #000000d8;
        font-weight: 700;
      }
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
    .username {
      margin-right: 15px;
      font-size: 15px;
    }
  }
`
