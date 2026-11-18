# SkillRoute

A learning site where beginners pick a digital skill and follow a route of lessons, videos and AI-reviewed assignments.

## Files

- `index.html`, `styles.css`, `app.js`: the website
- `config.js`: site name (change it here)
- `data/skills.js`: all course content (skills, lessons, videos, assignments)
- `netlify/functions/vet.mjs`: the AI reviewer (runs on Netlify, keeps your API key secret)

## Deploy on Netlify

1. Push this folder to a new GitHub repository.
2. In Netlify: Add new site > Import an existing project > pick the repo. No build command is needed.
3. In Netlify: Site configuration > Environment variables, add `ANTHROPIC_API_KEY` with your key from console.anthropic.com.
4. Optional: add `ANTHROPIC_MODEL` to choose a different model.
5. Redeploy. Open any lesson and submit an assignment to test the reviewer.

## Editing content

Open `data/skills.js`. Each skill has 4 modules; each module has `lesson` paragraphs, `keyPoints`, a `video`, and an `assignment`.
To embed a specific YouTube video, add `videoId: "abc123XYZ"` inside that module's `video` object.

## Notes

- Progress is saved in each learner's browser (localStorage). For accounts and saved progress across devices, add Supabase auth later.
- The reviewer accepts images, PDFs, code/text files, links and written explanations. For big projects, learners should share a GitHub link.
