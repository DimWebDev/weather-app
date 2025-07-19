# Branching Best Practices

## 1. Branch Naming Conventions

- Use clear, descriptive names that reflect the purpose of the branch.
- Recommended formats:
  - `feature/issue-XX-short-description` (for new features)
  - `fix/issue-XX-bug-description` (for bug fixes)
  - `chore/issue-XX-task` (for maintenance or chores)
  - `docs/issue-XX-doc-update` (for documentation changes)
- Replace `XX` with the related issue number when possible.
- Use hyphens to separate words for readability.

**Examples:**
- `feature/issue-10-weather-summary`
- `fix/issue-12-api-error`
- `docs/issue-13-update-readme`

## 2. Branching Workflow

- **Always specify the source branch** when creating a new branch (e.g., `main`, `develop`, or another feature branch).
- If the source branch is not specified, contributors must be prompted to clarify which branch to use as the base before proceeding.
- Always branch from the latest `main` (or `develop`, if used), unless another base is explicitly required.
- Keep branches focused on a single issue or feature.
- Regularly pull/rebase from the source branch to keep your branch up to date.
- Push your branch to the remote repository frequently.
- Delete branches after merging to keep the repo clean.

## 3. Pull Request (PR) Guidelines

- Open a PR as soon as you have a working draft (use "Draft PR" if not ready for review).
- Reference the related issue number in the PR description.
- Ensure your branch passes all tests and lint checks before requesting review.
- Keep PRs focused and avoid mixing unrelated changes.


---

For more details, see AGENTS.md.
