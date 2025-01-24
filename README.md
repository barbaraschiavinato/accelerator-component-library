# @ntt-data-fe/ui-components

## Overview

`@ntt-data-fe/ui-components` is a library of reusable React components designed for modern web applications. It is built with TypeScript, TailwindCSS, and Vite for fast development and efficient bundling. The library includes components for form elements, layout elements, and list elements, along with Storybook integration for showcasing and testing components.

---

## Features

- **TypeScript Support**: Provides type safety and enhanced developer experience.
- **Vite**: Leverages Vite for fast development and build processes.
- **Storybook Integration**: Includes Storybook for isolated component development and documentation.
- **Jest Testing**: Comprehensive unit testing with Jest and Testing Library.
- **TailwindCSS**: Built-in support for TailwindCSS for styling.
- **Modular Design**: Organized folder structure for scalability and maintainability.

---

## Installation

To use the component library in your project:

```bash
npm install @ntt-data-fe/ui-components
```

---

## Development

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 20.x)
- npm (>= 9.x)

### Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd accelerator-component-library
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Scripts

The following npm scripts are available:

| Script                    | Description                                |
| ------------------------- | ------------------------------------------ |
| `npm run dev`             | Starts the development server using Vite.  |
| `npm run build`           | Builds the library for production.         |
| `npm run lint`            | Runs ESLint for code linting.              |
| `npm run test`            | Executes unit tests using Jest.            |
| `npm run test:watch`      | Executes continuous unit tests using Jest. |
| `npm run coverage`        | Executes coverage report using Jest.       |
| `npm run prettier`        | Formats the codebase with Prettier.        |
| `npm run storybook`       | Starts the Storybook server.               |
| `npm run build-storybook` | Builds the Storybook documentation.        |
| `npm run audit`           | Executes the vulnerability test            |

---

## Folder Structure

```plaintext
accelerator-component-library
├── .github          # GitHub workflows and configurations
│   └── workflows
│       ├── pull-request.yml
│       └── release.yml
├── .storybook       # Storybook configuration
│   ├── main.ts
│   └── preview.ts
├── lib              # Library components
│   ├── components   # Core components
│   │   ├── formElements
│   │   │   ├── Button # Component example
│   │   │   │   ├── Button.stories.ts
│   │   │   │   ├── Button.test.tsx
│   │   │   │   ├── button.css
│   │   │   │   └── index.tsx
│   ├── index.css    # Global styles
│   └── index.ts     # Component exports
├── src              # Application source code
│   ├── App.tsx
│   ├── assets       # Static assets
│   │   ├── favicon.ico
│   │   └── react.svg
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── test             # Test setup and configurations
│   └── setupTests.ts
├── public           # Public assets
├── README.md        # Project documentation
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── tailwind.config.js # TailwindCSS configuration
```

---

## Testing

Run unit tests with:

```bash
npm run test
```

Test configuration is defined in `jest.config.js`. Additional setup files are located in the `test/setupTests.ts` file.

---

## Storybook

To develop and document components in isolation, use Storybook:

1. Start Storybook:

   ```bash
   npm run storybook
   ```

2. Open [http://localhost:6006](http://localhost:6006) in your browser.

3. Build Storybook documentation:

   ```bash
   npm run build-storybook
   ```

---

## Styling

This project uses TailwindCSS for styling. Global styles are defined in `lib/index.css`.

---

## Linting and Formatting

- Run ESLint:
  ```bash
  npm run lint
  ```
- Format code with Prettier:
  ```bash
  npm run prettier
  ```
