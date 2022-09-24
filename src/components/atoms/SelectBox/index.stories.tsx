import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectBox from "./index";

export default {
  title: "atoms/SelectBox",
  component: SelectBox,
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args) => (
  <SelectBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: ["HIGH", "MIDDLE", "LOW"],
};
