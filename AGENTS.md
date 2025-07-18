# AGENTS.md

---

# Weather-App

## 1. Agent Workflow

1. **Read this AGENTS.md and review the relevant code before making changes.**
2. **Tackle one task or feature at a time:**

   * Only modify the code related to the current issue or feature.
   * Do **not** include unrelated cleanups, refactors, or improvements, even if you notice them incidentally.
3. **If adding or changing behavior,**

   * Include or update tests where appropriate.
   * Add comments to explain non-obvious logic.
4. **Open only one pull request or code suggestion per topic.**
5. **Never commit secrets, API keys, or personal information.**
6. **If you’re unsure about context or requirements:**

   * Leave a comment or open a suggestion instead of making uncertain changes.

> **Principle:** Code should always be clear, focused, and maintainable. Each change must be easy to understand and review in isolation.

---

## 2. Code & Commit Guidelines

* **Atomic Commits:**

  * Each commit should represent one logical change only.
  * Never bundle unrelated changes.
* **Commit Message Format:**

  ```
  [type]: short summary (< 80 chars)

  WHY: Brief context  
  WHAT: What was changed  
  HOW: Any special reviewer notes
  ```
* **Clarity Over Cleverness:**

  * Prefer explicit, straightforward code and comments.
  * Avoid “cleanup” or refactor changes outside the current task.

---

## 3. Security & Environment

* **Never commit actual secrets or credentials.**
* Use environment variables for configuration (see `.env.example`).
* Always validate and sanitize any user-supplied data in the backend.

---

## 4. Documentation & Suggestions

* Update `README.md` or code comments if your change affects usage or developer understanding.
* If context is missing, leave an explanatory comment or suggestion instead of guessing.

---

**End of AGENTS.md**

---
