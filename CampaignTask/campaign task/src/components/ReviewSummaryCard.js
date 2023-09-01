import React from "react";
import {
  CardContainer,
  Scores,
  Description,
  Scard,
  ActivityFeed,
} from "../stylings/SummaryCard";
import { Button, Card, Divider } from "antd";
import FeedSvg from "../svg/activityFeed";

const SummaryCard = () => {
  return (
    <CardContainer>
      <Scard>
        <Scores>19,090</Scores>
        <Description>Total reviews</Description>
      </Scard>

      <Scard>
        <Scores>4.8</Scores>
        <Description>Average Score</Description>
      </Scard>

      <Scard>
        <Scores>17,400</Scores>
        <Description>Total Replied reviews</Description>
      </Scard>

      <Scard>
        <Scores>15,080</Scores>
        <Description>5-star Reviews</Description>
      </Scard>

      <Scard>
        <ActivityFeed>
          {" "}
          <FeedSvg></FeedSvg>Activity Feed
        </ActivityFeed>
      </Scard>
    </CardContainer>
  );
};

export default SummaryCard;
