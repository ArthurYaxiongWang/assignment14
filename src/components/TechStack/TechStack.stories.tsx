import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import TechStack from './TechStack';

export default {
  title: 'Components/TechStack',
  component: TechStack,
} as Meta;

const Template: StoryFn = (args) => <TechStack {...args} />;

export const TechStackDefault = Template.bind({});

TechStackDefault.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const bootstrapItem = canvas.getByAltText('Bootstrap');
  await userEvent.click(bootstrapItem);
};
