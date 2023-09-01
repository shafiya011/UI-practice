import { Divider } from "antd";
import { UserOutlined, FileTextOutlined } from "@ant-design/icons";
import {
  RecipientContainer,
  ResponseInfo,
  Name,
  Recipient,
  UserSvg,
  FileSvg,
} from "../stylings/RecipientStyle";
export const Recipient1 = () => {
  return (
    <RecipientContainer>
      <Name>Application Survey</Name>
      <ResponseInfo>
        <UserSvg />
        <Recipient>Recipient</Recipient>
        <div>
          <a href="#">100</a>{" "}
        </div>
        <Divider type="vertical" />
        <FileSvg />
        <Recipient>Responses</Recipient>
        <a href="#"> 80</a>
      </ResponseInfo>
    </RecipientContainer>
  );
};
export const Recipient2 = () => {
  return (
    <RecipientContainer>
      <Name>Employee Satisfaction Campaign</Name>
      <ResponseInfo>
        <UserSvg />
        <Recipient>Recipient</Recipient>
        <div>
          <a href="#">100</a>{" "}
        </div>
        <Divider type="vertical" />
        <FileSvg />
        <Recipient>Responses</Recipient>
        <a href="#"> 80</a>
      </ResponseInfo>
    </RecipientContainer>
  );
};
export const Recipient3 = () => {
  return (
    <RecipientContainer>
      <Name>Check In Survey</Name>
      <ResponseInfo>
        <UserSvg />
        <Recipient>Recipient</Recipient>
        <div>
          <a href="#">100</a>{" "}
        </div>
        <Divider type="vertical" />
        <FileSvg />
        <Recipient>Responses</Recipient>
        <a href="#"> 80</a>
      </ResponseInfo>
    </RecipientContainer>
  );
};
export const Recipient4 = () => {
  return (
    <RecipientContainer>
      <Name>Email Campaign</Name>
      <ResponseInfo>
        <UserSvg />
        <Recipient>Recipient</Recipient>
        <div>
          <a href="#">100</a>{" "}
        </div>
        <Divider type="vertical" />
        <FileSvg />
        <Recipient>Responses</Recipient>
        <a href="#"> 80</a>
      </ResponseInfo>
    </RecipientContainer>
  );
};
export const Recipient5 = () => {
  return (
    <RecipientContainer>
      <Name>Check In Survey</Name>
      <ResponseInfo>
        <UserSvg />
        <Recipient>Recipient</Recipient>
        <div>
          <a href="#">100</a>{" "}
        </div>
        <Divider type="vertical" />
        <FileSvg />
        <Recipient>Responses</Recipient>
        <a href="#"> 80</a>
      </ResponseInfo>
    </RecipientContainer>
  );
};
