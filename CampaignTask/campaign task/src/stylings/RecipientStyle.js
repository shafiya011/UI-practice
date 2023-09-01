import { Button, Card, Progress, Rate, Table, Tag } from "antd";
import { UserOutlined, FileTextOutlined } from "@ant-design/icons";
import styled from "styled-components";
export const TableContainer = styled.div`
  margin: 50px auto;
`;
export const RecipientContainer = styled.div`
  //   padding: 0px 10px;
`;
export const ResponseInfo = styled.div`
  display: flex;
  color: var(--grey-t-25, #768595);
  font-family: "SF Pro Display";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px 0px;
`;
export const Name = styled.div`
  color: var(--blue-100, #1b63a9);
  font-family: SF Pro Display;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CampaignTable = styled(Table)`
//   margin:10px;
border-radius:none;
  }
`;
export const TableHeadings = styled.div`
  color: rgba(99, 116, 135, 1);
  font-family: "SF Pro Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // text-align: center;
`;
export const CardTitle = styled(Card)`
  //   .ant-card-type-inner .ant-card-head {
  padding: 0;
  background-color: rgba(228, 231, 234, 1);
  //   }
`;
export const LastModified = styled.p`
  color: var(--grey-s-50, #242e39);
  text-align: start;
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ActiveDate = styled.p``;
export const Recipient = styled.div`
  color: var(--grey-t-25, #768595);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 10px;
`;
export const UserSvg = styled(UserOutlined)`
  font-size: 15px;
`;
export const FileSvg = styled(FileTextOutlined)`
  font-size: 15px;
`;
export const ProgressText = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: "SF Pro Display" san-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 20px;
`;
export const StarRate = styled(Rate)`
color:rgba(27, 99, 169, 1);
display: inline-flex;
  align-items: center;
  /* gap: 10px; */
  font-size: 17px;
  text-align: center;
  margin: auto;
  padding: auto;
}`;
export const Statustag = styled(Tag)`
  display: inline-flex;
  padding: 4px 11px;
  align-items: center;
  gap: 10px;
  font-family: "SF Pro Display", san-serif;
  font-size: 13px;
`;
export const Progress_Bar = styled(Progress)`
  width: 120px;
  height: 6px;
`;
