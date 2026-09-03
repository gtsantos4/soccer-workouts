// Exercise library. Every workout references exercises by `id`.
//
// Fields:
//   name        display name
//   category    "lower" | "upper" | "full" | "core"
//   tier        "bw" (bodyweight) | "tougher-bw" | "weighted"
//   equipment   plain-English list of what you need
//   startWeight starting weight suggestion for kids who don't know (from coach's email)
//   reps        default rep guidance when this exercise is used in a workout
//   steps       how to do it, in order
//   cues        short reminders to keep form good
//   harder      id of the exercise to swap in to make it tougher (keep reps the same)
//   easier      id of the exercise to swap in if it's too hard
//   video       optional URL of a demo video (YouTube watch or short link). Leave "" and
//               the site shows a "find a demo" search link instead. Fill these in with
//               videos you trust and they will play inline next to the exercise.
window.EXERCISES = [
  // ---------- LOWER BODY ----------
  {
    id: "squat", name: "Squats", category: "lower", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "10–15",
    steps: [
      "Stand with feet about shoulder-width apart, toes turned out a little.",
      "Push your hips back and bend your knees like you are sitting into a chair.",
      "Go down until your thighs are about parallel to the floor (or as low as you can keep your heels down).",
      "Drive through your whole foot to stand back up tall."
    ],
    cues: ["Chest up, eyes forward", "Knees track over your toes, don't let them cave in", "Heels stay on the floor"],
    harder: "squat-jump", easier: "", video: ""
  },
  {
    id: "lunge", name: "Lunges", category: "lower", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "8–12 each leg",
    steps: [
      "Stand tall, then take a big step forward with one foot.",
      "Lower straight down until your back knee almost touches the floor. Both knees should be near 90°.",
      "Push off the front foot to come back to standing.",
      "Switch legs. One rep = one lunge on each side."
    ],
    cues: ["Front knee stays over the ankle, not past the toes", "Torso stays upright", "Step long enough that your front shin stays vertical"],
    harder: "lunge-jump", easier: "squat", video: ""
  },
  {
    id: "step-up", name: "Step-ups", category: "lower", tier: "bw",
    equipment: "A sturdy box, bench or bottom stair (knee height or a bit lower)", startWeight: "Bodyweight", reps: "8–12 each leg",
    steps: [
      "Put one whole foot flat on the box.",
      "Drive through that foot to stand all the way up on the box. Don't push off the bottom foot.",
      "Lower back down slowly and with control.",
      "Do all reps on one leg, then switch."
    ],
    cues: ["Whole foot on the box, heel included", "Control the way down, don't drop", "Stand fully tall at the top"],
    harder: "jump-up", easier: "squat", video: ""
  },
  {
    id: "lateral-lunge", name: "Lateral lunges", category: "lower", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "8–10 each side",
    steps: [
      "Stand tall with feet together.",
      "Take a big step directly out to the side. Keep both feet pointing forward.",
      "Sit your hips back and bend the stepping leg. The other leg stays straight.",
      "Push off the bent leg to return to the start. Switch sides."
    ],
    cues: ["Chest up, hips back", "Both feet flat and pointing forward", "The straight leg really stays straight"],
    harder: "goblet-lateral-lunge", easier: "squat", video: ""
  },
  {
    id: "nordic-curl", name: "Nordic curls", category: "lower", tier: "bw",
    equipment: "A partner to hold your ankles, or a couch/bar to hook your heels under. A pad for your knees.", startWeight: "Bodyweight", reps: "4–6 (slow)",
    steps: [
      "Kneel on a pad with your ankles held down.",
      "Keep your body in a straight line from knees to head.",
      "Lower yourself forward as SLOWLY as you can, fighting with your hamstrings.",
      "When you can't hold it anymore, catch yourself with your hands and push back up to the start."
    ],
    cues: ["Hips stay straight, don't bend at the waist", "Slow is the whole point, 3–5 seconds down", "It's normal to only get part way down at first"],
    harder: "", easier: "", video: ""
  },
  {
    id: "squat-jump", name: "Squat jumps", category: "lower", tier: "tougher-bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "8–10",
    steps: [
      "Do a normal squat.",
      "From the bottom, explode up and jump as high as you can.",
      "Land softly on the balls of your feet and sink right back into the next squat."
    ],
    cues: ["Land quiet, like a cat", "Knees don't cave in on the landing", "Full squat depth before every jump"],
    harder: "", easier: "squat", video: ""
  },
  {
    id: "lunge-jump", name: "Lunge jumps", category: "lower", tier: "tougher-bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "6–8 each leg",
    steps: [
      "Start at the bottom of a lunge.",
      "Jump straight up and switch your legs in the air.",
      "Land softly in a lunge with the other leg forward and go straight into the next jump."
    ],
    cues: ["Soft landings", "Torso stays upright, don't lean forward", "Back knee gets close to the floor each time"],
    harder: "", easier: "lunge", video: ""
  },
  {
    id: "jump-up", name: "Jump-ups", category: "lower", tier: "tougher-bw",
    equipment: "A sturdy box or bench (start low)", startWeight: "Bodyweight", reps: "6–8",
    steps: [
      "Stand facing the box, feet shoulder-width apart.",
      "Swing your arms back and dip into a quarter squat.",
      "Swing your arms forward and jump up onto the box with both feet.",
      "Land soft in a squat position on top, stand up tall, then STEP down (don't jump down)."
    ],
    cues: ["Land on your whole foot, not your toes hanging off the edge", "Step down every time to save your knees", "Pick a height you can land softly on"],
    harder: "", easier: "step-up", video: ""
  },
  {
    id: "goblet-squat", name: "Goblet squats", category: "lower", tier: "weighted",
    equipment: "One dumbbell", startWeight: "~20 lb dumbbell", reps: "10–12",
    steps: [
      "Hold one dumbbell vertically against your chest with both hands cupping the top end.",
      "Feet shoulder-width apart, toes out a little.",
      "Squat down, keeping the dumbbell tight to your chest and your elbows inside your knees.",
      "Drive through your feet to stand back up."
    ],
    cues: ["Elbows point down, dumbbell touches your chest", "Chest stays up", "Heels down"],
    harder: "", easier: "squat", video: ""
  },
  {
    id: "goblet-lateral-lunge", name: "Goblet lateral lunges", category: "lower", tier: "weighted",
    equipment: "One dumbbell", startWeight: "~20 lb dumbbell", reps: "8–10 each side",
    steps: [
      "Hold one dumbbell at your chest, goblet style.",
      "Step out wide to one side and sit your hips back into that leg.",
      "Keep the other leg straight and both feet pointing forward.",
      "Push back to standing and switch sides."
    ],
    cues: ["Dumbbell stays glued to your chest", "Chest up, hips back", "Both feet flat"],
    harder: "", easier: "lateral-lunge", video: ""
  },
  {
    id: "db-lunge", name: "DB lunges", category: "lower", tier: "weighted",
    equipment: "Two dumbbells", startWeight: "~10 lb dumbbells", reps: "8–12 each leg",
    steps: [
      "Hold a dumbbell in each hand at your sides.",
      "Step forward into a lunge and lower until your back knee almost touches the floor.",
      "Push off the front foot to come back to standing.",
      "Switch legs."
    ],
    cues: ["Arms stay relaxed and straight, don't swing the weights", "Torso upright", "Front knee over the ankle"],
    harder: "", easier: "lunge", video: ""
  },
  {
    id: "db-step-up", name: "DB step-ups", category: "lower", tier: "weighted",
    equipment: "Two dumbbells + a box or bench", startWeight: "~10 lb dumbbells", reps: "8–10 each leg",
    steps: [
      "Hold a dumbbell in each hand at your sides.",
      "Put one whole foot on the box and drive through it to stand up on top.",
      "Lower back down slowly.",
      "Do all reps on one leg, then switch."
    ],
    cues: ["Don't push off the bottom foot", "Control the way down", "Stand tall at the top"],
    harder: "", easier: "step-up", video: ""
  },
  {
    id: "db-deadlift", name: "DB deadlifts", category: "lower", tier: "weighted",
    equipment: "Two dumbbells", startWeight: "~10 lb dumbbells", reps: "10–12",
    steps: [
      "Stand with feet hip-width apart, a dumbbell in each hand in front of your thighs.",
      "Push your hips BACK (not down) and let the dumbbells slide down the front of your legs.",
      "Keep your back flat and knees slightly bent. Go down until you feel a stretch in your hamstrings.",
      "Squeeze your glutes and drive your hips forward to stand back up."
    ],
    cues: ["Flat back the whole time, no rounding", "Weights stay close to your legs", "It's a hip hinge, not a squat"],
    harder: "", easier: "", video: ""
  },
  {
    id: "walking-lunge", name: "Walking lunges", category: "lower", tier: "bw",
    equipment: "Some open floor", startWeight: "Bodyweight", reps: "10 each leg",
    steps: [
      "Step forward into a lunge, back knee almost touching the floor.",
      "Instead of pushing back, drive up through the front foot and bring the back foot forward into the next lunge.",
      "Keep walking forward, alternating legs."
    ],
    cues: ["Torso upright", "Front knee over the ankle", "Take your time between steps, don't rush the landing"],
    harder: "lunge-jump", easier: "lunge", video: ""
  },
  {
    id: "hip-thrust", name: "Hip thrust (bodyweight)", category: "lower", tier: "bw",
    equipment: "A bench or chair to rest your upper back on", startWeight: "Bodyweight", reps: "12–15",
    steps: [
      "Sit on the floor with your upper back against a bench, knees bent, feet flat.",
      "Push through your heels and squeeze your glutes to lift your hips until your body is flat from shoulders to knees.",
      "Pause at the top, then lower with control."
    ],
    cues: ["Chin tucked, eyes forward, not up at the ceiling", "Squeeze your glutes hard at the top", "Shins vertical at the top"],
    harder: "", easier: "", video: ""
  },

  // ---------- FULL BODY ----------
  {
    id: "burpee", name: "Burpees", category: "full", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "8–10",
    steps: [
      "From standing, squat down and put your hands on the floor.",
      "Jump your feet back into a push-up position.",
      "Do a push-up (or skip it to make it easier).",
      "Jump your feet back in to your hands, then jump straight up with your arms overhead."
    ],
    cues: ["Body stays in a straight line in the push-up position", "Land soft", "Keep a steady pace instead of going all-out then dying"],
    harder: "thruster", easier: "", video: ""
  },
  {
    id: "thruster", name: "Thrusters", category: "full", tier: "weighted",
    equipment: "Two dumbbells", startWeight: "~15 lb dumbbells", reps: "8–10",
    steps: [
      "Hold a dumbbell at each shoulder, elbows in front of you.",
      "Squat all the way down, keeping the dumbbells on your shoulders.",
      "Drive up out of the squat and use that momentum to press the dumbbells straight overhead.",
      "Lower the dumbbells back to your shoulders and go straight into the next squat."
    ],
    cues: ["One smooth movement: squat, stand, press", "Lock your arms out at the top", "Chest up in the squat"],
    harder: "", easier: "burpee", video: ""
  },

  // ---------- UPPER BODY ----------
  {
    id: "pushup", name: "Pushups", category: "upper", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "8–15",
    steps: [
      "Start in a plank: hands a bit wider than your shoulders, body in a straight line.",
      "Lower your chest toward the floor, elbows pointing back at about 45°.",
      "Go down until your chest is a fist's height from the floor.",
      "Push back up to straight arms."
    ],
    cues: ["Squeeze your glutes so your hips don't sag", "Elbows at 45°, not flared out wide", "Too hard? Put your hands on a bench or do them from your knees"],
    harder: "dip", easier: "", video: ""
  },
  {
    id: "pullup", name: "Pullups", category: "upper", tier: "bw",
    equipment: "A pull-up bar", startWeight: "Bodyweight", reps: "as many as you can (3–8)",
    steps: [
      "Hang from the bar with hands a bit wider than your shoulders, palms facing away.",
      "Pull your shoulder blades down, then pull your chest toward the bar.",
      "Get your chin over the bar.",
      "Lower all the way down to straight arms with control."
    ],
    cues: ["No kicking or swinging", "All the way down every rep", "Can't do one yet? Jump up and lower yourself down as slowly as you can (5 seconds)"],
    harder: "", easier: "single-arm-row", video: ""
  },
  {
    id: "dip", name: "Dips", category: "upper", tier: "bw",
    equipment: "Parallel bars, or a sturdy chair/bench for bench dips", startWeight: "Bodyweight", reps: "8–12",
    steps: [
      "Support yourself on straight arms on the bars (or hands on a bench behind you, feet out in front).",
      "Bend your elbows and lower yourself until your upper arms are about parallel to the floor.",
      "Press back up to straight arms."
    ],
    cues: ["Lean slightly forward on bars", "Elbows point back, not out", "Shoulders stay down away from your ears"],
    harder: "", easier: "pushup", video: ""
  },
  {
    id: "front-raise", name: "Front raises", category: "upper", tier: "weighted",
    equipment: "One plate or dumbbell", startWeight: "~10 lb plate or dumbbell", reps: "10–12",
    steps: [
      "Stand tall holding a plate (or a dumbbell in each hand) in front of your thighs.",
      "With straight-ish arms, raise the weight in front of you up to shoulder height.",
      "Pause for a second at the top.",
      "Lower slowly back to the start."
    ],
    cues: ["Don't swing or lean back to lift it", "Only go to shoulder height", "Slow on the way down"],
    harder: "db-push-press", easier: "", video: ""
  },
  {
    id: "single-arm-row", name: "Single arm row", category: "upper", tier: "weighted",
    equipment: "One dumbbell + a bench", startWeight: "~30 lb dumbbell", reps: "8–12 each arm",
    steps: [
      "Put one hand and the same-side knee on a bench. Other foot on the floor. Back flat.",
      "Hold the dumbbell in your free hand with a straight arm.",
      "Pull the dumbbell up to your hip, driving your elbow back and up.",
      "Lower slowly. Do all reps, then switch sides."
    ],
    cues: ["Elbow goes back toward your hip, not out to the side", "Don't twist your torso to lift it", "Back stays flat like a table"],
    harder: "pullup", easier: "", video: ""
  },
  {
    id: "db-push-press", name: "DB push press", category: "upper", tier: "weighted",
    equipment: "Two dumbbells", startWeight: "~15 lb dumbbells", reps: "8–10",
    steps: [
      "Hold a dumbbell at each shoulder, feet shoulder-width apart.",
      "Dip a few inches by bending your knees (a quarter squat).",
      "Drive up with your legs and press the dumbbells straight overhead in one motion.",
      "Lower back to your shoulders with control."
    ],
    cues: ["The dip is small and quick", "Finish with arms locked out overhead, biceps by your ears", "Don't lean back, keep your ribs down"],
    harder: "thruster", easier: "front-raise", video: ""
  },

  // ---------- CORE / ABS (from the DB Workout Plan doc) ----------
  {
    id: "situp", name: "Sit ups", category: "core", tier: "bw",
    equipment: "Nothing (hook your feet under something if it helps)", startWeight: "Bodyweight", reps: "10–20",
    steps: [
      "Lie on your back, knees bent, feet flat on the floor.",
      "Cross your arms over your chest or put your hands by your ears.",
      "Curl up until your chest reaches your knees.",
      "Lower back down with control until your shoulder blades touch the floor."
    ],
    cues: ["Don't pull on your neck", "Control the way down", "Feet stay on the floor"],
    harder: "v-up", easier: "crunch", video: ""
  },
  {
    id: "crunch", name: "Crunches", category: "core", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "15–20",
    steps: [
      "Lie on your back, knees bent, feet flat, hands by your ears.",
      "Lift your shoulder blades off the floor by curling your ribs toward your hips.",
      "Pause, then lower back down."
    ],
    cues: ["It's a small movement, shoulder blades only", "Don't yank your head with your hands", "Breathe out as you crunch"],
    harder: "situp", easier: "", video: ""
  },
  {
    id: "v-up", name: "V-ups", category: "core", tier: "tougher-bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "10",
    steps: [
      "Lie flat on your back, arms straight overhead, legs straight.",
      "In one motion, lift your legs and your upper body so you fold into a V.",
      "Reach your hands toward your toes at the top.",
      "Lower back down with control."
    ],
    cues: ["Legs stay straight", "Too hard? Bend your knees (tuck-ups)", "Slow on the way down"],
    harder: "", easier: "situp", video: ""
  },
  {
    id: "russian-twist", name: "Russian twist", category: "core", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "50 (each side touch = 1)",
    steps: [
      "Sit on the floor, knees bent, lean your torso back to about 45°.",
      "Lift your feet off the floor if you can (keep them down to make it easier).",
      "Clasp your hands and twist your torso to touch the floor on one side, then the other."
    ],
    cues: ["Turn your shoulders, not just your arms", "Back stays flat, don't round", "Steady rhythm"],
    harder: "", easier: "", video: ""
  },
  {
    id: "leg-lift", name: "Leg lifts", category: "core", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "20",
    steps: [
      "Lie on your back, legs straight, hands under your hips or flat by your sides.",
      "Keeping your legs straight, lift them until they point at the ceiling.",
      "Lower slowly until your heels are just above the floor. Don't let them touch."
    ],
    cues: ["Lower back pressed into the floor", "Slow on the way down", "Too hard? Bend your knees"],
    harder: "v-up", easier: "", video: ""
  },
  {
    id: "bicycle-crunch", name: "Bicycle crunches", category: "core", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "50 (each elbow-to-knee = 1)",
    steps: [
      "Lie on your back, hands by your ears, legs lifted with knees bent.",
      "Bring one knee in while you extend the other leg straight.",
      "Twist to touch the opposite elbow to the bent knee.",
      "Switch sides in a pedaling motion."
    ],
    cues: ["Elbow to knee comes from turning your shoulder, not pulling your head", "Extended leg stays off the floor", "Don't rush, full extension every rep"],
    harder: "", easier: "crunch", video: ""
  },
  {
    id: "heel-touch", name: "Heel touches", category: "core", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "50 (each touch = 1)",
    steps: [
      "Lie on your back, knees bent, feet flat, arms straight by your sides.",
      "Lift your shoulder blades slightly off the floor.",
      "Reach down to touch your right heel with your right hand, then your left heel with your left hand."
    ],
    cues: ["Shoulders stay off the floor the whole set", "Reach sideways, not up", "Keep it smooth"],
    harder: "russian-twist", easier: "", video: ""
  },
  {
    id: "plank", name: "Plank", category: "core", tier: "bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "30–45 sec hold",
    steps: [
      "Forearms on the floor, elbows under your shoulders.",
      "Step your feet back so your body is a straight line from head to heels.",
      "Squeeze your glutes and your abs and hold."
    ],
    cues: ["No sagging hips, no hips in the air", "Breathe", "Push the floor away with your forearms"],
    harder: "mountain-climber", easier: "", video: ""
  },
  {
    id: "mountain-climber", name: "Mountain climbers", category: "core", tier: "tougher-bw",
    equipment: "Nothing", startWeight: "Bodyweight", reps: "30–40 sec",
    steps: [
      "Start in a push-up position.",
      "Drive one knee toward your chest, then quickly switch legs.",
      "Keep alternating at a steady pace."
    ],
    cues: ["Hips stay level with your shoulders, not up in the air", "Hands under shoulders", "Steady rhythm"],
    harder: "", easier: "plank", video: ""
  },
  // ---------- REST (used by Fight gone bad) ----------
  {
    id: "rest", name: "Rest", category: "rest", tier: "bw",
    equipment: "Nothing", startWeight: "—", reps: "1 min",
    steps: ["Stop. Breathe. Drink water if you need it.", "Start the next round when the minute is up."],
    cues: ["Rest only after you've completed ALL the exercises", "Keep an eye on the clock"],
    harder: "", easier: "", video: ""
  }
];
