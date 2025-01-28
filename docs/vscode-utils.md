# VSCode Utils

## Suggested VSCode

```js
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "editor.formatOnSave": true, // Automatically formats code on save
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "always" // Auto-fix ESLint issues on save
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode", // Set Prettier as the default formatter
    "editor.minimap.enabled": true, // Show a minimap for easy navigation
    "editor.inlineSuggest.enabled": true, // Enable IntelliCode inline suggestions
    "editor.quickSuggestions": {
      "strings": true // Enable quick suggestions in strings
    },
    "editor.tabSize": 2, // Standard for JavaScript/React projects
    "editor.snippetSuggestions": "top", // Show snippets on top of IntelliSense suggestions
    "editor.suggestSelection": "recentlyUsedByPrefix", // Prioritize recent suggestions
    "editor.bracketPairColorization.enabled": true, // Highlight matching brackets
    "files.associations": {
      "*.css": "tailwindcss", // Treat CSS files as Tailwind CSS for enhanced IntelliSense and syntax highlighting
      "*.js": "javascriptreact", // Treat JS files as React for better IntelliSense
      "*.tsx": "typescriptreact"  // Ensure proper handling of TypeScript React files
  }
    },
    "prettier.jsxSingleQuote": true,  // Use single quotes in JSX
    "prettier.trailingComma": "all",  // Add trailing commas
    "prettier.arrowParens": "avoid", // Avoid parentheses for single-parameter arrow functions
    "prettier.singleQuote": true,  // Use single quotes
    "prettier.tabWidth": 2  // Standard for JavaScript/React projects
  }
}
```

## Recommended VSCode Extensions

### Code Quality

- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**  
  Ensures code quality and enforces JavaScript/React coding standards.
- **[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**  
  Automatically formats your code for consistency.
- **[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)**  
  Lints and auto-fixes CSS, Sass, and SCSS files.

### Productivity

- **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)**  
  Enhances Git capabilities directly in VS Code, such as blame annotations and commit history.
- **[Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)**  
  Automatically imports React components, hooks, or utilities when typing their name.
- **[Path IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)**  
  Provides auto-completion for file paths in your project.

### Styling

- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**  
  Adds IntelliSense for Tailwind CSS classes and configurations.
- **[CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules)**  
  Offers IntelliSense for CSS modules in React projects.

### Snippets

- **[React Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)**  
  Provides handy code snippets for React, Redux, and GraphQL development.
