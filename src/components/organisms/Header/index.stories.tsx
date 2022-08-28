import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useLogin } from 'hooks/useLogin';

import Header from './index';

export default {
  title: 'organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const NoLogin = Template.bind({});
NoLogin.args = {
  isLogin: false,
  isLoading: false,
  logout: () => {console.log()}
};

export const Login = Template.bind({});

Login.args = {
  isLogin: true,
  isLoading: false,
  logout: () => {console.log()}
};

