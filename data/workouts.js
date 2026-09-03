// Workouts, taken from the coach's "DB Workout Plan" doc. Names, exercises, order,
// reps and structure are the doc's. Don't add workouts here that the coach hasn't written.
//
// Fields:
//   group      section on the home page: "Staples" or "Sore legs days"
//   name       workout name (the doc's heading)
//   format     the doc's instructions for how to run it, in the coach's words
//   structure  short label for the card, e.g. "5 rounds"
//   equipment  what you need
//   exercises  [{ id, reps, note? }]  reps is free text ("10", "1 min", "card number", "7 · 9 · 11 · 13 · 15")
window.WORKOUTS = [
  {
    id: "basic",
    group: "Staples",
    name: "Basic",
    format: "5 exercises, 5 rounds, 10 reps of everything. Time yourself and get through as quickly as possible.",
    structure: "5 rounds · 10 reps each",
    equipment: "A chair or bench",
    exercises: [
      { id: "step-up", reps: "10", note: "Step up onto a chair." },
      { id: "situp", reps: "10" },
      { id: "pushup", reps: "10" },
      { id: "lunge", reps: "10" },
      { id: "dip", reps: "10", note: "Dips on a bench or chair." }
    ]
  },
  {
    id: "10-to-1",
    group: "Staples",
    name: "10-1",
    format: "First round do each exercise 10 times, second round 9, third 8, 7 ..... all the way to 1.",
    structure: "10 rounds · 10 → 1 reps",
    equipment: "Nothing",
    exercises: [
      { id: "squat", reps: "10 → 1" },
      { id: "v-up", reps: "10 → 1" },
      { id: "burpee", reps: "10 → 1" },
      { id: "walking-lunge", reps: "10 → 1 each leg" },
      { id: "pushup", reps: "10 → 1" }
    ]
  },
  {
    id: "fight-gone-bad",
    group: "Staples",
    name: "Fight gone bad",
    format: "Do each exercise for 1 min of max reps, rest for 1 min after you've completed ALL exercises, repeat that 5x.",
    structure: "5 rounds · 1 min each",
    equipment: "A bench for the hip thrusts",
    exercises: [
      { id: "squat", reps: "1 min max reps" },
      { id: "mountain-climber", reps: "1 min max reps" },
      { id: "hip-thrust", reps: "1 min max reps", note: "Back on a bench." },
      { id: "russian-twist", reps: "1 min max reps" },
      { id: "pushup", reps: "1 min max reps" },
      { id: "rest", reps: "1 min" }
    ]
  },
  {
    id: "deck-of-cards",
    group: "Staples",
    name: "Deck of cards",
    format: "Each suit represents an exercise, the number on the card is how many reps you do. Jacks = 11, queens = 12, kings = 13. ALL aces mean 14 burpees.",
    structure: "Whole deck",
    equipment: "A deck of cards + a chair",
    exercises: [
      { id: "lunge", reps: "card number", note: "Hearts." },
      { id: "crunch", reps: "card number", note: "Diamonds." },
      { id: "squat", reps: "card number", note: "Clubs." },
      { id: "dip", reps: "card number", note: "Spades. Dips on a chair." },
      { id: "burpee", reps: "14 per ace", note: "Any ace, any suit = 14 burpees." }
    ]
  },
  {
    id: "100-200-300",
    group: "Staples",
    name: "100, 200, 300",
    format: "Complete 100 pushups, 200 situps, 300 squats. Do them in any order you want (i.e. 10 pushups, 20 situps, 30 squats x10), as quickly as possible.",
    structure: "600 total reps · any order",
    equipment: "Nothing",
    exercises: [
      { id: "pushup", reps: "100 total" },
      { id: "situp", reps: "200 total" },
      { id: "squat", reps: "300 total" }
    ]
  },
  {
    id: "chair-dip-pushup-situp",
    group: "Sore legs days",
    name: "Chair dip / pushup / situp",
    format: "Complete the following sequence of reps (the first number in the sequence corresponds to dips, 2nd to pushups, 3rd to situps): 7, 8, 15 · 9, 11, 20 · 11, 14, 25 · 13, 17, 30 · 15, 20, 35.",
    structure: "5 rounds · climbing reps",
    equipment: "A chair",
    exercises: [
      { id: "dip", reps: "7 · 9 · 11 · 13 · 15", note: "Dips on a chair." },
      { id: "pushup", reps: "8 · 11 · 14 · 17 · 20" },
      { id: "situp", reps: "15 · 20 · 25 · 30 · 35" }
    ]
  },
  {
    id: "core-5-rounds",
    group: "Sore legs days",
    name: "Core: 5 rounds",
    format: "5 rounds.",
    structure: "5 rounds",
    equipment: "Nothing",
    exercises: [
      { id: "russian-twist", reps: "50" },
      { id: "leg-lift", reps: "20" },
      { id: "bicycle-crunch", reps: "50" },
      { id: "heel-touch", reps: "50" },
      { id: "plank", reps: "1 min" }
    ]
  }
];

// Copy from the doc, shown on the home page.
