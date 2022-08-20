import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './index';

export default {
  title: 'organisims/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Form = Template.bind({});
Form.args = {
  
};
