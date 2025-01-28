# Commit message strategy

## Introduction

To maintain a consistent and meaningful commit history, we adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for commit messages. This strategy helps in automating the release process, generating changelogs, and understanding the history of changes.

## Commit Message Structure

- **Structure**: `<type>(<scope>): <description>`
- **Example with scope**: `feat(auth): add login functionality`
- **Example without scope**: `style: first commit prettier refactor`

### Common Types

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation only changes.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **test**: Adding missing tests or correcting existing tests.
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation.
- **ci**: Changes to our CI configuration files and scripts.
- **perf**: Changes made to improve performance.
- **revert**: Revert to a previous commit or version.
- **ticket**: Changes related to specific ticketing system tasks.

## Example Commit Messages

- `feat(auth): add login functionality`
- `fix(api): correct the user endpoint URL`
- `docs(readme): update installation instructions`
- `style(app): reformat codebase using Prettier`
- `refactor(component): simplify the render method`
- `test(header): add unit tests for header component`
- `chore(deps): update dependency versions`
- `ci(build): update CI build script`
- `perf(render): improve rendering performance by memoization`
- `revert(auth): revert commit 123456 which caused a login bug`
- `ticket(TICKET-1234): resolve issue reported in ticket TICKET-1234`
- `feat!: bump the version`

## Technical Implementation

### Husky and Commitlint

To enforce this commit message strategy, we use [Husky](https://typicode.github.io/husky/) to trigger checks on Git hooks and [Commitlint](https://commitlint.js.org/) to validate commit messages.

### Configuration

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'ci',
        'chore',
        'docs',
        'ticket',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
      ],
    ],
  },
};
```

### Commitlint Rules Explained

- **`extends`**: Uses the conventional configuration from `@commitlint/config-conventional`.
- **`type-enum`**: Ensures that commit messages use one of the predefined types. The `type-enum` rule is enforced with a severity of `2` (error) and is always checked.

## Working

To make the workflow create the automated releases. We need to follow some commit conventions - Conventional Commits. Depending upon the convention used, it will version the new release.

![Semantic version](https://cdn.hashnode.com/res/hashnode/image/upload/v1660731677868/Xw7NChXOT.png?auto=compress,format&format=webp)

- fix: Will bump the last digit - patch.
- feat - Will bump the middle digit - minor
- feat!: - the `!` will bump the first digit by - major
