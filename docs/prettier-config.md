# Prettier configuration

## Overview

`.prettierrc` configuration file specifies the rules and preferences for code formatting. Here is the breakdown:

```json
{
  "bracketSpacing": true,
  "endOfLine": "lf",
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- **bracketSpacing**: `true`
  - Ensures spaces between brackets in object literals. Example: `{ foo: bar }` instead of `{foo: bar}`.
- **endOfLine**: `"lf"`
  - Enforces the usage of line feed (`\n`) as the line ending. This is typically used in Unix and macOS systems.
- **printWidth**: `80`
  - Sets the maximum line length. Lines longer than this number will be wrapped to the next line.
- **semi**: `true`
  - Ensures that semicolons are added at the ends of statements.
- **singleQuote**: `true`
  - Enforces the usage of single quotes (`'`) instead of double quotes (`"`) in the code.
- **tabWidth**: `2`
  - Sets the number of spaces per indentation level. Here, it is set to 2 spaces.
- **trailingComma**: `"all"`
  - Adds trailing commas wherever possible, including in object literals, array expressions, function parameters, etc.
- **plugins**: `[]`
  - Currently, no additional plugins are specified for Prettier. This array can be used to add community plugins for Prettier.

## Commands in `package.json`

### Prettier Command

The command specified in your `package.json` is designed to format your files using Prettier:

```json
"scripts": {
  "prettier": "prettier --write ."
}
```

- **`prettier --write`**: This command will format and overwrite your files according to the Prettier configuration.

## lint-staged Configuration

The `lint-staged` configuration is designed to run Prettier on staged files before a commit:

```json
"lint-staged": {
  "*/**/*.{js,jsx,ts,tsx}": [
      "npm run prettier --fix",
      "npm run lint --fix",
      "npm run test:ci"
    ],
    "*/**/*.{json,css,scss,md}": ["npm run prettier --fix"]
}
```

- **File Patterns**: `*.{js,jsx,ts,tsx,json,css,scss}`
  - Targets files with the specified extensions.
- **Commands**:
  - **`prettier --fix`**: Formats the staged files with Prettier.
  - **`lint --fix`**: Lints and automatically fixes issues in the staged files.
  - **`npm run test:ci`**: Execute the unit tests.

## Pull Request Workflow Command

The command used in your pull request workflow ensures that Prettier checks are performed during the CI process:

- **`npm run prettier --check`**: This command runs Prettier in check mode, which verifies if the code is formatted correctly according to your Prettier configuration. If not, it will list the differences but not make changes.

## Summary

1. **Prettier Configuration**: Defines how your code should be formatted, ensuring consistency.
2. **Commands in `package.json`**:
   - **Prettier Command**: Formats all files matching the specified patterns.
3. **lint-staged Configuration**:
   - Runs Prettier on staged files to ensure that only properly formatted code is committed.
4. **Pull Request Workflow**:
   - Ensures that code formatting is checked during the CI process, preventing unformatted code from being merged.
