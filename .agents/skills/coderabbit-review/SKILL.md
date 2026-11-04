---
name: coderabbit-review
description: Independent Code Review via CodeRabbit CLI. Use this skill after completing features or bugfixes to run AI-powered code reviews on modified files, categorize findings by severity, identify security/performance risks, and generate actionable review reports.
---

# CodeRabbit Independent Code Reviewer

This skill orchestrates independent code reviews using the **CodeRabbit CLI** to catch logic bugs, security vulnerabilities, edge cases, and maintainability concerns before changes are committed or merged.

## Core Principle: Independent Quality Gate

CodeRabbit acts as an **independent, adversarial reviewer**. It does not assume the coding agent's work is correct. As the supervising agent:
1. Never blindly accept every CodeRabbit suggestion.
2. Verify each reported finding against the actual codebase and project rules.
3. Fix only confirmed, legitimate issues within the authorized scope.
4. Keep review iterations focused (maximum 2 review-fix passes).

---

## 1. Review Execution Workflow

### Step 1: Pre-Review Validation
Before invoking CodeRabbit:
1. Verify the code compiles without errors:
   ```bash
   npm run build
   ```
2. Verify existing tests pass:
   ```bash
   npm test
   ```

### Step 2: Trigger CodeRabbit Review
Run the review on uncommitted working changes or a specific diff:
```bash
# Review all uncommitted changes in current workspace
coderabbit review

# Review specific changed files
coderabbit review --file src/components/Hero.tsx
```

### Step 3: Categorize & Triage Findings
Group reported issues into standard severity tiers:
- **Critical:** Logic flaws, security vulnerabilities, auth/RLS bypass, unvalidated user input, data loss risks.
- **Major:** Memory leaks, performance bottlenecks, unnecessary re-renders, race conditions, missing error boundaries.
- **Minor:** TypeScript typing improvements, missing null checks, edge cases, code redundancy.
- **Info / Nit:** Formatting suggestions, variable naming, optional comment suggestions.

### Step 4: Fix Confirmed Issues
1. Apply fixes strictly to the confirmed issues.
2. Never touch unrelated files or refactor working code outside the task scope.
3. Re-run `npm run build` and tests to verify the fix did not introduce regressions.

---

## 2. Review Standards Checklist

When auditing CodeRabbit findings, evaluate against these criteria:
- [ ] **React & Next.js:** Hook dependencies, re-render triggers, memory leaks in `useEffect`, clean cleanup functions.
- [ ] **TypeScript:** No implicit `any`, strict null checks, proper generic types.
- [ ] **Security:** No client-side secret exposure, sanitized inputs, `rel="noreferrer"` on external links.
- [ ] **Supabase & DB:** Row Level Security (RLS) policies, query efficiency, error handling on failed RPCs.
- [ ] **Error Handling:** Graceful empty and error UI states; no unhandled promise rejections.

