import { Button } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Default: Story = {
  args: {
    children: '버튼',
    size: 'md',
    variant: 'primary',
  },
};

export const Hover: Story = {
  args: {
    children: 'Hover',
    size: 'sm',
    variant: 'primary',
    storyBookClassName: 'hover',
  },
};

export const Focus: Story = {
  args: {
    children: 'Focus',
    size: 'md',
    storyBookClassName: 'focus',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    button?.focus();
  },
};
