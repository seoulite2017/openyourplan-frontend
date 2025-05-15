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
    title: '버튼',
    size: 'md',
    variant: 'primary',
  },
};

export const Hover: Story = {
  args: {
    title: 'Hover',
    size: 'sm',
    variant: 'primary',
    storyBookClassName: 'hover',
  },
};

export const Focus: Story = {
  args: {
    title: 'Focus',
    size: 'md',
    storyBookClassName: 'focus',
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    button?.focus();
  },
};
