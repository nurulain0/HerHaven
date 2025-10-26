# Contributing to HerHaven 💜

Hey there! 👋 Welcome to **HerHaven**!

We're absolutely thrilled that you want to contribute to making women's health technology better. Whether you're a seasoned developer or making your first open-source contribution, this guide will help you get started.

---

## 📖 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Getting Started](#-getting-started)
- [Development Workflow](#-development-workflow)
- [Coding Standards](#-coding-standards)
- [Commit Guidelines](#-commit-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Community](#-community)

---

## 🤝 Code of Conduct

HerHaven is a safe, inclusive space for everyone. By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

**TL;DR**: Be kind, respectful, and supportive. We're all here to learn and build something meaningful together.

---

## 🌟 How Can I Contribute?

There are many ways to contribute to HerHaven, and code is just one of them!

### 💻 Code Contributions
- **Fix bugs** - Check out [bug issues](https://github.com/yourusername/HerHaven/labels/bug)
- **Add features** - Look for [enhancement requests](https://github.com/yourusername/HerHaven/labels/enhancement)
- **Improve performance** - Optimize existing code
- **Write tests** - Help us increase test coverage
- **Refactor code** - Make the codebase cleaner and more maintainable

### 📝 Non-Code Contributions
- **Documentation** - Improve guides, add tutorials, fix typos
- **Design** - Create mockups, improve UI/UX, design assets
- **Testing** - Test features, report bugs, provide feedback
- **Content** - Write blog posts, create videos, share on social media
- **Translation** - Help localize HerHaven to other languages
- **Community** - Answer questions, help other contributors, moderate discussions

### 🆕 First Time Contributors

Look for issues labeled:
- [`good first issue`](https://github.com/yourusername/HerHaven/labels/good%20first%20issue) - Perfect for beginners
- [`help wanted`](https://github.com/yourusername/HerHaven/labels/help%20wanted) - We'd love your help
- [`documentation`](https://github.com/yourusername/HerHaven/labels/documentation) - Improve our docs

**Not sure where to start?** Comment on an issue saying "I'd like to work on this!" and we'll guide you through it.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- **Node.js** (v18+) and npm
- **PHP** (8.4+)
- **Composer**
- **MySQL** or **MariaDB**
- **Git**

### Fork and Clone

1. **Fork the repository** by clicking the "Fork" button at the top right
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/HerHaven.git
   cd HerHaven
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/HerHaven.git
   ```

### Setup Development Environment

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### Backend Setup
```bash
cd backend
composer install

# Configure database
cp utils/config.example.php utils/config.php
# Edit config.php with your database credentials

# Create database and run migrations
mysql -u root -p -e "CREATE DATABASE herhaven;"
mysql -u root -p herhaven < database/schema.sql
mysql -u root -p herhaven < database/migrations/001_create_tables.sql

# Start PHP server
php -S localhost:8000
```

For detailed setup instructions, see the [README.md](README.md#-getting-started).

---

## 🔄 Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

**Branch naming conventions:**
- `feature/` - New features (e.g., `feature/pregnancy-widget`)
- `fix/` - Bug fixes (e.g., `fix/login-error`)
- `docs/` - Documentation changes (e.g., `docs/update-readme`)
- `style/` - Code style/formatting (e.g., `style/format-components`)
- `refactor/` - Code refactoring (e.g., `refactor/api-structure`)
- `test/` - Test additions/changes (e.g., `test/add-auth-tests`)

### 2. Make Your Changes

- Write clean, readable code
- Follow our [coding standards](#-coding-standards)
- Add comments for complex logic
- Update documentation if needed
- Add tests for new features

### 3. Test Your Changes

#### Frontend
```bash
cd frontend
npm run lint          # Check for linting errors
npm run build         # Ensure it builds successfully
```

#### Backend
```bash
cd backend
./vendor/bin/phpunit  # Run tests
```

### 4. Commit Your Changes

Follow our [commit guidelines](#-commit-guidelines):

```bash
git add .
git commit -m "feat: add pregnancy week tracker"
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Open a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Fill out the PR template
4. Link related issues
5. Wait for review

---

## 📏 Coding Standards

### Frontend (React/TypeScript)

#### File Structure
```typescript
// Component structure
import React from 'react';
import { someUtil } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MyComponentProps {
  title: string;
  onAction: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onAction }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <Button onClick={onAction}>Action</Button>
    </div>
  );
};
```

#### Best Practices
- ✅ Use **TypeScript** for type safety
- ✅ Use **functional components** and hooks
- ✅ Keep components **small and focused**
- ✅ Use **Tailwind CSS** for styling
- ✅ Use **shadcn/ui components** when available
- ✅ Extract reusable logic into **custom hooks**
- ✅ Use **React Query** for data fetching
- ✅ Implement **proper error handling**
- ✅ Follow **accessibility best practices**

#### Naming Conventions
- **Components**: PascalCase (`MyComponent.tsx`)
- **Files**: kebab-case (`use-auth.ts`, `api-utils.ts`)
- **Functions**: camelCase (`fetchUserData()`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **CSS Classes**: kebab-case (`btn-primary`)

### Backend (PHP)

#### File Structure
```php
<?php
// API endpoint structure
require_once '../utils/config.php';
require_once '../utils/validation.php';
require_once '../utils/helpers.php';

header('Content-Type: application/json');

// Check authentication
$user_id = authenticate();
if (!$user_id) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit();
}

// Main logic
try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Validate input
    validate_required_fields($data, ['field1', 'field2']);
    
    // Process request
    $result = processData($data, $user_id);
    
    // Send response
    echo json_encode(['success' => true, 'data' => $result]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
```

#### Best Practices
- ✅ Use **prepared statements** for all database queries
- ✅ Validate and **sanitize all inputs**
- ✅ Use proper **error handling**
- ✅ Return **consistent JSON responses**
- ✅ Implement **authentication checks**
- ✅ Use **meaningful variable names**
- ✅ Add **inline comments** for complex logic
- ✅ Follow **PSR-12 coding standards**

### Database

- ✅ Use **meaningful table and column names**
- ✅ Include **proper indexes**
- ✅ Use **foreign key constraints**
- ✅ Add **migration files** for schema changes
- ✅ Document **complex queries**

---

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) for clear, structured commit messages.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style (formatting, semicolons, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Build process, dependencies, tooling
- `perf` - Performance improvements

### Examples

```bash
# Feature
git commit -m "feat(cycle): add cycle prediction algorithm"

# Bug fix
git commit -m "fix(auth): resolve login token expiration issue"

# Documentation
git commit -m "docs(readme): add installation instructions"

# With body and footer
git commit -m "feat(pregnancy): add week-by-week tracker

- Implemented weekly milestone tracking
- Added progress visualization
- Connected to backend API

Closes #123"
```

### Rules

- ✅ Use present tense ("add feature" not "added feature")
- ✅ Use imperative mood ("move cursor to..." not "moves cursor to...")
- ✅ First line under 72 characters
- ✅ Reference issues and PRs when relevant
- ✅ Explain *what* and *why*, not *how*

---

## 🔀 Pull Request Process

### Before Submitting

- [ ] Code follows our style guidelines
- [ ] Self-reviewed your own code
- [ ] Commented complex/hard-to-understand areas
- [ ] Updated documentation as needed
- [ ] Added tests for new features
- [ ] All tests pass locally
- [ ] No new warnings or errors
- [ ] Checked for breaking changes

### PR Template

When you open a PR, fill out the template completely:

1. **Description** - What does this PR do?
2. **Related Issue** - Link the issue it addresses
3. **Type of Change** - Bug fix, feature, docs, etc.
4. **Testing** - How was it tested?
5. **Screenshots** - If UI changes
6. **Checklist** - Confirm all items

### Review Process

1. **Automated Checks** - CI/CD tests must pass
2. **Code Review** - A maintainer will review your code
3. **Feedback** - Address any requested changes
4. **Approval** - Once approved, your PR will be merged
5. **Celebration** - You're now a HerHaven contributor! 🎉

### PR Review Timeline

- **Initial Review**: Within 2-3 days
- **Follow-up**: Within 1-2 days
- **Merge**: After approval and passing checks

### What Makes a Good PR?

✅ **DO:**
- Keep PRs focused and small (easier to review)
- Provide clear descriptions
- Include tests
- Update documentation
- Respond to feedback promptly
- Be patient and respectful

❌ **DON'T:**
- Submit huge PRs with multiple unrelated changes
- Leave description blank
- Ignore review feedback
- Break existing functionality
- Submit untested code

---

## 🎯 Types of Contributions

### 🐛 Reporting Bugs

Found a bug? Help us fix it!

1. **Check existing issues** - It might already be reported
2. **Create a bug report** using our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
3. **Include details**:
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment info (OS, browser, etc.)

### ✨ Suggesting Features

Have an idea? We'd love to hear it!

1. **Check existing requests** - It might already be suggested
2. **Create a feature request** using our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
3. **Explain**:
   - The problem it solves
   - Proposed solution
   - Any alternatives considered
   - Mockups or examples (optional)

### 📖 Improving Documentation

Documentation is crucial! Help us make it better:

- Fix typos or grammatical errors
- Clarify confusing sections
- Add examples or tutorials
- Translate to other languages
- Create video guides

---

## 🌐 Community

### Communication Channels

- 💬 **GitHub Discussions** - Ask questions, share ideas
- 🐛 **GitHub Issues** - Report bugs, request features
- 📧 **Email** - contact@herhaven.org (for private matters)

### Getting Help

- **Stuck on setup?** Check the [README](README.md) or ask in Discussions
- **Need clarification?** Comment on the issue or PR
- **Found a security issue?** See [SECURITY.md](SECURITY.md)

### Be a Great Community Member

- 💜 **Be welcoming** - Help newcomers feel at home
- 🙏 **Be respectful** - Value different perspectives
- 🤝 **Be collaborative** - Work together toward solutions
- 🎉 **Celebrate others** - Acknowledge contributions
- 💬 **Communicate clearly** - Be concise and kind

---

## 🏆 Recognition

All contributors will be recognized in our:
- **README** - Contributors section
- **Release Notes** - For significant contributions
- **Special Thanks** - For exceptional help

### Becoming a Maintainer

Active contributors who consistently provide high-quality contributions and help the community may be invited to become maintainers!

---

## 📋 PR Review Checklist (For Maintainers)

When reviewing PRs, check:

- [ ] Code quality and style
- [ ] Functionality works as described
- [ ] Tests are included and pass
- [ ] Documentation is updated
- [ ] No breaking changes (or properly documented)
- [ ] Security considerations
- [ ] Performance impact
- [ ] Accessibility
- [ ] Mobile responsiveness (for UI changes)

---

## 🙏 Thank You!

Thank you for taking the time to contribute to HerHaven! Every contribution, no matter how small, makes a difference.

**Together, we're building technology that empowers women's health.** 💜

---

## 📚 Additional Resources

- [README](README.md) - Project overview and setup
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines
- [Security Policy](SECURITY.md) - Reporting vulnerabilities
- [License](LICENSE) - MIT License

### External Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Best Practices](https://react.dev/)
- [PHP Standards](https://www.php-fig.org/psr/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Questions?** Don't hesitate to ask! We're here to help. 💜

**Happy Contributing!** 🎉
