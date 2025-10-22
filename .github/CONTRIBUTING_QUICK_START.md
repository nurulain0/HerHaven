# 🚀 Quick Start Guide for New Contributors

**First time contributing to open source? Welcome! We're so glad you're here.** 💜

This guide will walk you through making your first contribution to HerHaven in simple steps.

---

## ⏱️ 5-Minute Setup

### Step 1: Fork the Repository (1 minute)

1. Click the **"Fork"** button at the top right of this page
2. This creates your own copy of HerHaven

### Step 2: Clone Your Fork (1 minute)

```bash
# Replace YOUR-USERNAME with your GitHub username
git clone https://github.com/YOUR-USERNAME/HerHaven.git
cd HerHaven
```

### Step 3: Install Dependencies (3 minutes)

**For Frontend:**
```bash
cd frontend
npm install
```

**For Backend:**
```bash
cd backend
composer install
```

Done! You're ready to contribute. ✅

---

## 🎯 Your First Contribution

### Option 1: Fix a Typo (Easiest!)

Perfect for your first PR:

1. **Find a typo** in any `.md` file (README, docs, etc.)
2. **Edit the file** directly on GitHub (click the pencil icon)
3. **Commit changes** with message like: `docs: fix typo in README`
4. **Create Pull Request**

**That's it!** You've made your first contribution! 🎉

### Option 2: Pick a "Good First Issue"

1. **Browse issues** labeled [`good first issue`](https://github.com/yourusername/HerHaven/labels/good%20first%20issue)
2. **Comment** "I'd like to work on this!"
3. **Wait for assignment** (we'll guide you!)
4. **Follow the steps below**

---

## 📝 Making Code Changes (Step-by-Step)

### 1. Create a Branch

```bash
# Make sure you're on main
git checkout main

# Create a new branch
git checkout -b my-first-contribution
```

### 2. Make Your Changes

Edit the files you need to change. Use any code editor (VS Code, Sublime, etc.)

### 3. Save and Test

**Frontend:**
```bash
cd frontend
npm run dev    # See your changes at localhost:5173
```

**Backend:**
```bash
cd backend
php -S localhost:8000    # API runs at localhost:8000
```

### 4. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a message
git commit -m "docs: update installation guide"
```

**Commit message format:** `type: description`
- `docs:` for documentation
- `feat:` for new features
- `fix:` for bug fixes

### 5. Push to GitHub

```bash
git push origin my-first-contribution
```

### 6. Create a Pull Request

1. Go to **your fork** on GitHub
2. Click **"Compare & pull request"** (should appear automatically)
3. Fill out the template
4. Click **"Create pull request"**

### 7. Wait for Review

A maintainer will review your PR within 2-3 days. They might:
- ✅ Approve it (yay!)
- 💬 Ask questions
- 🔧 Request changes

**Don't worry!** We're here to help you improve your contribution.

---

## 🤔 Common Questions

### "What if I break something?"

You can't! Your changes are in your own fork. The main repository is safe.

### "What if my PR is rejected?"

That's okay! It happens to everyone. You'll get feedback on what to improve.

### "What if I don't know how to code?"

No problem! You can contribute by:
- Fixing typos in documentation
- Improving README instructions
- Reporting bugs
- Suggesting features
- Testing features

### "What if I need help?"

Ask! Comment on the issue or your PR. We're a friendly community.

### "How long until my PR is merged?"

Usually 2-7 days, depending on complexity. Be patient! 💜

---

## 🎓 Learning Resources

### Git & GitHub
- [GitHub Hello World Tutorial](https://guides.github.com/activities/hello-world/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Fork a Repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

### Frontend (React/TypeScript)
- [React Official Tutorial](https://react.dev/learn)
- [TypeScript in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Backend (PHP)
- [PHP Official Tutorial](https://www.php.net/manual/en/tutorial.php)
- [PHP The Right Way](https://phptherightway.com/)

---

## ✅ Checklist for Your First PR

Before submitting, make sure:

- [ ] Code works locally
- [ ] Followed the commit message format
- [ ] Filled out the PR template
- [ ] Linked the related issue (if any)
- [ ] Read the [Code of Conduct](../CODE_OF_CONDUCT.md)

---

## 🎉 After Your First Contribution

**Congratulations!** You're now an open-source contributor!

### What's Next?

1. **Try a bigger issue** - Look for `help wanted` labels
2. **Help others** - Answer questions in Discussions
3. **Spread the word** - Share HerHaven with friends
4. **Keep contributing** - The more you contribute, the better you get!

### Tips for Continued Success

- ⭐ **Star the repo** so you can find it easily
- 👀 **Watch the repo** to get notifications
- 🔔 **Subscribe to issues** you're interested in
- 💬 **Join discussions** to stay involved
- 🎯 **Set a goal** - Try contributing once a month!

---

## 🆘 Need Help?

**Stuck? Confused? Not sure what to do?**

1. 💬 Comment on the issue or PR
2. 📧 Email us at contact@herhaven.org
3. 💭 Start a [Discussion](https://github.com/yourusername/HerHaven/discussions)

**We're here to help you succeed!** 💜

---

## 🌟 Words of Encouragement

> *"Every expert was once a beginner. Every contribution, no matter how small, makes a difference. You belong here."*

**Thank you for being part of HerHaven!**

We're building technology that empowers women's health, and your contribution matters. 💜

---

**Ready?** Pick an issue and start contributing! 🚀

[View All Issues](https://github.com/yourusername/HerHaven/issues) | [Good First Issues](https://github.com/yourusername/HerHaven/labels/good%20first%20issue) | [Full Contributing Guide](../Contributing.md)

