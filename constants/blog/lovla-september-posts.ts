export type LovlaStory = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  category: string;
  coverText: string;
  imageAlt: string;
  answer: string;
  featureLine: string;
  sections: {
    title: string;
    paragraphs: string[];
    items?: string[];
    links?: { title: string; href: string }[];
  }[];
  related: { href: string; title: string }[];
  screenshot?: string;
};

export const lovlaStories: LovlaStory[] = [
  {
    slug: "lovla-ten-minute-date",
    seoTitle: "Ten Minute Date Ideas for Busy Couples",
    title: "A Ten Minute Date With Lovla for Couples Who Are Always Busy",
    description:
      "Make a small window of time feel like a date. A practical Lovla coloring routine for busy couples, with easy photo choices and a plan you can repeat.",
    date: "2026-09-16",
    category: "Everyday connection",
    coverText: "Ten minutes. Just us.",
    imageAlt:
      "Illustrated couple relaxing with their phones on a sofa beneath Ten Minutes, Just Us",
    answer:
      "A short date works best when the plan is already decided. Choose one favorite photo, turn it into a coloring page in Lovla, and spend ten minutes adding color together. Leave the rest for another evening. You do not need a finished picture or a dramatic conversation to make a little room for each other.",
    featureLine:
      "Lovla gives you a shared coloring canvas, so even a small break can become something you make together.",
    screenshot: "/screenshots/lovla-shared-coloring.webp",
    sections: [
      {
        title: "Your calendar does not need another ambitious plan",
        paragraphs: [
          "You have been saying “we should do something this week” since Monday. It is now Thursday, the laundry has developed its own postcode, and somebody still has to decide what dinner is. A grand romantic plan may not be what this evening needs.",
          "Try making the invitation smaller and more specific: “Want to color that beach photo for ten minutes after we eat?” There is an activity, a starting point, and a finish that will not swallow the night.",
          "Ten minutes is a suggestion for your routine, not a Lovla session limit. Choose a window that actually fits both people. If one of you needs to sleep, move the plan instead of turning it into another obligation.",
        ],
      },
      {
        title: "Do the tiny bit of preparation before the date",
        paragraphs: [
          "Pick the photo before you settle in. Otherwise, a quick date can become twenty minutes of scrolling through receipts, screenshots, and six nearly identical pictures of a sandwich.",
          "A clear selfie or a simple holiday photo is a good first choice. Use a picture your partner likes too. The goal is an easy starting point, not a surprise examination of every photo you have ever taken together.",
        ],
        items: [
          "Have Lovla ready on both devices and check the current access requirements before you begin.",
          "Choose one photo, with a backup only if the first one is too busy.",
          "Decide when you will start and what happens afterward, whether that is bedtime or finishing dinner.",
        ],
      },
      {
        title: "A simple ten minute plan",
        paragraphs: [
          "Spend the first minute remembering the photo. What happened just before it? Who chose the restaurant? Was this the trip where somebody confidently took you to the wrong platform?",
          "Use the middle of the date to color. One person can take the background while the other chooses the clothes. These are informal roles you agree together. Swap if you feel like it, and allow at least one color decision that would horrify a professional stylist.",
          "At the end, look at what you made. Save your artwork in the journal and decide whether you want to return to it. You can stop with half a purple sky. This is your evening, not an assignment with a completion percentage.",
        ],
      },
      {
        title: "Give the routine somewhere realistic to live",
        paragraphs: [
          "Attach the date to a moment that already exists: after Saturday breakfast, before your usual evening call ends, or while you are both settled on the sofa. “When we have more time” is a much harder appointment to keep.",
          "If you are apart, use your usual separate calling setup when you want to talk. If you are together, you can simply sit close. Neither version needs special lighting, matching pajamas, or a photograph for social media.",
          "Keep the frequency modest. One enjoyable evening is a better starting point than a promise to do this every day. Missing a night should not create a debt that either person has to repay.",
        ],
      },
      {
        title: "Make room for the evenings when it does not fit",
        paragraphs: [
          "Sometimes the kindest plan is to put the phones down and go to bed. Sometimes you will want a walk, a proper conversation, or complete silence. A useful routine leaves room for those nights.",
          "If coloring is not your partner’s thing, try choosing a photo together and telling the story behind it instead. You can still spend the ten minutes on each other. Lovla is an option for shared creativity, not a test of how committed you are.",
          "Start with one small invitation this week. If you both enjoy it, you already know what to suggest the next time the calendar looks impossible.",
        ],
      },
    ],
    related: [
      {
        href: "/blog/couples-apps-without-quizzes",
        title: "Connection without another couples quiz",
      },
      {
        href: "/blog/creative-date-ideas-for-couples",
        title: "More creative date ideas",
      },
    ],
  },
  {
    slug: "lovla-couples-memory-journal",
    seoTitle: "How to Make a Couples Memory Journal",
    title: "How to Make a Couples Memory Journal With Lovla",
    description:
      "Give your favorite photos a second life. Build a couples memory journal in Lovla with ordinary moments, shared coloring, and a simple first collection.",
    date: "2026-09-17",
    category: "Shared memories",
    coverText: "Our little memory book",
    imageAlt:
      "An illustrated scrapbook of a couple’s everyday memories beside two phones and a pink ribbon",
    answer:
      "Start a couples memory journal by choosing a few moments you both want to revisit, making something from them, and keeping the results together. In Lovla, you can turn photos into coloring pages and save the artwork you finish in your shared journal. Begin with one ordinary day rather than trying to document your entire relationship.",
    featureLine:
      "Lovla turns the journal into a collection of artwork you made together, with your own photos as the starting point.",
    sections: [
      {
        title: "Your best memories may be buried under screenshots",
        paragraphs: [
          "Somewhere between a parking confirmation and a photo of the WiFi password is a picture that makes you ridiculously happy. Not because it is beautifully lit. Because you remember who you were with.",
          "A memory journal gives those pictures somewhere to go. It does not have to become a carefully curated history of your relationship. A collection of small, slightly chaotic moments can feel more like you than a gallery of perfect sunsets.",
          "The difference with a coloring journal is that you spend time with the memory again. Choosing colors gives you a reason to notice the little details and tell the story instead of simply filing the picture away.",
        ],
      },
      {
        title: "Choose a tiny first collection",
        paragraphs: [
          "Start with three possibilities and make just one page today. Too many choices can turn a lovely idea into a sorting project. Each person can nominate a photo, then you can agree on a third together.",
          "There is no need to pick the objectively most important event. Choose the memory you are most interested in talking about tonight. The photograph of your first terrible attempt at homemade pizza is absolutely eligible.",
        ],
        items: [
          "An ordinary favorite: a walk, a breakfast, or a lazy afternoon.",
          "A small first: your first trip, first shared home, or first attempt at a new hobby.",
          "A photo with a story: something that makes one of you immediately say “remember when…”",
        ],
      },
      {
        title: "Make the page before you plan the whole journal",
        paragraphs: [
          "Turn your chosen photo into a coloring page in Lovla and work on it together. You can keep the colors close to the photograph or change them completely. A rainy afternoon becomes a lavender sky if that is what you feel like making.",
          "While you color, take turns remembering details outside the frame. What were you eating? What music was playing? What did the other person say that made you laugh? You do not have to write every answer down for the conversation to matter.",
          "Save the completed artwork to your Lovla journal. On a later evening, return to the next photo on your shortlist. The collection can grow one page at a time without a deadline or a monthly quota.",
        ],
      },
      {
        title: "Include the days nobody would put in a highlight reel",
        paragraphs: [
          "Big anniversaries are easy to remember. The ordinary days disappear faster: the first mug you bought for the apartment, the bench where you ate chips, the supermarket trip that somehow became a two hour adventure.",
          "Ask each other for a memory that would look boring to anybody else. That is often where the most personal page begins. You are making this collection for the two people who understand the reference.",
          "If you want themes, keep them as a loose creative plan: places we have been, things we tried, or our first year together. You can keep the shortlist in a regular note. You do not need a special folder feature to give the collection a direction.",
        ],
      },
      {
        title: "Keep the pressure and the privacy decisions simple",
        paragraphs: [
          "Choose photos you are both comfortable using. You do not have to turn every intimate moment into an app upload. A landscape, a pet, or an everyday object can stand for a memory just as well as a portrait.",
          "Keep the original photos in your own photo library too. Treat the Lovla journal as a creative collection rather than your only copy of an irreplaceable photograph.",
          "Most importantly, let it stay unfinished. A journal that grows slowly can become something you return to for years. The first page only needs to make you both smile.",
        ],
      },
    ],
    related: [
      {
        href: "/blog/turn-photo-into-coloring-page",
        title: "Choose a photo that makes a good coloring page",
      },
      {
        href: "/blog/lovla-ten-minute-date",
        title: "Make a page in a small pocket of time",
      },
    ],
  },
  {
    slug: "lovla-magic-canvas-prompts",
    seoTitle: "Magic Canvas Prompts for Couples",
    title: "Turn Your Inside Jokes Into Coloring Pages With Lovla Magic Canvas",
    description:
      "Use Lovla Magic Canvas to turn a personal idea into a coloring date. Get a simple prompt recipe, original examples, and ways to make the page your own.",
    date: "2026-09-18",
    category: "Magic Canvas",
    coverText: "Your inside joke. In color.",
    imageAlt:
      "An illustrated couple imagining a dragon cafe and a cat astronaut beneath Your Inside Joke, In Color",
    answer:
      "To make a coloring page from an inside joke, describe one clear scene with a subject, an action, and a personal detail. Use that idea in Lovla’s text to coloring feature, Magic Canvas, then color the result together. A sleepy dragon guarding the last croissant is a better starting point than your entire relationship history squeezed into one prompt.",
    featureLine:
      "Magic Canvas gives you a way to start from an idea when you do not have the right photo.",
    sections: [
      {
        title: "Some of your best references have never been photographed",
        paragraphs: [
          "There is the nickname that makes no sense to anybody else. The imaginary restaurant you would open. The pet you have already named despite not actually owning it. Your relationship probably contains a small fictional universe.",
          "Those details make good starting points for a coloring date. You are not trying to write a brilliant AI prompt. You are giving yourselves a picture that has a reason to make you laugh.",
          "Keep the first idea simple enough to explain in one sentence. If the explanation requires three years of backstory and a family tree, choose one recognizable part of the joke.",
        ],
      },
      {
        title: "Use this simple prompt recipe",
        paragraphs: [
          "Describe the subject first, then what it is doing, then one or two details that make the scene personal. Finish by asking for simple outlines and an uncluttered background if you want an easier page to color.",
          "For example: “A sleepy dragon curled around the last croissant in a tiny cafe, wearing oversized slippers, with simple outlines and a plain background.” The joke is clear, and the picture does not have to fit an entire city.",
          "Think of this as a starting brief, not a guarantee of an exact result. If the generated page misses the detail you care about, simplify the wording around that detail rather than piling on more instructions.",
        ],
      },
      {
        title: "Six ideas to borrow and make personal",
        paragraphs: [
          "Swap the animal, food, location, or accessory for something that belongs to your story. The best detail is usually the one your partner recognizes immediately.",
        ],
        items: [
          "A cat astronaut delivering a moon shaped pizza to a tiny space station, with large simple shapes.",
          "Two penguins opening a very small seaside bakery, with one oversized cinnamon roll in the window.",
          "A sleepy bear protecting the last dumpling at a kitchen table, wearing a striped scarf.",
          "A little cottage on a floating island, with a hammock, two mugs, and a friendly dog.",
          "Two otters taking a road trip in a tiny camper, with a mountain and a single pine tree behind them.",
          "A dragon working at a bookshop, carefully recommending a romance novel to a mouse.",
        ],
      },
      {
        title: "Let your partner choose the unexpected part",
        paragraphs: [
          "One of you picks the setting. The other picks the character. Each adds a detail, and then you agree on the final sentence. This keeps the preparation from becoming one person directing while the other politely watches.",
          "Once you have a page, divide up the colors however you like. You might each choose three colors or take turns deciding a single object. These are your own playful rules, so change them if they stop being fun.",
          "Afterward, compare the idea you started with to the picture you made. Sometimes the accidental details become the next inside joke. That is a perfectly good outcome.",
        ],
      },
      {
        title: "What to change when the page is too complicated",
        paragraphs: [
          "If the scene feels crowded, remove background objects and keep one main subject. If the joke is hard to recognize, describe the important action more directly. A dragon holding a pastry is clearer than a dragon experiencing the emotional weight of breakfast.",
          "For a page with more room to color, try fewer tiny accessories and larger shapes. Avoid asking for a long sentence to be drawn inside the picture. You can tell the story aloud without relying on generated lettering.",
          "If you already have a photograph of the moment, photo to coloring may be the better starting point. Magic Canvas is especially useful when the memory is imaginary, the joke is visual, or you simply want to invent something together.",
        ],
      },
      {
        title: "Save one idea for next time",
        paragraphs: [
          "You do not need to turn every idea into a page tonight. Keep a short list somewhere convenient and add to it whenever one of you says something wonderfully ridiculous.",
          "Next time you cannot decide what to do together, pick a sentence from the list. You already have the creative brief, the personal reference, and somebody who gets the joke.",
        ],
      },
    ],
    related: [
      {
        href: "/blog/turn-photo-into-coloring-page",
        title: "Start with a real photo instead",
      },
      {
        href: "/blog/lovla-couples-memory-journal",
        title: "Build a collection of your shared artwork",
      },
    ],
  },
  {
    slug: "lovla-color-battle-portrait-tips",
    seoTitle: "Color Battle Portrait Tips for Couples",
    title: "Lovla Color Battle: How to Make Bad Portraits Into a Great Date",
    description:
      "Try Lovla Color Battle without worrying about artistic skill. Choose a helpful reference, focus on recognizable details, and keep the portrait challenge playful.",
    date: "2026-09-19",
    category: "Color Battle",
    coverText: "Bad portraits. Great date.",
    imageAlt:
      "An illustrated couple laughing in separate rooms with playful portraits and a small stopwatch between them",
    answer:
      "For a fun Lovla Color Battle, pick clear reference photos, focus on a few recognizable features, and agree that the portraits can be ridiculous. Color Battle is a timed activity where two people paint each other from reference images. You are making a date, not auditioning for art school, so capturing the familiar hairstyle can be a bigger win than getting every proportion right.",
    featureLine:
      "Lovla’s Color Battle gives your portrait date a shared challenge and a timer to work against.",
    sections: [
      {
        title: "Start with the correct artistic expectations",
        paragraphs: [
          "At some point, one of you will paint an eyebrow that looks more like a small canoe. This is not necessarily a problem. It might be the highlight of the evening.",
          "Before starting, agree on the mood. Are you trying for a recognizable likeness, a cartoon version, or a completely unexpected color palette? A shared expectation makes it easier to enjoy the result without wondering whether someone is secretly disappointed.",
          "Keep the jokes about the drawing rather than your partner’s appearance. “I have invented a new type of nose” lands differently from picking apart the actual face you are looking at.",
        ],
      },
      {
        title: "Choose a reference that gives you a chance",
        paragraphs: [
          "Look for a clear face, comfortable lighting, and an expression you know. A familiar smile is more useful than a dramatic photograph where half the face disappears into shadow.",
          "Avoid sunglasses, tiny faces in group photos, and pictures with a lot of distracting background detail for your first round. Ask your partner which photo they are happy for you to use. Surprise is optional; comfort is not.",
          "You can save the elaborate holiday costume for a later attempt. Start with something that lets you see the big shapes quickly.",
        ],
      },
      {
        title: "Paint the big shapes before the heroic eyelashes",
        paragraphs: [
          "Begin with the outline of the head and the main shape of the hair. Place the larger features before spending time on little details. You want a portrait that reads as a person before you devote half the round to one perfect eyelash.",
          "Choose two or three details you associate with your partner: the curl that never behaves, the glasses, the fringe, or the smile. Those are useful priorities when time is limited.",
          "Then commit to a few colors and keep moving. Your first choice does not have to be your lifelong artistic position. A bold purple jumper can be much more entertaining than several minutes of worrying about the exact shade of gray.",
        ],
      },
      {
        title: "Make the timer part of the fun",
        paragraphs: [
          "Follow the timer shown in your Color Battle round. Leave time before you start to choose references and time afterward to enjoy the portraits. The date should have room around the challenge.",
          "If you get stuck, move to another part of the picture. Spending the remaining time rescuing one ear can leave everything else abandoned. Give the portrait a chance to become a complete, gloriously imperfect attempt.",
          "If one partner draws often and the other rarely does, choose personal goals rather than measuring yourselves against each other. One might try an unusual palette while the other focuses on a recognizable hairstyle. You can both enjoy a challenge without producing equally polished work.",
        ],
      },
      {
        title: "Give the portraits a proper afterparty",
        paragraphs: [
          "When the round ends, talk about what you noticed while painting. Start with a detail you liked before discussing the part that escaped your control. “You got my smile” is a lovely thing to hear.",
          "Invent a dramatic title aloud. Explain your least defensible artistic decision with complete confidence. Ask what your partner found hardest and whether the reference reminded them of anything.",
          "These are ideas for your conversation, not extra scoring or judging features in the app. You do not need an official winner to have a good story about the round.",
        ],
      },
      {
        title: "Know when to switch to a gentler activity",
        paragraphs: [
          "A timed challenge will not suit every mood. If either person is feeling rushed or self conscious, choose shared coloring instead and work on the same page at your own pace.",
          "If you are apart, arrange a separate call if you want to chat during the date. You can also catch up before and afterward. The portrait challenge already gives you plenty to talk about.",
          "The best result is not a perfect portrait. It is both of you wanting to spend a little more time together after the timer ends.",
        ],
      },
    ],
    related: [
      {
        href: "/blog/long-distance-sip-and-paint",
        title: "Plan your first remote Color Battle date",
      },
      {
        href: "/blog/lovla-quiet-date-night",
        title: "Choose a quieter evening instead",
      },
    ],
  },
  {
    slug: "lovla-quiet-date-night",
    seoTitle: "Quiet Date Night Ideas for Introverted Couples",
    title: "A Quiet Date Night for Introverted Couples, Made With Lovla",
    description:
      "Plan a quiet date night with Lovla shared coloring. Simple choices for couples who want company without a packed itinerary or constant conversation.",
    date: "2026-09-19",
    category: "Your kind of quality time",
    coverText: "A quieter kind of date",
    imageAlt:
      "An illustrated couple sharing a blanket in a rainy window nook with their phones and a sleeping cat",
    answer:
      "For a quiet date night, choose one gentle shared activity, make yourselves comfortable, and leave room for silence. Lovla lets you color a page together, which gives your evening a focus without requiring constant conversation. Pick a simple photo, settle beside each other or connect from separate places, and let the picture be enough of a plan.",
    featureLine:
      "Shared coloring in Lovla gives you something to do together on the evenings when a big night out feels like too much.",
    sections: [
      {
        title: "You can want company without wanting an event",
        paragraphs: [
          "The restaurant is loud, the group chat has opinions, and somebody has suggested an activity that requires booking six weeks in advance. Meanwhile, you would quite like to sit near your favorite person and do something small.",
          "A quiet date can still feel intentional. The difference is agreeing that you are spending this time together, rather than accidentally reaching the end of the evening after scrolling separately.",
          "Introverted people do not all want the same thing, so ask instead of assuming. One of you might want music and conversation; the other might prefer a little silence first. Make a plan for the people in the room, not a personality label.",
        ],
      },
      {
        title: "Make three decisions and leave the rest alone",
        paragraphs: [
          "Choose where you will sit, what you will color, and roughly when you will finish. That is enough structure. Your sofa does not need to become a themed venue.",
          "Choose a photo with an uncomplicated background and a memory you both enjoy. A favorite pet, a simple selfie, or a place you visited can work well. If a personal photo feels too involved tonight, agree on a simple creative idea instead.",
          "Have Lovla ready before you settle in. It is easier to enjoy a calm evening when the first ten minutes are not spent searching for a charger and deciding who remembers their password.",
        ],
        items: [
          "Choose a comfortable seat and lighting that lets you see your screen easily.",
          "Ask whether your partner wants music, a separate call, or a quieter session.",
          "Keep the rest of the evening flexible so stopping does not feel like abandoning the date.",
        ],
      },
      {
        title: "Let conversation arrive on its own",
        paragraphs: [
          "Start coloring the page together. You can agree on a palette or each take a part of the image. There is no need to prepare a list of deep questions before you begin.",
          "A small comment about the photo may turn into a story. A ridiculous color choice might become a running joke. Or you may both concentrate for a while. None of those outcomes means the evening has gone wrong.",
          "If you do want to say something, start close to what is happening: “I forgot about this jacket,” or “Do you remember what we ate that day?” Specific little observations can feel more natural than trying to produce a meaningful conversation on demand.",
        ],
      },
      {
        title: "Adjust the plan when you are in different places",
        paragraphs: [
          "Choose an overlapping time that is comfortable for both of you. A cozy late evening for one person may be a frantic morning for the other. Shorten the date if that makes it easier to enjoy.",
          "Use your usual calling app separately if you want to talk while you color. You can also have a quick catch up beforehand and leave the creative time quieter. Agree on that expectation so a pause does not feel confusing.",
          "Keep practical interruptions ordinary. If someone needs to answer the door or get water, the date has not failed. You are sharing a real evening, complete with the delivery driver arriving at exactly the wrong moment.",
        ],
      },
      {
        title: "Give the evening a small ending",
        paragraphs: [
          "Before you put your devices away, look at the page together. Mention one detail you enjoyed making or one thing the photo reminded you of. Save the artwork when you finish it and decide whether you want to return another night.",
          "If either of you has had enough screen time, switch to a paper sketch, a short walk, or sitting together with a book. A quiet date does not have to stay inside an app to count.",
          "The point is to find a version of quality time that feels comfortable to both people. You do not owe anybody a dramatic itinerary, a finished masterpiece, or a social media post proving you had a nice evening.",
        ],
      },
    ],
    related: [
      {
        href: "/blog/lovla-ten-minute-date",
        title: "A smaller date for a busy evening",
      },
      {
        href: "/blog/lovla-magic-canvas-prompts",
        title: "Invent a coloring page from your own idea",
      },
    ],
  },
  {
    slug: "apps-for-iphone-duo-and-iphone-18",
    title: "7 Apps We’d Love on iPhone Duo and iPhone 18 Pro",
    seoTitle: "7 Apps for iPhone Duo and iPhone 18 Pro",
    description:
      "A thoughtful app shortlist for iPhone Duo and iPhone 18 Pro, from Lovla’s creative couples dates to photo editing, books, music, movies, and travel.",
    date: "2026-09-19",
    category: "Your next home screen",
    coverText: "New phone. More possibilities.",
    imageAlt:
      "Editorial illustration of a couple planning a weekend with phones, books, music, travel, and a colorful portrait",
    answer:
      "A new phone deserves better than the same six apps you open out of habit. Our shortlist for iPhone Duo and iPhone 18 Pro is Lovla for creative time together, Lightroom for photos, Apple Books for reading, Netflix for movies, Flighty for flights, AllTrails for outdoor plans, and Apple Music for the soundtrack. Pick the ones that fit your actual life, rather than downloading everything on day one.",
    featureLine:
      "Lovla turns a favorite photo into a coloring page you can create together, giving your new camera roll somewhere more interesting to go.",
    sections: [
      {
        title: "First, which new iPhone are we talking about?",
        paragraphs: [
          "If you searched for Apple Duo, the official name is iPhone Duo. Apple has announced a folding iPhone with a 7.6 inch inner display, with availability beginning October 23, 2026. As of this article’s September 19 publication date, it has not reached that release date. Apple’s iPhone 18 Pro and iPhone 18 Pro Max began availability on September 18 in the first launch markets. Those are the iPhone 18 models this guide covers.",
          "This is an editorial shortlist based on what the apps offer today and the hardware Apple has announced. We have not tested this entire list on these devices. Except where Apple explicitly describes an adaptation, a recommendation here does not mean the developer has announced a special Duo layout. Check the latest App Store compatibility and release notes before subscribing.",
        ],
        links: [
          {
            title: "Apple’s iPhone Duo announcement",
            href: "https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/",
          },
          {
            title: "Apple’s iPhone 18 Pro announcement",
            href: "https://www.apple.com/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/",
          },
        ],
      },
      {
        title: "1. Lovla for turning a photo into time together",
        paragraphs: [
          "The first photo on your new phone might be a careful camera test. The fiftieth is more likely to be your partner holding an enormous sandwich. Lovla gives that second kind of picture a lovely next chapter: turn it into a coloring page, add color together in real time, and keep the finished creation in your shared journal.",
          "Why it earns a place: there is an actual shared activity behind the icon. You can spend a few minutes making something with your partner instead of just sending another photo and waiting for a reaction. It works as a small date idea whether you are sharing a sofa or connecting from different places.",
          "Try it with a clear, simple photo from your first weekend with the phone. Let each of you choose an unexpected color. The fun is in what you make together. Lovla’s current listing supports iPhone and iPad; this recommendation does not claim a dedicated Duo mode or confirmed support for its folding controls.",
        ],
        links: [
          {
            title: "Explore Lovla on the App Store",
            href: "https://apps.apple.com/us/app/lovla-couples-coloring-games/id6758548454",
          },
        ],
      },
      {
        title: "2. Lightroom for photos that deserve a second look",
        paragraphs: [
          "You got the shot. Mostly. The sky is lovely, your partner looks great, and the restaurant lighting has turned dinner an alarming shade of orange. Lightroom is worth considering when you want more editing control than a quick filter. Adobe’s app offers photo editing tools and presets for adjusting the look of your images.",
          "Our reason to try it is simple: a camera upgrade is more satisfying when you learn what to do with the pictures. Start with one favorite image and make a few restrained edits. Keep a copy of the original so you can compare, then stop before everyone looks like a wax figure.",
          "It is a better fit for people who enjoy editing than people who want the fastest possible post. Some tools require a paid plan. We have not verified a special Duo workspace for Lightroom.",
        ],
        links: [
          {
            title: "Lightroom features and access details",
            href: "https://apps.apple.com/us/app/lightroom-ai-photo-editor/id878783582",
          },
        ],
      },
      {
        title: "3. Apple Books for replacing one scrolling session",
        paragraphs: [
          "There is a particular disappointment in picking up your phone for five minutes and returning forty minutes later with no idea what you just watched. Apple Books gives you another option: ebooks and audiobooks, with a place to browse and read what catches your interest.",
          "For Duo, reading is one of the clearest reasons we would want a larger display. That is our expectation about the form factor, not a claim about a measured reading improvement. On an iPhone 18 Pro, the appeal is more ordinary and more useful: your book is there when the train is late.",
          "Try a sample before buying. For a shared ritual, choose the same book and compare your favorite moment over coffee. You can disagree about a fictional person’s terrible decisions without turning the evening into a productivity project.",
        ],
        links: [
          {
            title: "Explore Apple Books",
            href: "https://www.apple.com/apple-books/",
          },
        ],
      },
      {
        title: "4. Netflix for making the bigger screen count",
        paragraphs: [
          "Some evenings call for a creative activity. Others call for a very good film and absolutely no further decisions. Netflix makes this list because Apple specifically names it among the third party apps adapting to iPhone Duo’s folding design and larger display.",
          "That gives it a more concrete Duo connection than simply assuming every app will have a new interface. Apple describes browsing Clips on the outer display and opening the phone for a larger viewing experience. We have not independently tested that experience.",
          "Our practical suggestion: pick the film before you settle in. A bigger screen cannot rescue an hour spent arguing with the recommendation row. Check Netflix’s current plans and availability in your region, and remember that a phone still makes for a more intimate viewing setup than a television.",
        ],
        links: [
          {
            title: "Apple’s description of Netflix on iPhone Duo",
            href: "https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/",
          },
        ],
      },
      {
        title: "5. Flighty for the trip that finally gets you together",
        paragraphs: [
          "When a visit depends on a flight, the arrival time can feel like the most important number on your phone. Flighty is a flight tracker with live flight information and private flight sharing through Flighty Friends. Its listing also describes alerts and additional tracking features available through Pro.",
          "It earns its place for couples who travel or live apart: having the journey information together can make airport pickup planning less chaotic. It is also useful when your holiday has enough moving parts that keeping everything in your head stops being fun.",
          "Keep the airline’s app and official airport information handy for check in, boarding, and operational changes. Flighty is an extra layer of information, not your ticket. Choose it because you fly, not because a new phone needs another subscription.",
        ],
        links: [
          {
            title: "Flighty’s current features and plans",
            href: "https://apps.apple.com/us/app/flighty-live-flight-tracker/id1358823008",
          },
        ],
      },
      {
        title: "6. AllTrails for a date that leaves the house",
        paragraphs: [
          "The best thing your new phone does this weekend might be helping you put it away. AllTrails helps you discover walking and hiking routes, compare trail information, and read community reviews. That makes it a useful starting point for the couple whose standard Saturday plan is asking what the plan is.",
          "Choose a route that fits both people’s energy and experience. Look at distance, elevation, recent reports, and the weather before leaving. A scenic walk with a coffee stop can be a much better date than a route chosen to prove something.",
          "Maps and photographs are an appealing use for a larger display while planning. We have not confirmed a Duo specific AllTrails interface. Check which navigation and offline features your plan includes, and do not make a phone your only preparation for a remote outing.",
        ],
        links: [
          {
            title: "Explore AllTrails and its feature details",
            href: "https://apps.apple.com/us/app/alltrails-hike-bike-run/id405075943",
          },
        ],
      },
      {
        title: "7. Apple Music for the part you remember later",
        paragraphs: [
          "A song can bring back an entire evening faster than a photograph. Apple Music belongs on this list for the everyday soundtrack: albums, playlists, and the music you put on while cooking, traveling, or making something together.",
          "Try building a short playlist around one shared memory. Add the song from the drive, the one someone sang badly, and the one that somehow became an inside joke. Put it on during a Lovla coloring date and let the picture and the music do some of the remembering.",
          "This recommendation is about what you listen to, not an unsupported claim that a new iPhone automatically makes every track sound better. Check subscription requirements and choose the music service that fits your existing library and listening habits.",
        ],
        links: [
          {
            title: "Apple Music features and subscriptions",
            href: "https://www.apple.com/apple-music/",
          },
        ],
      },
      {
        title: "Build a home screen you actually want to use",
        paragraphs: [
          "These are different tools for different moments, rather than a ranking where one app somehow beats every other category. Start with the activity you want more of: making things together, taking better care of photos, reading, watching a film, or getting outside. Add the app that supports it.",
          "For couples, an easy first combination is a plan, a photo, and a shared activity. Find somewhere to go, take a picture worth keeping, then turn it into a coloring date in Lovla. The phone is new. The part worth remembering is what you did with it.",
          "Product information was checked on September 19, 2026 against Apple announcements and official app listings. Availability, subscriptions, and device adaptations can change. The cover is an editorial illustration, not a photograph of either phone or a screenshot of these apps.",
        ],
      },
    ],
    related: [
      {
        href: "/blog/lovla-ten-minute-date",
        title: "A ten minute Lovla date for a busy evening",
      },
      {
        href: "/blog/turn-photo-into-coloring-page",
        title: "Turn a favorite photo into a coloring page",
      },
      {
        href: "/blog/best-apps-for-couples",
        title: "Compare apps made for couples",
      },
    ],
  },
];

export const storyImage = (post: LovlaStory) => `/blog/${post.slug}.webp`;
export const storyDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
export const storyMinutes = (post: LovlaStory) =>
  Math.max(
    1,
    Math.ceil(
      [
        post.answer,
        post.featureLine,
        ...post.sections.flatMap((s) => [
          s.title,
          ...s.paragraphs,
          ...(s.items ?? []),
        ]),
      ]
        .join(" ")
        .split(/\s+/).length / 220,
    ),
  );
