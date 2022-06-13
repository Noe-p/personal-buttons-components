import { Meta, Story } from '@storybook/react';
import { ToggleTextButton, ToggleTextButtonProps } from '../src';

const meta: Meta = {
  title: 'ToggleTextButton',
  component: ToggleTextButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleTextButtonProps> = args => (
  <ToggleTextButton {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  isMenuOpen: false,
};
