import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Navbar, { NavbarProps } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCurrentPage: (page: string) => console.log(`Navigating to ${page}`),
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const aboutButton = canvas.getByText('About');
  await userEvent.click(aboutButton);
};
