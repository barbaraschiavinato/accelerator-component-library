# ESLint Configuration

## Purpose

This configuration sets up **ESLint** for a Next.js project with support for TypeScript and Next.js's core web vitals linting rules. It ensures best practices and high performance in the project.

#### Included Configurations:

1. **`next/core-web-vitals`**:
   - Includes ESLint rules focused on performance and best practices for Next.js, particularly those related to Core Web Vitals (e.g., page speed and SEO).
2. **`next/typescript`**:
   - Adds TypeScript-specific linting rules tailored for Next.js projects.

By spreading the result into `eslintConfig`, the configurations are combined and applied.

## Benefits of This Configuration

1. **Modern Configuration Format**:

   - Uses ESLint's new flat configuration format, which improves performance and reduces ambiguity.

2. **Tailored for Next.js**:

   - Includes rules specifically optimized for Next.js projects, ensuring alignment with its best practices.

3. **TypeScript Support**:

   - Adds TypeScript linting rules to catch issues early in the development process.

4. **Core Web Vitals Optimization**:
   - Enforces rules that directly impact metrics like Largest Contentful Paint (LCP) and First Input Delay (FID).
