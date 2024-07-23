import { StoryFn, Meta } from '@storybook/react';
import Link from './Link';
import { LinkProps } from './Link.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/Link',
  component: Link,
  argTypes: {
    bold: { control: 'boolean' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' }
  },
} as Meta<typeof Link>;

interface LinkStoryProps extends LinkProps {
  visible: boolean;
}

const Template: StoryFn<LinkStoryProps> = (args) => (
  <>
    {args.visible && <Link {...args} />}
  </>
);

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  text: 'Primary Link',
  href: '#',
  visible: true,
};

PrimaryLink.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByText('Primary Link');
  link.addEventListener('click', (e) => e.preventDefault());
  await userEvent.click(link);
};

export const BoldLink = Template.bind({});
BoldLink.args = {
  text: 'Bold Link',
  href: '#',
  bold: true,
  visible: true,
};

BoldLink.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByText('Bold Link');
  link.addEventListener('click', (e) => e.preventDefault());
  await userEvent.click(link);
};

