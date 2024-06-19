import { StoryFn, Meta } from "@storybook/react";
import MyButton from "./MyButton";

export default {
  title: "ReactComponentLibrary/Testing",
  component: MyButton,
} as Meta<typeof MyButton>;

const Template: StoryFn<typeof MyButton> = (args) => <MyButton {...args} />;

export const MyButtonPrimaryTest = Template.bind({});
MyButtonPrimaryTest.args = {
  disabled: false,
};
