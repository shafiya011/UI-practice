import React from "react";
import { Table, Space, Tag, Card, Progress, Rate, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import {
  Recipient1,
  Recipient2,
  Recipient3,
  Recipient4,
  Recipient5,
} from "./tableRecipient";
import {
  CampaignTable,
  TableHeadings,
  CardTitle,
  LastModified,
  ActiveDate,
  StarRate,
  Statustag,
  TableContainer,
} from "../stylings/RecipientStyle";
import Sorting from "../svg/sorting.svg";
import ProgressBar from "./progressBar";
import ActionMenu from "../svg/actionMenu";
import Ratings from "../svg/ratings";

const campTable = () => {
  const columns = [
    {
      title: (
        <TableHeadings>
          Name <img src={Sorting} alt="sorting" />
        </TableHeadings>
      ),
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: <TableHeadings>CompletionRate</TableHeadings>,
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: <TableHeadings>Average Score</TableHeadings>,
      dataIndex: "Average",
      key: "Average",
    },
    {
      title: <TableHeadings>Status</TableHeadings>,
      key: "statustag",
      dataIndex: "statustag",
    },
    {
      title: (
        <TableHeadings>
          Last Modified <img src={Sorting} alt="sorting" />
        </TableHeadings>
      ),
      dataIndex: "lastdate",
      key: "lastdate",
    },
    {
      title: (
        <TableHeadings>
          Last Activated <img src={Sorting} alt="sorting" />
        </TableHeadings>
      ),
      dataIndex: "activedate",
      key: "activedate",
    },

    {
      title: <TableHeadings>Action</TableHeadings>,
      dataIndex: "actionmenu",
      key: "actionmenu",
    },
  ];
  const data = [
    {
      key: "1",
      name: <Recipient1 />,
      rate: <ProgressBar percent={30} />,
      Average: <Ratings></Ratings>,

      statustag: (
        <Statustag className="activeTage" color="green">
          Active
        </Statustag>
      ),
      lastdate: <LastModified>Sep 20, 2021</LastModified>,
      activedate: <LastModified>Sep 20, 2021</LastModified>,
      actionmenu: <ActionMenu />,
    },
    {
      key: "2",
      name: <Recipient2 />,
      rate: <ProgressBar percent={90.7} strokeColor="red" />,
      Average: <Ratings />,
      statustag: (
        <Statustag className="activeTage" color="processing">
          Draft
        </Statustag>
      ),
      lastdate: <LastModified>Sep 20, 2021</LastModified>,
      activedate: <LastModified>Sep 20, 2021</LastModified>,
      actionmenu: <ActionMenu />,
    },
    {
      key: "3",
      name: <Recipient3 />,
      rate: <ProgressBar percent={70} />,
      Average: <Ratings />,
      statustag: (
        <Statustag className="activeTage" color="green">
          Active
        </Statustag>
      ),
      lastdate: <LastModified>Sep 20, 2021</LastModified>,
      activedate: <LastModified>Sep 20, 2021</LastModified>,
      actionmenu: <ActionMenu />,
    },
    {
      key: "4",
      name: <Recipient4 />,
      rate: <ProgressBar percent={80} />,
      Average: <Ratings />,
      statustag: (
        <Statustag className="activeTage" color="green">
          Active
        </Statustag>
      ),
      lastdate: <LastModified>Sep 20, 2021</LastModified>,
      activedate: <LastModified>Sep 20, 2021</LastModified>,
      actionmenu: <ActionMenu />,
    },
    {
      key: "5",
      name: <Recipient5 />,
      rate: <ProgressBar percent={80} />,
      Average: <Ratings />,
      statustag: (
        <Statustag className="activeTage" color="processing">
          Draft
        </Statustag>
      ),
      lastdate: <LastModified>Sep 20, 2021</LastModified>,
      activedate: <LastModified>Sep 20, 2021</LastModified>,
      actionmenu: <ActionMenu />,
    },
  ];

  return (
    <TableContainer>
      <CardTitle type="inner" title="Campaigns" extra={<MoreOutlined />}>
        <CampaignTable className="table" columns={columns} dataSource={data} />;
      </CardTitle>
    </TableContainer>
  );
};

export default campTable;
