<!-- Copilot instructions for the "Build Applications with GitHub Copilot Agent Mode" exercise -->
# Copilot instructions

This repository is an exercise workspace for building the OctoFit Tracker application. The guidance below is intentionally concise and practical so an AI coding agent can be immediately productive.

- Repo root: top-level project with `README.md`, `docs/` and exercise content. There is no existing backend/frontend code in this exercise scaffold — the goal is to scaffold and implement an OctoFit Tracker app.

Key facts an agent needs to know
- The exercise expects a two-part app: `backend/` (Django/Python) and `frontend/` (React). See `docs/octofit_story.md` for the product story and accepted features.
- When creating the backend use the Python virtualenv path: `octofit-tracker/backend/venv` and add dependencies to `octofit-tracker/backend/requirements.txt` (see project instructions in `.github/instructions`).
- Do not change directories in terminal commands — use absolute paths when running commands (this environment policy is strict).

Project structure to follow (expected)
```
octofit-tracker/
├── backend/
│   ├── venv/
│   ├── octofit_tracker/   # Django project/app code
├── frontend/              # React app
```

Developer workflows and commands
- Create the Python virtualenv (from workspace root):
```bash
python3 -m venv /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv
source /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv/bin/activate
pip install -r /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/requirements.txt
```
- Use Django ORM for data modeling and migrations. Do not run direct MongoDB scripts; the exercise suggests using `djongo`/`pymongo` only if the backend requires MongoDB compatibility.

Project-specific patterns and conventions
- Keep all OctoFit Tracker project files under the `octofit-tracker/` directory. This matches the exercise instructions and automated checks.
- Use absolute paths in automated commands. Example: run `manage.py` as `python /workspaces/.../octofit-tracker/backend/octofit_tracker/manage.py migrate`.
- The repo contains `docs/octofit_story.md` — use it for feature acceptance criteria and expected user flows.

Files to inspect when implementing features
- `docs/octofit_story.md` — product story and feature list (teams, activity logging, leaderboards).
- `README.md` — exercise meta-information and links.
- `.github/instructions/*.instructions.md` — contains precise setup requirements (virtualenv path, pip requirements, ports). Follow these instructions exactly when scaffolding the project.

Integration and external dependencies
- Expect to use Django (Django 4.1.7) and DRF, djongo/pymongo if targeting MongoDB. The `.github/instructions` file lists pinned package versions — add them to the backend `requirements.txt` if you create it.
- Forwarded ports documented by the exercise: 8000 (public), 3000 (public), 27017 (private). Do not propose other ports.

Examples and specifics the agent should follow
- When adding migrations or invoking Django management commands, always call Python using the full workspace path. Example:
```bash
python /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/octofit_tracker/manage.py makemigrations
python /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/octofit_tracker/manage.py migrate
```
- If you create a `requirements.txt` for the backend, include the pinned versions listed in `.github/instructions/octofit_tracker_setup_project.instructions.md`.

When editing files
- Preserve repository structure and do not rename the `octofit-tracker` top-level directory. Changes that move or rename that folder will likely break the exercise expectations.

What not to do
- Do not change directories in terminal commands; always use absolute paths.
- Do not open external network services or propose different forwarded ports than the documented 8000, 3000, 27017.

If uncertain or blocked
- Reference `docs/octofit_story.md` and `.github/instructions/*` for clarifications on product requirements and environment setup.
- Ask the human for missing details when required (for example, database choice or UI design constraints).

End of instructions — ask for feedback on any missing details.
