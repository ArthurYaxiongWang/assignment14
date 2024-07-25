import React from 'react';
import { Story, Meta } from '@storybook/react';
import SocialMedia from './SocialMedia';

export default {
  title: 'Components/SocialMedia',
  component: SocialMedia,
} as Meta;

const Template: Story = (args) => <SocialMedia {...args} />;

export const Default = Template.bind({});
Default.args = {};
