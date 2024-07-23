import { StoryFn, Meta } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof RadioButton>;

interface RadioButtonStoryProps extends RadioButtonProps {
  visible: boolean;
}

const Template: StoryFn<RadioButtonStoryProps> = (args) => (
  <>
    {args.visible && <RadioButton {...args} />}
  </>
);

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  disabled: false,
  name: 'radioGroup',
  value: 'Option1',
  backgroundColorDisabled: '#ccc',
  visible: true
};

DefaultRadioButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('radio'));
};

export const DisabledRadioButton = Template.bind({});
DisabledRadioButton.args = {
  disabled: true,
  name: 'radioGroup',
  value: 'Option1',
  backgroundColorDisabled: '#ccc',
  visible: true
};

DisabledRadioButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByRole('radio');
  await userEvent.click(radioButton);
  radioButton.addEventListener('click', (e) => e.preventDefault());
};
