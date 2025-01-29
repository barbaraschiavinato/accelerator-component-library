import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '..';
import { IconExample } from './IconExample';

const meta = {
  title: 'Example/Button',
  component: Button,
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
          summary: `'extraSmall' | small' | 'base' | 'large' | 'extraLarge'`,
        },
      },
    },
    shape: {
      control: 'select',
      options: ['default', 'pill'],
      description: 'Shape of the button',
      table: {
        defaultValue: { summary: `'default'` },
        type: {
          summary: `'default' | 'pill'`,
        },
      },
    },
    as: {
      control: 'radio',
      options: ['button', 'a', 'input'],
      description: 'Change the element type',
      table: {
        defaultValue: { summary: `'button'` },
        type: { summary: `'button' | 'a' | 'input'` },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
      table: {
        defaultValue: { summary: 'false' },
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
    icon: {
      description: 'Icon component to display inside the button',
      control: {
        type: 'radio',
        labels: {
          undefined: 'No icon (default)',
          example: 'GitHub Icon Example',
        },
      },
      options: [undefined, 'example'],
      table: {
        defaultValue: { summary: `undefined` },
        type: { summary: 'ReactNode' },
      },
    },
  },
  render: (args) => {
    const icon = args.icon === 'example' ? <IconExample /> : null;
    return <Button {...args} icon={icon} />;
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me',
  },
};

export const Blue: Story = {
  args: {
    children: 'Click Me',
  },
};

export const Alternative: Story = {
  args: {
    children: 'Click Me',
    color: 'alternative' as const,
  },
};

export const Dark: Story = {
  args: {
    children: 'Click Me',
    color: 'dark' as const,
  },
};

export const Light: Story = {
  args: {
    children: 'Click Me',
    color: 'light' as const,
  },
};

export const Green: Story = {
  args: {
    children: 'Click Me',
    color: 'green' as const,
  },
};

export const Red: Story = {
  args: {
    children: 'Click Me',
    color: 'red' as const,
  },
};

export const Yellow: Story = {
  args: {
    children: 'Click Me',
    color: 'yellow' as const,
  },
};

export const Purple: Story = {
  args: {
    children: 'Click Me',
    color: 'purple' as const,
  },
};

export const Pill: Story = {
  args: {
    children: 'Click Me',
    shape: 'pill' as const,
  },
};

export const ExtraSmall: Story = {
  args: {
    children: 'Click Me',
    size: 'extraSmall' as const,
  },
};

export const Small: Story = {
  args: {
    children: 'Click Me',
    size: 'small' as const,
  },
};

export const Base: Story = {
  args: {
    children: 'Click Me',
    size: 'base' as const,
  },
};

export const Large: Story = {
  args: {
    children: 'Click Me',
    size: 'large' as const,
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Click Me',
    size: 'extraLarge' as const,
  },
};

export const AsButton: Story = {
  args: {
    children: 'Click Me',
  },
};

export const AsLink: Story = {
  args: {
    children: 'Click Me',
    as: 'a' as const,
  },
};

export const AsInput: Story = {
  args: {
    children: 'Click Me',
    as: 'input' as const,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click Me',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Click Me',
    icon: 'example',
  },
};

export const WithEvents: Story = {
  args: {
    children: 'Click Me',
    onClick: fn(),
    onBlur: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
    onFocus: fn(),
  },
};
