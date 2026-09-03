// Workouts. Each one follows the coach's structure:
//   a couple of upper body + a couple of lower body + a full body or ab exercise.
//
// To make one harder, swap an exercise for its "harder" option from the exercise
// library and KEEP the reps the same (squats -> squat jumps, lunges -> DB lunges, etc).
//
// Fields:
//   name, tagline   shown on the workout card
//   where           "home" | "gym" | "anywhere"  (anywhere = no equipment, good for vacation)
//   level           "starter" | "tougher" | "weighted"
//   format          how to run it, e.g. "3 rounds, rest 60–90 sec between rounds"
//   rounds          number of times through the list
//   exercises       [{ id, sets?, reps?, note? }] — reps overrides the library default;
//                   sets defaults to 1 per round.
//
// NOTE: these are sample workouts built from the exercise list in the coach's email.
// Replace / add the ones from the AM Workout Plan doc.
window.WORKOUTS = [
  {
    id: "starter-anywhere",
    name: "Starter: no equipment",
    tagline: "The basic pattern. Do this anywhere, no gear needed.",
    where: "anywhere", level: "starter",
    format: "3 rounds. Rest 60–90 seconds between rounds.",
    rounds: 3,
    exercises: [
      { id: "pushup", reps: "10" },
      { id: "dip", reps: "10", note: "Bench dips off a chair are fine." },
      { id: "squat", reps: "15" },
      { id: "lunge", reps: "10 each leg" },
      { id: "burpee", reps: "8" }
    ]
  },
  {
    id: "vacation-hotel-room",
    name: "Vacation: hotel room",
    tagline: "Short, quiet, no jumping. Fits in a hotel room.",
    where: "anywhere", level: "starter",
    format: "3 rounds. Move straight from one exercise to the next, rest 60 seconds between rounds.",
    rounds: 3,
    exercises: [
      { id: "pushup", reps: "12" },
      { id: "step-up", reps: "10 each leg", note: "Use a chair or the edge of the bed." },
      { id: "lateral-lunge", reps: "8 each side" },
      { id: "squat", reps: "15" },
      { id: "plank", reps: "45 sec" }
    ]
  },
  {
    id: "tougher-bodyweight",
    name: "Tougher: bodyweight",
    tagline: "Same pattern as Starter, with the jumps swapped in.",
    where: "anywhere", level: "tougher",
    format: "3–4 rounds. Rest 90 seconds between rounds. Land soft on every jump.",
    rounds: 3,
    exercises: [
      { id: "pushup", reps: "12" },
      { id: "pullup", reps: "as many as you can", note: "No bar? Do 12 more pushups instead." },
      { id: "squat-jump", reps: "10" },
      { id: "lunge-jump", reps: "8 each leg" },
      { id: "burpee", reps: "10" }
    ]
  },
  {
    id: "gym-weighted-a",
    name: "Gym: weighted A",
    tagline: "Dumbbell version. Start with the weights listed, adjust up or down.",
    where: "gym", level: "weighted",
    format: "3 rounds. Rest 90 seconds between rounds. Weights should be light enough to hold the reps with good form.",
    rounds: 3,
    exercises: [
      { id: "single-arm-row", reps: "10 each arm" },
      { id: "db-push-press", reps: "10" },
      { id: "goblet-squat", reps: "12" },
      { id: "db-lunge", reps: "10 each leg" },
      { id: "thruster", reps: "8" }
    ]
  },
  {
    id: "gym-weighted-b",
    name: "Gym: weighted B",
    tagline: "Hamstrings, step-ups and a core finisher.",
    where: "gym", level: "weighted",
    format: "3 rounds. Rest 90 seconds between rounds.",
    rounds: 3,
    exercises: [
      { id: "front-raise", reps: "12" },
      { id: "pushup", reps: "15" },
      { id: "db-deadlift", reps: "12" },
      { id: "db-step-up", reps: "10 each leg" },
      { id: "goblet-lateral-lunge", reps: "8 each side" },
      { id: "dead-bug", reps: "10 each side" }
    ]
  },
  {
    id: "legs-and-core",
    name: "Legs + core focus",
    tagline: "Lower body day with the Nordic curls in. Slow and controlled.",
    where: "home", level: "tougher",
    format: "3 rounds. Rest 90 seconds between rounds. Nordics are slow, that's the point.",
    rounds: 3,
    exercises: [
      { id: "pushup", reps: "10" },
      { id: "nordic-curl", reps: "5 slow" },
      { id: "squat", reps: "15" },
      { id: "jump-up", reps: "6", note: "Step down, don't jump down." },
      { id: "side-plank", reps: "30 sec each side" },
      { id: "mountain-climber", reps: "30 sec" }
    ]
  }
];
