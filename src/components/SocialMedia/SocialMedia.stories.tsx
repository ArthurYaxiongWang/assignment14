import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import SocialMedia from './SocialMedia';

export default {
  title: 'Components/SocialMedia',
  component: SocialMedia,
} as Meta;

const Template: StoryFn = (args) => <SocialMedia {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const facebookButton = canvas.getByRole('link', { name: /facebook/i });

  facebookButton.addEventListener('click', (e) => e.preventDefault());

  await userEvent.click(facebookButton);
};
