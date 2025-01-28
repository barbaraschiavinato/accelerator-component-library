const styles = {
  default: [
    'focus:ui-ring-4',
    'focus:ui-outline-none',
    'ui-font-medium',
    'ui-rounded-lg',
    'ui-text-center',
  ],
};
const sizes = {
  extraSmall: ['ui-text-xs', 'ui-px-3', 'ui-py-2'],
  small: ['ui-text-sm', 'ui-px-3', 'ui-py-2'],
  base: ['ui-text-sm', 'ui-px-5', 'ui-py-2.5'],
  large: ['ui-text-base', 'ui-px-5', 'ui-py-3'],
  extraLarge: ['ui-text-base', 'ui-px-6', 'ui-py-3.5'],
};
const shapes = {
  default: ['ui-rounded-lg'],
  pill: ['ui-rounded-full'],
};
const themes = {
  default: [
    'ui-text-white',
    'ui-bg-blue-700',
    'hover:ui-bg-blue-800',
    'focus:ui-ring-blue-300',
    'dark:ui-bg-blue-600',
    'dark:hover:ui-bg-blue-700',
    'dark:focus:ui-ring-blue-800',
  ],
  alternative: [
    'ui-text-gray-900',
    'ui-bg-white',
    'ui-border',
    'ui-border-gray-200',
    'hover:ui-bg-gray-100',
    'hover:ui-text-blue-700',
    'focus:ui-ring-gray-100',
    'dark:focus:ui-ring-gray-700',
    'dark:ui-bg-gray-800',
    'dark:ui-text-gray-400',
    'dark:ui-border-gray-600',
    'dark:hover:ui-text-white',
    'dark:hover:ui-bg-gray-700',
  ],
  dark: [
    'ui-text-white',
    'ui-bg-gray-800',
    'hover:ui-bg-gray-900',
    'focus:ui-ring-gray-300',
    'dark:ui-bg-gray-800',
    'dark:hover:ui-bg-gray-700',
    'dark:focus:ui-ring-gray-700',
    'dark:ui-border-gray-700',
  ],
  light: [
    'ui-text-gray-900',
    'ui-bg-white',
    'ui-border',
    'ui-border-gray-300',
    'ui-hover:bg-gray-100',
    'focus:ui-ring-gray-100',
    'dark:ui-bg-gray-800',
    'dark:ui-text-white',
    'dark:ui-border-gray-600',
    'dark:hover:ui-bg-gray-700',
    'dark:hover:ui-border-gray-600',
    'dark:focus:ui-ring-gray-700',
  ],
  green: [
    'ui-text-white',
    'ui-bg-green-700',
    'hover:ui-bg-green-800',
    'focus:ui-ring-green-300',
    'dark:ui-bg-green-600',
    'dark:hover:ui-bg-green-700',
    'dark:focus:ui-ring-green-800',
  ],
  red: [
    'ui-text-white',
    'ui-bg-red-700',
    'hover:ui-bg-red-800',
    'focus:ui-ring-red-300',
    'dark:ui-bg-red-600',
    'dark:hover:ui-bg-red-700',
    'dark:focus:ui-ring-red-800',
  ],
  yellow: [
    'ui-text-white',
    'ui-bg-yellow-400',
    'hover:ui-bg-yellow-500',
    'focus:ui-ring-yellow-300',
    'dark:focus:ui-ring-yellow-900',
  ],
  purple: [
    'ui-text-white',
    'ui-bg-purple-700',
    'hover:ui-bg-purple-800',
    'focus:ui-ring-purple-300',
    'dark:ui-bg-purple-600',
    'dark:hover:ui-bg-purple-700',
    'dark:focus:ui-ring-purple-800',
  ],
};

export const variants = {
  styles,
  sizes,
  themes,
  shapes,
};
