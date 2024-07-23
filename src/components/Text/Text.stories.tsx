import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    bold: { control: 'boolean' },
    underline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
  },
} as Meta<typeof Text>;

interface TextStoryProps extends TextProps {
  visible: boolean;
}

const Template: StoryFn<TextStoryProps> = (args) => (
  <>
    {args.visible && <Text {...args} />}
  </>
);

export const SmallText = Template.bind({});
SmallText.args = {
  content: 'Small Text',
  size: 'small',
  visible: true,
};

SmallText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Small Text'));
};

export const MediumText = Template.bind({});
MediumText.args = {
  content: 'Medium Text',
  size: 'medium',
  visible: true,
};

MediumText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Medium Text'));
};

export const LargeText = Template.bind({});
LargeText.args = {
  content: 'Large Text',
  size: 'large',
  visible: true,
};

LargeText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Large Text'));
};

export const BoldText = Template.bind({});
BoldText.args = {
  content: 'Bold Text',
  bold: true,
  visible: true,
};

BoldText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Bold Text'));
};

export const UnderlineText = Template.bind({});
UnderlineText.args = {
  content: 'Underline Text',
  underline: true,
  visible: true,
};

UnderlineText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Underline Text'));
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  content: 'Disabled Text',
  disabled: true,
  visible: true,
};

DisabledText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const text = canvas.getByText('Disabled Text');
  await userEvent.click(text);
  text.addEventListener('click', (e) => e.preventDefault());
};