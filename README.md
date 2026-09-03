# Soccer workouts

A small static site that shows workout plans to training clients. Kids pick a workout,
see every exercise with reps and a starting weight, and tap "How to" to see the steps,
form cues, and a demo video next to the exercise.

No build step. Open `index.html` in a browser, or host it anywhere static
(GitHub Pages, Netlify, Vercel).

## Editing workouts and exercises

All content lives in two files:

- `data/exercises.js`: the exercise library (steps, cues, starting weight, default reps,
  harder/easier swaps, optional demo video).
- `data/workouts.js`: the workouts. Each references exercises by `id` and can override
  reps or add a note per exercise.

Both files have a comment at the top describing every field. Add a new exercise by
copying an existing block and giving it a unique `id`.

### Adding demo videos

Set the `video` field on an exercise to a YouTube link (watch, short, or youtu.be URL).
The site embeds it inline next to the exercise. Until a video is added, the site shows
a "Search for a demo" link instead, so nothing is broken while the library fills in.

## Hosting on GitHub Pages

Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
The site uses hash links (`#/workout/...`) so it works without any server config.

## Later ideas

- Mix-and-match builder: pick 2 upper + 2 lower + 1 full/core from the library and save
  it as a new workout. The data shape already supports this.
- Per-kid weight adjustments (the starting weights are one-size-fits-all right now).
