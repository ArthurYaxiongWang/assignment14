import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/Img',
  component: Img,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Img>;

interface ImgStoryProps extends ImgProps {
  visible: boolean;
}

const Template: StoryFn<ImgStoryProps> = (args) => (
  <>
    {args.visible && <Img {...args} />}
  </>
);

export const PrimaryImg = Template.bind({});
PrimaryImg.args = {
  disabled: false,
  src: 'https://via.placeholder.com/400',
  alt: 'Primary Image',
  visible: true
};

PrimaryImg.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const img = canvas.getByAltText('Primary Image');
  await userEvent.click(img);
};

export const LargeImg = Template.bind({});
LargeImg.args = {
  disabled: false,
  src: 'https://via.placeholder.com/800',
  alt: 'Large Image',
  visible: true
};

LargeImg.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const img = canvas.getByAltText('Large Image');
  await userEvent.click(img);
};

export const DisabledImg = Template.bind({});
DisabledImg.args = {
  disabled: true,
  src: 'https://via.placeholder.com/400',
  alt: 'Disabled Image',
  visible: true
};

DisabledImg.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const img = canvas.getByAltText('Disabled Image');
  await userEvent.click(img);
  img.addEventListener('click', (e) => e.preventDefault());
};
