import styled from 'styled-components'
import bgImg from '@/assets/images/login_bg.svg'

export const LoginWrapper = styled.div`
  background-color: #eeeeee !important;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-width: 550px;
  min-height: 500px;
  background-image: url(${bgImg});
  background-position: 50%;
  background-size: cover;
  .login-box {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 96%;
    height: 94%;
    padding: 0 4% 0 20px;
    overflow: hidden;
    border-radius: 10px;
    background-color: hsla(0, 0%, 100%, 0.8) !important;
    .login-left {
      width: 750px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login-form {
      padding: 40px 45px 25px;
      border-radius: 10px;
      background-color: transparent;
      box-shadow: 2px 3px 7px #0003;
      margin-bottom: 40px;
      .login-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
        .login-icon {
          width: 70px;
        }
        .logo-text {
          padding-left: 25px;
          font-size: 48px;
          font-weight: bold;
          white-space: nowrap;
        }
      }
      .ant-form-item {
        height: 75px;
        margin-bottom: 0;
        .ant-input-prefix {
          margin-right: 10px;
        }
        .ant-input-affix-wrapper-lg {
          padding: 8.3px 11px;
        }
        .ant-input-affix-wrapper,
        .ant-input-lg {
          font-size: 14px;
        }
        .ant-input-affix-wrapper {
          color: #bfbfbf;
        }
      }
      .login-btn {
        width: 100%;
        margin-top: 10px;
        white-space: nowrap;
        .ant-form-item-control-input-content {
          .ant-btn {
            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`
