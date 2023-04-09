import styled from 'styled-components'

export const LayoutTabsWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e7ed;
  background-color: #ffffff !important;
  border-color: #e4e7ed !important;
  .ant-tabs {
    padding: 0 90px 0 13px;
    .ant-tabs-nav {
      margin: 0;
      &::before {
        border: none;
      }
      .ant-tabs-ink-bar {
        visibility: visible;
      }
      .ant-tabs-tab-with-remove.ant-tabs-tab-active {
        .ant-tabs-tab-remove {
          top: 1px;
          margin: 7px;
          /* color: @primary-color !important; */
          opacity: 1 !important;
        }
        .ant-tabs-tab-btn {
          transform: translateX(-9px);
        }
      }
      .ant-tabs-tab {
        padding: 8px 22px;
        color: #cccccc;
        background: none;
        border: none;
        transition: none;
        .anticon-home {
          margin-right: 7px;
        }
        .ant-tabs-tab-remove {
          position: absolute;
          right: 0;
          color: #cccccc;
          opacity: 0;
          transition: 0.1s ease-in-out;
          &:hover {
            /* color: @primary-color; */
          }
        }
      }
      .ant-tabs-tab.ant-tabs-tab-with-remove {
        &:hover {
          .ant-tabs-tab-remove {
            top: 1px;
            margin: 7px;
            opacity: 1;
            transition: 0.1s ease-in-out;
          }
          .ant-tabs-tab-btn {
            transform: translateX(-9px);
          }
        }
      }
    }
  }
  .right-button {
    margin-right: 15px;
  }
  .more-button {
    position: absolute;
    top: 8px;
    right: 13px;
    padding-left: 10px;
    font-size: 12px;
  }

  /* tabs 超出显示的样式 */
  .ant-tabs-dropdown {
    .ant-tabs-dropdown-menu-item {
      .anticon-home {
        margin-right: 7px;
      }
    }
  }

  /* tabs 不受全局组件大小影响 */
  .ant-tabs-small > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-large > .ant-tabs-nav .ant-tabs-tab {
    padding: 8px 22px !important;
    font-size: 14px !important;
  }
`
