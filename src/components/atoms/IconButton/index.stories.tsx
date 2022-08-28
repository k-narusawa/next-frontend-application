import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  CancelIcon,
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
  CloseIcon,
  CloudUploadIcon,
  GitHubIcon,
  HomeIcon,
  PersonIcon,
  PersonOutlineIcon,
  SearchIcon,
} from "./index";

export default {
  title: "atoms/IconButton",
  component: GitHubIcon,
  onClick: {
    description: "onClickイベントハンドラ",
    table: {
      type: { summary: "function" },
    },
  },
} as ComponentMeta<typeof GitHubIcon>;

const Template: ComponentStory<typeof GitHubIcon> = (args) => (
  <>
    <HomeIcon {...args} />
    <SearchIcon {...args} />
    <PersonOutlineIcon {...args} />
    <CheckBoxOutlineBlankIcon {...args} />
    <CheckBoxIcon {...args} />
    <CancelIcon {...args} />
    <CloudUploadIcon {...args} />
    <CloseIcon {...args} />
    <GitHubIcon {...args} />
    <PersonIcon {...args} />
  </>
);

export const Normal = Template.bind({});

Normal.args = {
  size: "medium",
};
