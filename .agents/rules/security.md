# Security & Protection Rules

- Protect secrets and credentials; never embed private tokens in client bundles.
- Validate all user-supplied inputs and parameters before submission or dispatch.
- Every external link opening in a new tab must declare `rel="noreferrer"` with `target="_blank"`.
- Run dependency vulnerability scans (`npm audit`) before shipping.
- Never weaken access boundaries or authentication policies to bypass errors.

