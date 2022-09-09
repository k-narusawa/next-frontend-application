import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ToDoTable from "./index";

export default {
  title: "organisms/ToDoTable",
  component: ToDoTable,
} as ComponentMeta<typeof ToDoTable>;

const Template: ComponentStory<typeof ToDoTable> = (args) => (
  <ToDoTable {...args} />
);

export const Table = Template.bind({});
Table.args = {
  todos : [
    {
      "todoId": 1,
      "userid": "533271dd-4619-4b1e-9324-62047208bb24",
      "todo": "勉強",
      "timeLimit": "2022-08-06T09:08:00",
      "priority": "HIGH",
      "doneFlg": false,
      "createdAt": "2022-08-28T19:51:46",
      "updatedAt": "2022-08-28T19:51:46"
    },
    {
        "todoId": 2,
        "userid": "533271dd-4619-4b1e-9324-62047208bb24",
        "todo": "勉強",
        "timeLimit": "2022-08-06T09:08:00",
        "priority": "HIGH",
        "doneFlg": false,
        "createdAt": "2022-08-28T19:51:46",
        "updatedAt": "2022-08-28T19:51:46"
    },
    {
        "todoId": 3,
        "userid": "533271dd-4619-4b1e-9324-62047208bb24",
        "todo": "勉強",
        "timeLimit": "2022-08-06T09:08:00",
        "priority": "HIGH",
        "doneFlg": false,
        "createdAt": "2022-08-28T19:51:46",
        "updatedAt": "2022-08-28T19:51:46"
    }
  ]
};
