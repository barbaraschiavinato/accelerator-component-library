import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '.';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['onClick', 'onBlur', 'onMouseEnter', 'onMouseLeave', 'onFocus'],
    },
  },
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
    color: {
      control: 'select',
      options: [
        'default',
        'alternative',
        'dark',
        'light',
        'green',
        'red',
        'yellow',
        'purple',
      ],
      description: 'Color of the button',
      table: {
        defaultValue: { summary: `'default'` },
        type: {
          summary: `'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple'`,
        },
      },
    },
    size: {
      control: 'select',
      options: ['extraSmall', 'small', 'base', 'large', 'extraLarge'],
      description: 'Size of the button',
      table: {
        defaultValue: { summary: `'base'` },
        type: {
          summary: `'extraSmall' | small' | 'base' | 'large' | 'extraLarge`,
        },
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
  args: {
    onClick: fn(),
    onBlur: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
    onFocus: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me',
  },
};
