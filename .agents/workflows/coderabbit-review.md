# Independent Code Review Workflow (GSD + CodeRabbit Gate)

This workflow bridges **GSD (Get Stuff Done)** task completion with an independent **CodeRabbit** review pass.

---

## The 10-Step Feature Completion Protocol

Whenever a significant feature or milestone plan is completed:

```
[1. GSD Implementation & Verify] ➔ [2. Unit/Integration Tests] ➔ [3. CodeRabbit Review]
                                                                        ↓
[6. Verify Genuine Findings]    ←  [5. Categorize Severity]   ←  [4. Ingest Issues]
        ↓
[7. Apply Scoped Fixes]        ➔ [8. Re-test & Build]        ➔ [9. Secondary Review Pass]
                                                                        ↓
                                                              [10. Final Review Report]
```

### Detailed Steps:
1. **Verify Implementation:** Confirm all requirements in GSD `PLAN.md` or task specifications are addressed.
2. **Execute Local Tests:** Run `npm run build` and test suites to verify baseline health.
3. **Run CodeRabbit:** Execute `coderabbit review` on the staged/unstaged diff.
4. **Ingest Issues:** Collect all reported line items.
5. **Categorize Findings:** Classify by severity (Critical, Major, Minor, Info).
6. **Verify Legitimacy:** Independently assess whether each finding is a true issue or an AI hallucination/false positive.
7. **Apply Scoped Fixes:** Edit only the confirmed problem areas. Never touch working, unrelated files.
8. **Re-Test:** Run `npm run build` to confirm 0 compilation errors and no regressions.
9. **Secondary Pass:** If critical fixes were made, re-run `coderabbit review` to verify resolution.
10. **Compile Final Report:** Deliver a structured summary with issue descriptions, severities, fixes applied, and remaining risks.

---

## Final Review Report Template

```markdown
### CodeRabbit Independent Review Report

| Severity | File / Symbol | Finding Description | Verdict | Resolution Applied |
|---|---|---|---|---|
| Critical | `src/...` | Unsanitized input / Logic error | Valid | Sanitized with regex validation |
| Major    | `src/...` | Potential memory leak in effect | Valid | Added cleanup listener in useEffect |
| Minor    | `src/...` | Missing null check on profile prop | Valid | Added optional chaining fallback |
| Info     | `src/...` | Suggested alternative naming | Dismissed | Preserved project naming convention |

**Result:** Verified & Clean.
```

