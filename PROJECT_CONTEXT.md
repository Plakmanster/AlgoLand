# AlgoLand — Project Context

**Project:** Learn Algorithms Junior / AlgoLand  
**Audience:** Primary-school children  
**Stack:** React, TypeScript, Vite  
**Repository:** https://github.com/Plakmanster/AlgoLand  
**Deployment:** Existing Vercel project, connected to GitHub (`master` was used for production at v8.2.0).  
**Document updated:** 2026-11-14

## 1. Vision

AlgoLand is a colorful, story-driven environment for learning algorithms. The student enters a magical world and eventually explores the **Castle of Knowledge (Κάστρο της Γνώσης)**. Visual design, narrative and pedagogy must work together; the product should feel like an interactive learning adventure, not a conventional worksheet website.

## 2. Current baseline and versioning

- **v8.0:** Dashboard redesign completed.
- **v8.1:** Welcome / AlgoLand introduction completed.
- **v8.2.0:** Stable Git tag, commit `fd3daf9`; deployed successfully to Vercel and tested on desktop and mobile.
- **v8.2.1 (proposed):** Publish the currently approved avatar-selection layout adjustment. **Do not mark it published or tagged until deployment is verified.**
- **Next:** Castle interior visual system; AlgoBot + selected avatar companionship; enriched Theory, Activity, Quiz, Results and Certificate.

Preserve the `v8.2.0` tag as a recovery point. Use a development/fix branch where practical, test before merging into the Vercel production branch, and create a new tag only after verification.

## 3. Existing student flow

**Welcome → Avatar Selection → Dashboard → Theory / Activity / Quiz / Results**.

- Keep the established Welcome and Dashboard designs unless the user explicitly requests changes.
- `studentName` is held in React state; avatar selection adds an `avatarId` state.
- Avatar selection is implemented with real clickable React/CSS cards, not a flattened image.
- Selected avatar should eventually be reflected consistently in subsequent screens and in achievements/certificates.
- State is currently transient; persistent progress is a future feature, not yet guaranteed.

## 4. Avatar-selection art and layout

Assets:

- `public/assets/avatar-selection-background.webp`
- `public/assets/avatars/ExplorerMax.png`
- `public/assets/avatars/TechNova.png`
- `public/assets/avatars/RoboCadet.png`
- `public/assets/avatars/WizardOfLogic.png`

Avatar roles/colors: Explorer Max (blue, exploration); Tech Nova (purple, creative technology); RoboCadet (green, logical thinking); Wizard of Logic (orange, imaginative reasoning).

**Most recent user-approved direction:** Keep the fantasy landscape, the speech/title bubble near its original position but smaller, and the four avatar cards *inside the landscape*, moved low enough **not to cover the purple “Πέτυχε” sign**. The user accepted the current result as good enough and asked to lock/publish it; avoid another unsolicited redesign. The mobile layout previously worked as a 2×2 grid. Do not crop or replace the artwork merely to fit the cards. The exact latest local files must be checked before publishing.

## 5. Future world: inside the Castle of Knowledge

Each screen should share the same coherent, polished, playful fantasy 3D/storybook visual language as AlgoLand, with distinct castle-interior backgrounds:

| Screen | Concept | Educational focus |
|---|---|---|
| Theory | Magical Library of Algorithms | More complete explanations, illustrated everyday examples, short checks for understanding |
| Activity | Puzzle Workshop | More scenarios, hands-on sequencing, meaningful hints |
| Quiz | Hall of Challenges | Varied question types, explanations for correct and incorrect answers, supportive feedback |
| Results / Certificate | Hall of Achievements | Celebrate effort, skills, growth, progress, reusable avatar artwork |

The screenshots of current Theory, Activity, Quiz and Dashboard/Results are **legacy visual references**, not the desired final style. Preserve functional logic where appropriate while modernizing the experience.

## 6. Two companions throughout the journey — essential requirement

The student travels with **both AlgoBot and their own selected avatar** in all educational rooms:

- **AlgoBot:** Educational guide; explains, gives hints, responds to misconceptions, offers constructive feedback.
- **Selected avatar:** Narrative partner; encourages, participates in the adventure, celebrates progress and provides personal connection.
- Always display the avatar actually selected by the student (Explorer Max / Tech Nova / RoboCadet / Wizard of Logic), never hard-code a default character in its place.
- Coordinate their dialogue so it is contextual, concise, age-appropriate and not distracting. Do not crowd the screen with simultaneous speech bubbles.
- Feedback should explain *why* an answer works or does not work; avoid punitive framing.

## 7. Planned product improvements

- Context-aware AlgoBot dialogues and avatar interactions.
- Enriched theory, activity scenarios and quiz formats.
- Achievements, XP, progress tracking, sounds (with accessible controls), themes.
- Save/resume student progress with privacy appropriate for children.
- Personalized PDF certificate using the selected avatar.
- Responsive layout, keyboard accessibility, readable Greek typography, sensible animation/reduced-motion behavior.

These are **plans**, not claims of implemented functionality.

## 8. Working agreements

1. Work incrementally and test locally with `npm run build` and browser/mobile checks.
2. Do not change approved Welcome, Dashboard, character artwork or other stable visuals without explicit approval.
3. Keep the Vercel production deployment stable while iterating; avoid pushing experiments directly to `master`.
4. Never commit local backups, ZIP distributions, `node_modules`, build artifacts or secrets.
5. Prefer complete, copy-ready React/TypeScript/CSS files with explicit destination paths and clear Git instructions.
6. Confirm Git branch, diff and Vercel deployment status before declaring a release published.

## 9. Immediate next steps

1. Verify which branch contains the approved latest avatar layout and which files changed.
2. Build and visually test the current local version.
3. Commit only the approved changes plus this context document; push and confirm Vercel Production is **Ready**.
4. Optionally tag the verified release `v8.2.1` (if unused).
5. Next session: establish the Castle of Knowledge interior art direction and build the first new room, with both companions.
