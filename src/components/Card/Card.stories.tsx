import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/Card',
  component: Card,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Card>;

interface CardStoryProps extends CardProps {
  visible: boolean;
}

const Template: StoryFn<CardStoryProps> = (args) => (
  <>
    {args.visible && <Card {...args} />}
  </>
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  disabled: false,
  label: 'Card',
  backgroundColorDisabled: '#ccc',
  visible: true
};

DefaultCard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText("Card"));
};

export const DisabledCard = Template.bind({});
DisabledCard.args = {
  disabled: true,
  label: 'Card',
  backgroundColorDisabled: '#ccc',
  visible: true
};

DisabledCard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const card = canvas.getByText("Card");
  await userEvent.click(card);
  card.addEventListener('click', (e) => e.preventDefault());
};
