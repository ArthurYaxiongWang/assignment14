import React from 'react';
import { Story, Meta } from '@storybook/react';
import TechStack from './TechStack';

export default {
  title: 'Components/TechStack',
  component: TechStack,
} as Meta;

const Template: Story = (args) => <TechStack {...args} />;

export const Default = Template.bind({});
Default.args = {};
