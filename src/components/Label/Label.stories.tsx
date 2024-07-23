import { StoryFn, Meta } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/Label',
  component: Label,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Label>;

interface LabelStoryProps extends LabelProps {
  visible: boolean;
}

const Template: StoryFn<LabelStoryProps> = (args) => (
  <>
    {args.visible && <Label {...args} />}
  </>
);

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  disabled: false,
  text: 'Label',
  backgroundColorDisabled: '#ccc',
  visible: true
};

DefaultLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText("Label"));
};

export const DisabledLabel = Template.bind({});
DisabledLabel.args = {
  disabled: true,
  text: 'Label',
  backgroundColorDisabled: '#ccc',
  visible: true
};

DisabledLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const label = canvas.getByText("Label");
  await userEvent.click(label);
  label.addEventListener('click', (e) => e.preventDefault());
};
