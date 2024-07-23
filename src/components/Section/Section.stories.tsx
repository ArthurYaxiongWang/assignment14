import { StoryFn, Meta } from '@storybook/react';
import Section from './Section';
import { SectionProps } from './Section.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ReactComponentLibrary/Section',
  component: Section,
  argTypes: {
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' }
  },
} as Meta<typeof Section>;

interface SectionStoryProps extends SectionProps {
  visible: boolean;
}

const Template: StoryFn<SectionStoryProps> = (args) => (
  <>
    {args.visible && <Section {...args}>{args.children}</Section>}
  </>
);

export const PrimarySection = Template.bind({});
PrimarySection.args = {
  children: 'Primary Section Content',
  visible: true,
};

PrimarySection.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Primary Section Content'));
};

export const DisabledSection = Template.bind({});
DisabledSection.args = {
  children: 'Disabled Section Content',
  disabled: true,
  visible: true
};

DisabledSection.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const section = canvas.getByText('Disabled Section Content');
  await userEvent.click(section);
  section.addEventListener('click', (e) => e.preventDefault());
};
