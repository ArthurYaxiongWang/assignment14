import { StoryObj, Meta } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import MyButton from "./MyButton";

export default {
  title: "ReactComponentLibrary/Button",
  component: MyButton,
} as Meta<typeof MyButton>;

export const Default: StoryObj<typeof MyButton> = {
  args: {
    disabled: false,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByTestId("MyButton"));
  },
};
