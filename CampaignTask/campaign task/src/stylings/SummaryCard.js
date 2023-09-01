import styled from "styled-components";
import { Button } from "antd";
export const CardContainer = styled.div`
  box-sizing: border-box;
  margin-top: 50px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  text-align: start;
  width: 100%;
  background: rgb(255, 255, 255);
  box-shadow: rgba(99, 116, 135, 0.1) 0px 5px 10px;
  border-radius: 3px;
  flex-direction: row;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
`;
export const Scores = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: rgb(36, 46, 57);
`;
export const Description = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.015em;
  color: rgb(99, 116, 135);
`;
export const Scard = styled.div`
  padding: 15px;
  margin: 15px;
  width: 25%;
`;
export const ActivityFeed = styled(Button)`
  background-color: rgba(228, 231, 234, 1);
`;
