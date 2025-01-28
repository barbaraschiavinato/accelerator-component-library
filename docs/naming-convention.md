# File Naming Conventions

1. **Component Files**:

   - Use PascalCase for React component files.
   - Example: `MyComponent.js`, `Header.js`, `UserProfile.tsx`.

2. **Page Files**:

   - Use kebab-case for page files inside the `pages` directory.
   - Example: `index.js`, `about-us.js`, `user-profile.js`.

3. **Stylesheets**:

   - Use kebab-case for CSS/SCSS files.
   - Example: `header.module.scss`, `user-profile.module.scss`.

4. **Utility and Helper Files**:

   - Use camelCase for helper files.
   - Example: `calculateAge.js`, `dataFetching.ts`, `apiUtils.js`.

5. **Hooks**:

   - Use camelCase with a `use` prefix for custom hooks.
   - Example: `useFetchData.js`, `useUserProfile.ts`.

6. **GraphQL Queries**:
   - Use uppercase for GraphQL Queries.
   - Example: `GET_USER_PROFILE.ts`.

## Function and Variable Naming Conventions

1. **Functions**:

   - Use camelCase for function names.
   - Example: `fetchData()`, `handleClick()`, `getUserProfile()`.

2. **Variables**:
   - Use camelCase for variable names.
   - Example: `userName`, `isLoggedIn`, `userProfileData`.

## Component Naming Conventions

1. **Component Names**:

   - Use PascalCase for React component names.
   - Example: `function MyComponent() {}`, `const Header = () => {}`.

2. **File Exports**:

   - Name the default export the same as the file name.
   - Example:

   ```jsx
   // File: Header.js
   const Header = () => {
     return <header>Header</header>;
   };
   export default Header;
   ```

## Test Files Naming Conventions

- Use `.test.ts` or `.test.tsx` suffix for test files.
- Place test files in a `__tests__` directory if they are testing `pages` elements or alongside the files they test.
- Example: `Header.test.ts`, `UserProfile.test.tsx`.

## Folder Naming Conventions

1. **Components Folder**:

   - Use **PascalCase** for folders containing a single component that may have its own styles, tests, and sub-components.
   - Example: `components/Header/`, `components/UserProfile/`.
   - If the folder contains multiple related components, use **camelCase** or **kebab-case**.
   - Example: `components/formElements/`, `components/navigation/`.

2. **Pages Folder**:

   - Use **kebab-case** for folders inside the `pages` directory to match the page route structure.
   - Example: `pages/user-profile/`, `pages/about-us/`.

3. **Styles Folder**:

   - Use **kebab-case** for style-related folders.
   - Example: `styles/base/`, `styles/components/`.

4. **Hooks Folder**:

   - Use **kebab-case** for the hooks directory.
   - Example: `hooks/`.

5. **Utils or Helpers Folder**:

   - Use **kebab-case** or **camelCase** for utility and helper function directories.
   - Example: `utils/`, `helpers/`.

6. **Assets Folder**:
   - Use **kebab-case** for assets directory.
   - Example: `public/images/`, `public/fonts/`.

## Example Project Structure

Here's an example structure demonstrating these conventions:

```
ui-web/
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Logo/
│   │   │   │   ├── index.ts
│   │   │   │   ├── Logo.tsx
│   │   │   │   ├── Logo.module.scss
│   │   │   │   └── Logo.test.tsx
│   │   │   ├── index.ts
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.scss
│   │   │   └── Header.test.tsx
│   │   ├── UserProfile/
│   │   │   ├── index.ts
│   │   │   ├── UserProfile.tsx
│   │   │   ├── UserProfile.module.scss
│   │   │   └── UserProfile.test.tsx
│   │   ├── formElements/
│   │   │   ├── index.ts
│   │   │   ├── TextInput.tsx
│   │   │   ├── Checkbox.tsx
│   │   └── navigation/
│   │       ├── index.ts
│   │       ├── Navbar.tsx
│   │       ├── Navbar.module.scss
│   │       └── Navbar.test.tsx
│   ├── hooks/
│   │   ├── useFetchData.ts
│   │   ├── useUserProfile.ts
│   ├── pages/
│   │   ├── index.ts
│   │   ├── about-us.ts
│   │   ├── user-profile/
│   │   │   ├── index.tsx
│   │   │   └── settings.tsx
│   ├── styles/
│   │   └── global.scss
│   ├── graphql/
│   │   ├── queries/
│   │   │   └── GET_USER_PROFILE.ts
│   │   ├── definitions/
│   │   │   └── userProfile.ts
│   ├── utils/
│   │   ├── calculateAge.ts
│   │   ├── dataFetching.ts
│   ├── __tests__/
│   │   ├── index.test.tsx
├── .eslintrc.js
├── jest.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```
