import { Button } from "antd";
import React from "react";
import { styled } from "styled-components";
export const Navbar = styled.nav`
  width: 100vw;
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(228, 231, 234);
  position: sticky;
  z-index: 50;
  padding: 10px;
`;
export const NavTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const LeftHead = styled.div`
  display: flex;
  align-items: center;
`;
export const Heading = styled.div`
  margin-left: 14px;
  padding-bottom: 5px;
  width: 100%;
`;
export const OrgName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: rgba(65, 83, 103, 1);
  margin-bottom: 0px;
  // color: var(--grey-s-10, #415367);
  font-family: "SF Pro Display";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;
export const MenuFold = styled.div`
  font-size: 23px;
  text-align: center;
  padding: 5px;
`;
export const Letter = styled.div`
  border-radius: 50%;
`;

export const NameCard = styled.div`
  color: rgb(255, 255, 255);
  background-color: rgb(52, 73, 94);
  border-radius: 50%;
  font-size: 19px;
  width: 36px;
  height: 35px;
  text-align: center;
  padding-top: 5px;
  margin: 0px 7px;
`;
export const HeaderName = styled.label`
  color: var(--grey-100, #485c72);
  text-align: right;
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
`;
export const Post = styled.label`
  color: var(--grey-t-50, #a3adb8);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
  text-transform: capitalize;
`;
export const PageTitle = styled.div`
  color: var(--grey-s-10, #415367);
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;
export const GuideBtn = styled(Button)`
  margin: 0px 15px;
  outline: none;
  background-color: rgba(240, 242, 244, 1);
  padding: 6px;
  // fill: var(--grey-t-92, #f0f2f4);
`;
