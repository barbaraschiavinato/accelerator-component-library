# Repository rules

### 1. Branching Strategy

A well-defined branching strategy helps manage features, fixes, and releases effectively.

**Main Branches:**

- **main**: The main branch should always contain production-ready code. Only thoroughly tested and reviewed code is merged into this branch.
- **develop**: This branch contains the latest development changes. It is the integration branch for feature branches and serves as a staging area for final testing before releases.

**Supporting Branches:**

- **feature/**: These branches are created for developing new features. They branch off from `develop` and are merged back into `develop` upon completion. - Naming convention: `feature/feature-name`
- **bugfix/**: These branches are used for fixing bugs. They branch off from `develop` (or `main` if it's a hotfix) and are merged back into `develop` or `main` as appropriate. - Naming convention: `bugfix/bug-description`
- **release/**: These branches are used to prepare a new production release. They branch off from `develop` and are merged into both `main` and `develop` when the release is ready. - Naming convention: `release/version-number`
- **hotfix/**: These branches are for critical fixes that need to go directly into production. They branch off from `main` and are merged back into both `main` and `develop`. - Naming convention: `hotfix/bug-description`

### 2. Pull Requests (PRs)

PRs are essential for code reviews and maintaining code quality.

- **Creating PRs**:

  - Ensure your branch is up-to-date with `develop` before creating a PR.
  - Provide a clear and concise description of the changes made.
  - Link to any relevant issues or user stories.
  - Ensure all tests pass and the code is linted before creating a PR.

- **Reviewing PRs**:
  - At least one other developer should review the PR.
  - Reviewers should check for code quality, adherence to coding standards, and potential bugs.
  - Use comments for feedback and request changes if necessary.
  - Approve the PR if it meets all criteria.

### 3. Code Reviews

Code reviews are critical for maintaining high-quality code and knowledge sharing.

- **Review Checklist**:
  - Verify functionality: Ensure the code does what it’s supposed to.
  - Code readability: Check for clear and understandable code.
  - Adherence to standards: Ensure the code follows established coding guidelines.
  - Performance: Look for potential performance issues.
  - Security: Identify any potential security vulnerabilities.

### 4. Continuous Integration (CI) and Continuous Deployment (CD)

Automate the build, test, and deployment process to ensure quality and consistency.

- **CI/CD Pipeline**:
  - Use GitHub Actions to automate builds, tests, and deployments.
  - Ensure all branches trigger a build and run tests on each push and pull request.
  - Only deploy to production from the `main` branch after successful tests and reviews.

### 5. Versioning

Use semantic versioning to manage releases.

- **Semantic Versioning**:

  - Format: `MAJOR.MINOR.PATCH`
  - Increment the:
    - **MAJOR** version when you make incompatible API changes.
    - **MINOR** version when you add functionality in a backwards-compatible manner.
    - **PATCH** version when you make backwards-compatible bug fixes.

- **Tagging Releases**:
  - Tag releases in the `main` branch.
  - Use GitHub Releases to document changes and provide release notes.

### 6. Documentation

Maintain comprehensive and up-to-date documentation.

- **In-Repo Documentation**:

  - Use a `docs` folder for project-specific documentation.
  - Include a `README.md` for the project overview and setup instructions.
  - Maintain documentation for code standards, branching strategy, and contribution guidelines.

- **External Documentation**:
  - Keep documentation updated with each release.
