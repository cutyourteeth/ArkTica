import { Modal } from "antd";
import styled from "styled-components";

export const PreviewWrapper = styled(Modal)`
display: flex;
justify-content: center;
top: 40px !important;

/* hack */
&& {
  .ant-modal-content {
    background: #f5f5f5;
  }
  .ant-modal-body {
    padding: 12px;
  }
  .ant-modal-close-x {
    line-height: 30px;
    width: 37px;
  }
}

.operation-bar {
  width: 100%;
  height: 50px;
  display: flex;
  line-height: 50px;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;
  .operator {
    color: #9d9d96;
    font-size: 26px;
    cursor: pointer;
    margin-left: 30px;
    background: none;
    border: none;
    outline: none;
    :hover {
      color: rgba(0, 120, 215, 0.8);
    }
    &:first-child {
      margin: 0;
    }
  }
}
`