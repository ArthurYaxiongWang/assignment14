import { StoryFn, Meta } from '@storybook/react';
import Hero from './Hero';
import { HeroProps } from './Hero.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/Hero',
  component: Hero,
  argTypes: {
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' }
  },
} as Meta<typeof Hero>;

interface HeroStoryProps extends HeroProps {
  visible: boolean;
}

const Template: StoryFn<HeroStoryProps> = (args) => (
  <>
    {args.visible && <Hero {...args} />}
  </>
);

export const PrimaryHero = Template.bind({});
PrimaryHero.args = {
  title: 'Primary Hero',
  subtitle: 'This is the primary hero component',
  visible: true,
};

PrimaryHero.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByText('Primary Hero'));
};

export const DisabledHero = Template.bind({});
DisabledHero.args = {
  title: 'Disabled Hero',
  subtitle: 'This is the disabled hero component',
  disabled: true,
  visible: true,
};

DisabledHero.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const hero = canvas.getByText('Disabled Hero');
  await userEvent.click(hero);
  hero.addEventListener('click', (e) => e.preventDefault());
};
