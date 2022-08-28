import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  children: "medium",
};

export const Small = Template.bind({});
Small.args = {
  children: "small",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  children: "large",
  size: "large",
};
