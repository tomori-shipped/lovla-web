export const activitiesPost = {
  slug: "long-distance-relationship-activities",
  title: "45 Long-Distance Relationship Activities That Aren’t Just Watching Movies",
  seoTitle: "45 Long-Distance Relationship Activities & Date Ideas",
  description:
    "Try 45 long-distance relationship activities, from quick games and creative dates to easy rituals for different time zones. Pick something for tonight.",
  excerpt:
    "Quick games, creative dates, and small everyday rituals for when you want to do more than ask how each other’s day went.",
  image: "/blog/long-distance-relationship-activities.webp",
  imageAlt:
    "Hand-drawn illustration of long-distance partners in plum-colored clothes sharing a date across two spaces, with a globe between them",
  date: "2026-09-05",
  displayDate: "September 5, 2026",
  author: "The Lovla Team",
  readingMinutes: 11,
};

interface ActivityGroup {
  id: string;
  title: string;
  shortTitle: string;
  timing: string;
  intro: string;
  start: number;
  activities: { title: string; text: string }[];
}

export const activityGroups: ActivityGroup[] = [
  {
    id: "quick-activities",
    title: "When you only have 10 minutes",
    shortTitle: "Quick, low-effort ideas",
    timing: "5–15 minutes · together",
    intro: "For the gap before dinner, the end of a long shift, or a night when neither of you has much left in the tank. All you need is a phone and a little attention.",
    start: 1,
    activities: [
      { title: "Play three-photo show-and-tell", text: "Pick three photos from your day: one ordinary, one funny, and one that needs explaining. Take turns telling the story behind each. The slightly burnt toast is just as welcome as the beautiful sunset." },
      { title: "Give each other a tiny room tour", text: "Show your partner one corner of your space they haven’t seen lately. Explain the objects on your desk or the things stuck to your fridge. It’s a small way to let them into your everyday surroundings." },
      { title: "Try a household scavenger hunt", text: "Give each other a prompt: something older than your relationship, something blue, something you should probably throw away. Find an object and explain your choice. Three rounds is plenty; the explanations are the best bit." },
      { title: "Guess the song from a terrible hum", text: "Choose songs you both know and hum a few seconds without lyrics. Award a point for the title and another for the artist. Enthusiastic, wildly off-key performances absolutely count." },
      { title: "Draw each other without looking down", text: "Grab paper, set a two-minute timer, and draw your partner while looking only at their face. Reveal the results together. This is one date where being bad at drawing makes it better." },
      { title: "Send a voice-note mini podcast", text: "Record a two-minute episode about a very small event: the dramatic office lunch, your new favorite snack, the dog you met. Give it a ridiculous title. Your partner can send the next episode back." },
      { title: "Play two truths and a small lie", text: "Make all three statements about something recent, rather than recycling facts from when you first met. Your partner has to guess which detail you invented. Then tell the full story behind one of the true ones." },
      { title: "Choose a song for this exact moment", text: "Each pick a song that matches your day and explain why. Listen separately, then compare notes. Save the pair in a shared playlist; after a few weeks, you’ll have a surprisingly specific record of your lives." },
      { title: "Have a camera-off tea break", text: "Make a drink and talk with your cameras off. No tidying your room or checking how you look on screen. Ask one small question, such as what made your day easier, and let the conversation wander." },
    ],
  },
  {
    id: "creative-date-ideas",
    title: "Creative dates that give you something to do",
    shortTitle: "Make something together",
    timing: "20–45 minutes · together",
    intro: "These long-distance date ideas work well when you’re tired of holding a conversation for the entire call. Give your hands a job and let the chat happen around it.",
    start: 10,
    activities: [
      { title: "Color one of your photos together", text: "Choose a photo with a story behind it. In Lovla, you can turn it into a coloring page and color together in real time. Pick a palette together, or each claim a different part of the picture." },
      { title: "Make deliberately bad portraits", text: "Spend ten minutes drawing each other using only three colors. Add an over-serious gallery title and present your masterpiece. The point is to make something personal, not to produce a flattering profile picture." },
      { title: "Write a story one sentence at a time", text: "Start a shared note with a character and a problem. Alternate sentences without planning the ending. When the plot gets completely out of hand, each write a final line and vote for the more ridiculous finish." },
      { title: "Design your imaginary café", text: "Agree on a café name, then split the work: one person makes a menu while the other plans the room. Present your ideas over a drink. Include one dish inspired by an inside joke." },
      { title: "Follow the same paper-folding tutorial", text: "Choose one simple design and start with whatever paper you have. Pause at the same steps so nobody gets stranded halfway through. Put the finished objects somewhere you’ll both see them during your next call." },
      { title: "Make a six-panel comic about your week", text: "Stick figures are enough. Each draw three panels showing something that happened, then explain them in order. Give the week a title. Keep the pictures in a shared folder if you want an ongoing series." },
      { title: "Build a tiny exhibition from your camera rolls", text: "Choose a theme such as reflections, strange signs, or things that look like faces. Each select five photos and give them titles. Take turns acting as the curator of a very unserious gallery." },
      { title: "Invent a board game on paper", text: "Draw matching boards with twenty spaces. Together, decide what happens on each special square: tell a joke, move back, choose a song. Use a coin or die to play. Change any rule that turns out to be boring." },
      { title: "Make a postcard for your next visit", text: "Draw a place you want to go together and write a short note on the back. Show each other on the call, then keep the cards for your visit or mail them as a small surprise." },
    ],
  },
  {
    id: "everyday-dates",
    title: "Make ordinary evenings feel shared",
    shortTitle: "Food & everyday life",
    timing: "15–60 minutes · together",
    intro: "Not every virtual date needs a theme. Sometimes you just want the feeling of having your person around while you do the usual stuff.",
    start: 19,
    activities: [
      { title: "Cook two versions of the same meal", text: "Pick a forgiving dish, like pasta or rice bowls, and use ingredients you already have. Set a shared start time, prop up your phones, and compare the finished plates. Different time zones? Lunch and dinner still count." },
      { title: "Host a snack tasting", text: "Each bring three snacks and rate them on crunch, flavor, and whether you’d buy them again. You don’t need identical snacks or a delivery order. Inventing your judging criteria is half the entertainment." },
      { title: "Have a breakfast date in mismatched time zones", text: "One person makes breakfast; the other brings dessert or an evening drink. Give it a clear start and end so it fits around work or sleep. Matching meals are optional. A time that works for both people isn’t." },
      { title: "Take a walk and trade observations", text: "Choose safe, familiar routes and talk by voice while you walk. Describe one thing your partner can’t see: the weather, a shop window, a particularly confident pigeon. Stay aware of your surroundings and stop before taking photos." },
      { title: "Run a ten-minute tidy-up sprint", text: "Pick one manageable task each and start a timer together. Keep the call open, then show your before-and-after results. Stop when the timer ends. This is company for a boring chore, not an inspection of each other’s homes." },
      { title: "Read a short piece aloud", text: "Choose a poem, a short story you own, or a few pages from a book you’re both reading. Take turns reading passages. Stop whenever something makes you laugh or gives you a question to ask." },
      { title: "Make your own question cards", text: "Each write five questions: two light, two curious, and one completely silly. Take turns picking a number. Allow a pass on any question; a date shouldn’t feel like an interview you can fail." },
      { title: "Do a cupboard-only cooking challenge", text: "Choose three ingredients you both have and try to make a snack from them. Set a short time limit and compare your inventions. Agree on allergies and food preferences first, and skip anything that needs a special shopping trip." },
      { title: "Spend a quiet half hour together", text: "Stay on a call while each of you reads, draws, or does a small project. Agree that silence is welcome, then check in at the end. It works best when you both want company without much conversation." },
    ],
  },
  {
    id: "different-time-zones",
    title: "Activities for different time zones",
    shortTitle: "Leave something to find",
    timing: "A few minutes each · at different times",
    intro: "If one of you is asleep whenever the other is free, try activities you can take turns with. Make the reply window generous so a sweet idea doesn’t become another deadline.",
    start: 28,
    activities: [
      { title: "Keep a one-photo-a-day diary", text: "Add one picture to a shared album with a sentence about why you took it. Ordinary days belong here too. When you next talk, choose one photo you want to hear more about." },
      { title: "Trade a question across the day", text: "Leave one question for your partner to answer when they’re free. Try something concrete: what would you show me if I were there today? Answer their question before leaving your next one." },
      { title: "Build a playlist with liner notes", text: "Add one track at a time and write a short explanation in a shared note. It can remind you of them, capture your mood, or simply sound good. Leave space for your partner’s response before adding more." },
      { title: "Leave a tiny treasure hunt", text: "Send three clues that point to a shared memory, a photo, or a place you’ve visited. Your partner guesses when they wake up. Finish with the story of why you were thinking about that moment." },
      { title: "Make a collaborative comic in installments", text: "One person draws the first panel and sends it over; the other adds the next. Keep going for a week. Don’t explain what you intended the characters to do. Let your partner take the story somewhere unexpected." },
      { title: "Share a short reading challenge", text: "Choose a manageable chapter or short story and a loose finish date. Leave each other one favorite moment and one question. Avoid turning the chat into a spoiler zone until you’ve both caught up." },
      { title: "Record a sound from your day", text: "Capture a few seconds of rain, your kettle, or the birds outside your window. Ask your partner to guess before you explain. Avoid recording other people’s private conversations or anything that reveals sensitive location details." },
      { title: "Keep a ‘when we’re together’ list", text: "Add small things you want to share during your next visit: a bakery, a walk, a recipe. Put your name beside each suggestion. Later, pick one idea each instead of trying to squeeze everything into the trip." },
      { title: "Write an open-when message", text: "Create a note for a specific moment: a hard commute, a slow Sunday, the night before a big presentation. Keep it personal and brief. Ask whether your partner prefers a voice recording, a text, or an actual letter." },
    ],
  },
  {
    id: "weekend-date-ideas",
    title: "When you have a whole evening",
    shortTitle: "Longer, more intentional dates",
    timing: "45–90 minutes · together",
    intro: "A little planning can make these feel different from your usual call. Choose one activity, agree on a budget if needed, and leave some unplanned time at the end.",
    start: 37,
    activities: [
      { title: "Re-create your first date", text: "Make a similar meal, wear something that reminds you of it, and each tell the story from your side. Compare what you noticed first and what you were nervous about. You may remember very different evenings." },
      { title: "Give a personal museum tour", text: "Gather five objects that tell part of your story: a childhood keepsake, an old ticket, a book with notes in it. Take turns presenting them. Your partner gets one question after each object." },
      { title: "Plan one realistic day of your next visit", text: "Choose a starting point, a meal, and one thing you’re excited to do. Look up opening times together and agree on what you can spend. Leave room for rest; an itinerary shouldn’t use every available minute." },
      { title: "Have a low-budget dress-up dinner", text: "Use food you already planned to eat, set the table, and wear whatever makes the evening feel different. Put other notifications away. Choose one conversation topic that has nothing to do with work or travel logistics." },
      { title: "Learn a short dance together", text: "Pick a beginner-friendly sequence, clear some floor space, and learn it in small sections. Take turns demonstrating the bits you’ve figured out. You can keep the cameras off until the final, probably chaotic, performance." },
      { title: "Make a relationship time capsule", text: "Each contribute a current photo, a favorite phrase, and a prediction for the year ahead. Store them in a shared folder with an agreed opening date. Add a note about what you’re enjoying in your relationship right now." },
      { title: "Host a themed quiz about each other", text: "Prepare ten questions with a mix of easy memories and obscure preferences. Give a hint when someone gets stuck. Wrong answers are a chance to learn something, not evidence that your partner hasn’t been paying attention." },
      { title: "Take turns planning a mystery date", text: "The planner sends only the time, rough length, budget, and anything to prepare. Keep the activity within things you know your partner enjoys. Reveal it on the call, then swap planning duties next time." },
      { title: "Make a shared memory page", text: "Choose one month, trip, or small milestone. Gather a few photos, add captions, and each write one thing you want to remember. Save the page somewhere you both can revisit. You’re making a keepsake, not a perfect scrapbook." },
    ],
  },
];
