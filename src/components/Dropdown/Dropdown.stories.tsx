import { StoryFn, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Dropdown>;

interface DropdownStoryProps extends DropdownProps {
  visible: boolean;
}

const Template: StoryFn<DropdownStoryProps> = (args) => (
  <>
    {args.visible && <Dropdown {...args} />}
  </>
);

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  disabled: false,
  options: ['Option 1', 'Option 2', 'Option 3'],
  backgroundColorDisabled: '#ccc',
  visible: true
};

DefaultDropdown.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("dropdown"));
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  disabled: true,
  options: ['Option 1', 'Option 2', 'Option 3'],
  backgroundColorDisabled: '#ccc',
  visible: true
};

DisabledDropdown.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdown = canvas.getByTestId('dropdown');
  await userEvent.click(dropdown);  
};

export const DropdownWithSelection = Template.bind({});
DropdownWithSelection.args = {
  disabled: false,
  options: ['Option 1', 'Option 2', 'Option 3'],
  backgroundColorDisabled: '#ccc',
  visible: true
};

DropdownWithSelection.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdown = canvas.getByTestId('dropdown');
  await userEvent.click(dropdown);
  const option = canvas.getByText('Option 2');
  await userEvent.click(option);
};
