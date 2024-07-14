import { StoryFn, Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import Dropdown from "./Dropdown";

export default {
  title: "ReactComponentLibrary/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

//const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

// export const MyButtonPrimaryTest = Template.bind({});
// MyButtonPrimaryTest.args = {
//   disabled: false,
// };

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    disabled: false,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("myDropdown"));
    await userEvent.click(canvas.getByTestId("myDropdown"));
  },
};
