import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Button>;

interface ButtonStoryProps extends ButtonProps {
  visible: boolean;
}

const Template: StoryFn<ButtonStoryProps> = (args) => (
  <>
    {args.visible && <Button {...args} />}
  </>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  disabled: false,
  label: 'Primary Button',
  visible: true
};

PrimaryButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Primary Button'));
};

export const HoverButton = Template.bind({});
HoverButton.args = {
  disabled: false,
  label: 'Hover Button',
  visible: true
};

HoverButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Hover Button');
  await userEvent.hover(button);
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  label: 'Disabled Button',
  visible: true
};

DisabledButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Disabled Button');
  await userEvent.click(button);
  button.addEventListener('click', (e) => e.preventDefault());
};
