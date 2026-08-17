# Project Submission Report

## 1. Student Details

- **Full Name:** Laureen Ndanu Kyalo
- **GitHub Username:** NDANUKL
- **Email:** laureen.kyalo@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/clothing-store-167075/
  *(Example: https://is-project-2026.github.io/hospital-management-138141/)*

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/clothing-store-167075/commit/471dbf7
- **Why this one?** This is a strong example of a clean conventional commit because it uses the `feat:` type tag, has a clear subject (`Add mobile hamburger menu`), and it matches a single, well-defined user-facing feature. It is easy to understand from the Git history alone and directly corresponds to the issue that was being solved.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/clothing-store-167075/commit/dc779c9
- **What happened and how did you recover?** During the responsive styling phase, I identified layout issues that only became obvious after testing the site on smaller screens. The nav and grid did not behave consistently across breakpoints, so I fixed the weakness in a dedicated `fix:` commit and verified the responsive adjustments before finalising the project.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/clothing-store-167075/issues/7
- **What did you check before merging?** I reviewed the issue scope and ensured the mobile nav change matched the acceptance criteria for a responsive experience. I also checked that the HTML and CSS worked together consistently and that the feature was isolated enough to be understood clearly in the history.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would start by creating smaller issue-based branches earlier and keep each branch focused on a single feature or style change. That would make the review process cleaner and allow for easier rollback if a specific change caused problems.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/clothing-store-167075/issues/7

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

<img width="1560" height="588" alt="image" src="https://github.com/user-attachments/assets/792be663-5cb9-4226-9c19-cb1d17bc5651" />

* **Caption:** The project used milestone-based issue tracking for the storefront build, including feature work such as the catalogue, responsive styling, mobile navigation, and bag functionality, each mapped to a specific issue and resolved through the project workflow.

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

<img width="1914" height="835" alt="image" src="https://github.com/user-attachments/assets/1424a014-8f97-4227-8313-6f711c7a6f5b" />

* **Caption:** The board reflected a simple issue flow from planning to completion, with tasks moving from To Do into In Progress and finally Done as the storefront features were implemented and validated.

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

<img width="1919" height="811" alt="image" src="https://github.com/user-attachments/assets/a6cbd906-b79d-499e-bc8e-24d2ec0aa4c5" />

* **Caption:** The repository followed a conventional branch naming pattern such as `feat/bag-page`, while the main branch remained protected and merged only through pull requests, keeping the workflow issue-linked and reviewable.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

[PASTE YOUR PULL REQUEST SCREENSHOT DIRECTLY HERE]

* **Caption:** The completed pull request for the bag feature is a clear example of issue traceability: a feature branch was created, the branch was merged into the protected main branch through a PR, and the final work is tied to the corresponding issue and commit history.

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** [Name the type of conflict cause from the lecture]

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

[PASTE SCREENSHOT OF ATTEMPTED MERGE / TERMINAL WARNING HERE]

* **Caption:** [Describe which two branches collided and the warning received]

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

[PASTE SCREENSHOT OF RAW CONFLICT MARKERS HERE]

* **Caption:** [Explain what caused the dispute and your reasoning for the final version]

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

[PASTE SCREENSHOT OF CLEAN RESOLUTION HERE]

* **Caption:** [Describe the final state after resolution]

---

### Conflict 2 — Different Cause

**What cause did you use?** [Name the type of conflict cause — must be different from Conflict 1]

**Why does this cause trigger a conflict?** [1–2 sentences explaining the mechanism]

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 2 HERE]

* **Caption:** [Brief description of the conflicting branches and file]

---

### Conflict 3 — Different Cause

**What cause did you use?** [Name the type of conflict cause — must be different from Conflicts 1 and 2]

**Why does this cause trigger a conflict?** [1–2 sentences explaining the mechanism]

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 3 HERE]

* **Caption:** [Brief description of the conflicting branches and file]

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
