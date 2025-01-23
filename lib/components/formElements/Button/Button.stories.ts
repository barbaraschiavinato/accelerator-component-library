import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';

import { Button } from '.';

const mockOnClick = fn();
const mockOnMouseEnter = fn();
const mockOnMouseLeave = fn();
const mockOnFocus = fn();
const mockOnBlur = fn();

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters:{
    controls:{
        exclude: ["onClick", "onBlur", "onMouseEnter", "onMouseLeave", "onFocus"]
    }
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
        type: { summary: `'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple'` },
      },
    },
    size: {
      control: 'select',
      options: ['extraSmall', 'small', 'base', 'large', 'extraLarge'],
      description: 'Size of the button',
      table: {
        defaultValue: { summary: `'base'` },
        type: { summary: `'extraSmall' | small' | 'base' | 'large' | 'extraLarge` },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  },
};

export const AsLink: Story = {
  args: {
    children: 'Click Me',
    as: 'a',
    href: '/test',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const linkElement = canvas.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Click Me');
    expect(linkElement).toHaveAttribute('href', '/test');
  },
};

export const AdditionalProps: Story = {
  args: {
    children: 'Click Me',
    'data-testid': 'custom-button',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByTestId('custom-button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  },
};

export const AdditionalClassNames: Story = {
  args: {
    children: 'Click Me',
    className: 'additional',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByRole('button');
    expect(buttonElement).toHaveClass(
      'additional text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
    );
  },
};

export const EventTriggered: Story = {
  args: {
    children: 'Click Me',
    onClick: mockOnClick,
    onBlur: mockOnBlur,
    onMouseEnter: mockOnMouseEnter,
    onMouseLeave: mockOnMouseLeave,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByRole('button');
    expect(mockOnClick).toHaveBeenCalledTimes(0);
    expect(mockOnFocus).toHaveBeenCalledTimes(0);
    expect(mockOnMouseEnter).toHaveBeenCalledTimes(0);
    expect(mockOnMouseLeave).toHaveBeenCalledTimes(0);
    await userEvent.click(buttonElement); // Simulate click on the button
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    await userEvent.hover(buttonElement); // Simulate mouse entering the button
    expect(mockOnMouseEnter).toHaveBeenCalledTimes(2);

    await userEvent.unhover(buttonElement); // Simulate mouse leaving the button
    expect(mockOnMouseLeave).toHaveBeenCalledTimes(1);
  },
};
