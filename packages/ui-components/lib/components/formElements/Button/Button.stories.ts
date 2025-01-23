import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button2',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the button',
      table: {
        defaultValue: { summary: `undefined` },
        type: { summary: 'ReactNode' },
      },
      required: true,
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
      description: 'Scope of button, only for web',
      table: {
        defaultValue: { summary: `'button'` },
        type: { summary: `'button' | 'submit' | 'reset'` },
      },
    },
    as: {
      control: 'radio',
      options: ['button', 'a'],
      description: 'Change the element type',
      table: {
        defaultValue: { summary: `'button'` },
        type: { summary: `'button' | 'a'` },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    
    onClick: {
      control: false,
      description: 'Function to call when button is clicked',
      table: {
        defaultValue: { summary: `undefined` },
        type: { summary: `function` },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class name for the button',
      table: {
        defaultValue: { summary: `undefined` },
        type: { summary: 'string' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test ID for testing purposes',
      table: {
        defaultValue: { summary: `undefined` },
        type: { summary: `string` },
      },
    },
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

