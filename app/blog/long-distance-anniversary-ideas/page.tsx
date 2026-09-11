import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";

const canonical = "https://www.lovla.app/blog/long-distance-anniversary-ideas";
const title = "35 Long-Distance Anniversary Ideas";
const description = "Celebrate apart with 35 long-distance anniversary ideas, including video-call dates, thoughtful surprises, free activities, and plans for different time zones.";
const author = "The Lovla Team";
const date = "2026-09-11";
const hero = "/blog/long-distance-anniversary-ideas.webp";
const heroUrl = `https://www.lovla.app${hero}`;
const heroAlt = "A couple celebrating over a video call with cake and love notes beneath the title 35 Long-Distance Anniversary Ideas";

export const metadata: Metadata = {
  title: "35 Long-Distance Anniversary Ideas",
  description,
  authors: [{ name: author, url: "https://www.lovla.app" }],
  alternates: { canonical },
  openGraph: { type: "article", title, description, url: canonical, siteName: "Lovla", publishedTime: date, modifiedTime: date, authors: [author], images: [{ url: heroUrl, width: 1672, height: 941, alt: heroAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [heroUrl] },
};

const groups = [
  {
    "id": "video-call",
    "title": "Anniversary video-call dates",
    "items": [
      [
        "Recreate your first date",
        "Order or cook something close to what you ate, wear a similar outfit, and tell each other what you remember noticing first. If your first date was a walk, bring a drink to the call and trade photos of the place. Leave room for your two very different versions of the story."
      ],
      [
        "Have a candlelit dinner in two places",
        "Agree on a start time and a simple meal, then put your phones somewhere you can see each other comfortably. Set the table before calling so the evening has a clear beginning. Dinner and breakfast can still count as the same date when your time zones do not cooperate."
      ],
      [
        "Color a favorite anniversary photo together",
        "Choose a picture from your last anniversary or visit and turn it into something you can make together. We make Lovla, which turns couple photos into coloring pages and lets you color together in real time. Pick the photo beforehand, then spend the date coloring and remembering the day behind it."
      ],
      [
        "Bake a tiny anniversary cake",
        "Choose an easy recipe or buy individual slices. Decorate them with your anniversary number, an inside joke, or an ambitious attempt at each other’s face. Show off the results on camera and make a small wish for the year ahead before taking the first bite."
      ],
      [
        "Dress up for a living-room dance",
        "Each choose one song: something from your early days and something that feels like your relationship now. Clear a little space and dance while you are on the call. If dancing on camera feels awkward, sit together and explain why you picked those songs instead."
      ],
      [
        "Make a relationship awards night",
        "Prepare three affectionate awards each, such as Best Airport Hug or Most Questionable Restaurant Choice. Read the nominations with unnecessary ceremony. Keep the jokes kind and skip subjects either person is sensitive about. Finish with a sincere award for something your partner did that mattered to you."
      ],
      [
        "Watch a film from the year you met",
        "Choose a film connected to your early conversations or the year your relationship began. Check you can both access it before the date, then count down to pressing play. Leave fifteen minutes afterward for dessert and conversation so the whole anniversary does not disappear into the movie."
      ]
    ]
  },
  {
    "id": "memories",
    "title": "Ideas built around your shared memories",
    "items": [
      [
        "Give each other a five-photo tour",
        "Choose five pictures that tell the story of your year. Take turns sharing one and explaining a detail your partner might have missed. Ordinary photos work beautifully here: breakfast after a long trip, a messy kitchen, or the selfie you sent before an important day."
      ],
      [
        "Read your earliest messages aloud",
        "Find a few early messages you are both happy to revisit. Read them together and remember what was happening behind the screen. Keep the screenshots private, and let either person skip anything embarrassing. The point is to enjoy how your connection began, not interrogate old wording."
      ],
      [
        "Build an anniversary playlist with liner notes",
        "Choose a short list of songs and write one sentence explaining each selection. Include a travel song, a song you overplayed, and one you want to introduce to your partner. Listen during the call or send the notes for them to open on their morning commute."
      ],
      [
        "Record the story of how you met",
        "Take turns answering three prompts: what you expected, what surprised you, and when you wanted to see the other person again. With both people’s agreement, record the conversation and save it privately. Repeat next anniversary to see which details you remember differently over time."
      ],
      [
        "Make a map of your relationship",
        "Mark where you met, where you have visited, and a place you hope to explore. Add a short caption to each location. A shared document or hand-drawn page works; there is no need to buy a custom print. Keep dream destinations separate from trips you have actually agreed to take."
      ],
      [
        "Create a one-page yearbook",
        "Make a page with a favorite photo, quote of the year, funniest mishap, and best meal together. Each fill in your own version before revealing it. Save both pages with the year in the filename, giving you a small anniversary collection that is easy to continue."
      ],
      [
        "Play a memory quiz with no scorekeeping",
        "Write five questions about your shared experiences, such as which snack you bought at the airport or what happened after your first photo together. Treat forgotten details as openings for stories. For more prompts, use the couples question guide linked below and choose questions that suit your relationship."
      ]
    ]
  },
  {
    "id": "surprises",
    "title": "Personal surprises for the anniversary itself",
    "items": [
      [
        "Send a letter with a specific opening time",
        "Write about one moment from the past year when you felt especially glad to be with them. Add something you are looking forward to. Mail it early or send a digital copy, then agree when to open it. A delayed envelope does not need to delay the message."
      ],
      [
        "Deliver breakfast with a personal note",
        "Ask about their schedule and choose a breakfast they enjoy. Arrange delivery only once you know they will be there to receive it. Add a note that connects the treat to a memory, such as the breakfast place you kept returning to during your last visit."
      ],
      [
        "Make a small anniversary care package",
        "Choose three things: a favorite snack, a photo, and a letter. Include an invitation to open it on your call. Check delivery timing and shipping rules before sending anything, especially internationally. If the parcel will arrive late, send a picture of the sealed box and your anniversary note on the day."
      ],
      [
        "Hide a digital treasure hunt in familiar places",
        "Send a clue that leads to a shared album, a particular song, or a message you both remember. Keep it to three easy clues, with a letter or date invitation at the end. Avoid anything that requires guessing passwords or searching private accounts."
      ],
      [
        "Commission your own handmade portrait",
        "Draw each other using paper and whatever pens you already have. Set a ten-minute timer and reveal the pictures together. Add the date and a caption before exchanging photos of your work. The wonky proportions may become the part you both want to keep."
      ],
      [
        "Send an anniversary voice-note collection",
        "Record three short messages: a memory, something you appreciate now, and a hope for your next year. Label them so your partner knows which to play first. This gives them something personal to hear even if your anniversary falls on a workday with little overlap."
      ],
      [
        "Write an open-next-anniversary letter",
        "Each write a letter to your future selves about life as it is today and what you hope to remember. Share one paragraph now and save the rest privately for next year. Avoid turning hopes into deadlines; the letter can hold curiosity without becoming a relationship progress report."
      ]
    ]
  },
  {
    "id": "free",
    "title": "Free and low-cost ways to celebrate",
    "items": [
      [
        "Take each other on a neighborhood photo walk",
        "Choose a short, familiar route and photograph three things you would point out if your partner were beside you. Swap the pictures afterward or talk while you walk somewhere suitable. End with a view, bench, or snack stop you want to share in person someday."
      ],
      [
        "Make a restaurant menu for your next visit",
        "Invent a little menu of meals you will cook together, complete with ridiculous dish names from your inside jokes. Pick one realistic dish to try first. Designing the menu can be the evening’s activity, with the actual cooking saved for whenever your next visit works out."
      ],
      [
        "Share a dessert and three appreciations",
        "Bring whatever sweet thing you have at home and take turns naming three specific things you appreciated this year. Try “you called before my interview” instead of only “you are supportive.” Ten focused minutes can make the date feel acknowledged when you are both tired."
      ],
      [
        "Trade a handwritten anniversary acrostic",
        "Use your partner’s name or the word ANNIVERSARY as the starting letters for a short note. Mix sincere details with a joke only they will understand. Photograph it or hold it up on camera. This is a useful last-minute idea when you want to make something without ordering supplies."
      ],
      [
        "Do an anniversary photo challenge",
        "Set five prompts: something in their favorite color, something that reminds you of your first date, something cozy, something funny, and a self-portrait. Take the photos during the day and reveal them on your call. Explain your choices instead of trying to produce perfect pictures."
      ],
      [
        "Make a three-date wish list",
        "Each propose one date at home, one date outdoors, and one date you can do remotely. Keep the ideas within a budget you both find comfortable. Compare your lists and choose the next small plan to put on your calendars, even if a bigger visit is still uncertain."
      ],
      [
        "Have a private anniversary open mic",
        "Read a short original poem, sing part of a song, or tell a two-minute story about your relationship. Give yourselves permission to be silly. If performing feels uncomfortable, exchange written versions instead and read them quietly while you stay on the call."
      ]
    ]
  },
  {
    "id": "time-zones",
    "title": "Anniversary ideas for different time zones and busy schedules",
    "items": [
      [
        "Celebrate in two short chapters",
        "Plan a ten-minute greeting at one overlapping time and a longer date on your next shared day off. Name both parts in advance so the actual anniversary does not feel forgotten. A small acknowledgment today and a relaxed celebration later can be a practical combination."
      ],
      [
        "Send a day-in-your-life anniversary diary",
        "Capture a few ordinary moments throughout the day, each with a note about where you wish your partner could join you. Send them as one small album rather than a constant stream requiring replies. They can open it when they wake up and send their own chapter back."
      ],
      [
        "Create a wake-up surprise folder",
        "Put a letter, a photo, and a short video greeting into a private folder or message thread. Send it before their morning, clearly saying they can open it whenever they have time. Test that the files open so their first task is enjoying the surprise, not requesting access."
      ],
      [
        "Watch the sunset in each other’s city",
        "Each take a short video of the evening sky and send it with an anniversary message. You do not need matching weather or simultaneous sunsets. If you can overlap for a call, share one person’s view live and save the other person’s for later."
      ],
      [
        "Pass a shared story back and forth",
        "Start a fictional version of your next date with two sentences, then let your partner add two when they are free. Keep the story going through the anniversary. Save the final version, including the absurd detours, as a small thing you created despite being awake at different hours."
      ],
      [
        "Plan the next visit without surprise bookings",
        "Use a short call to compare possible dates, travel costs, and time off. Choose one manageable next step, such as checking leave availability. Keep the anniversary warm by also naming what you want to do together. Make bookings only once both people have agreed to the plan."
      ],
      [
        "Choose a repeatable anniversary ritual",
        "End by choosing one small thing to repeat next year: the same photo pose, three questions, a particular dessert, or coloring another memory. Pick something flexible enough to survive schedule changes. Having a tradition can give you a starting point even when next year looks different."
      ]
    ]
  }
];

const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, image: heroUrl, datePublished: date, dateModified: date, inLanguage: "en-US", author: { "@type": "Organization", name: author, url: "https://www.lovla.app" }, publisher: { "@type": "Organization", name: "Lovla", url: "https://www.lovla.app" }, mainEntityOfPage: canonical };

export default function LongDistanceAnniversaryPage() {
  return <div className="min-h-screen bg-[#FDFBFD] text-[#171217]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <header className="border-b border-primary/10"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8"><Link href="/" aria-label="Lovla home" className="font-helix text-3xl tracking-[-1px] text-primary">Lovla.</Link><Link href="/blog" className="flex items-center gap-2 py-2 text-sm font-medium text-primary hover:underline underline-offset-4"><ArrowLeft size={15} aria-hidden="true" />All stories</Link></div></header>
    <main><article>
      <header className="mx-auto max-w-4xl px-6 pb-10 pt-12 text-center sm:px-8 md:pb-12 md:pt-20"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">A little closer, even from here</p><h1 className="mt-5 font-helix text-[38px] leading-[1.1] tracking-[-0.03em] text-primary sm:text-5xl md:text-[60px]">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6F5B6D] sm:text-lg">A thoughtful date, a personal surprise, or ten minutes that belong to you two. Make your anniversary feel like yours, even from different places.</p><div className="mt-6 flex items-center justify-center gap-3 text-sm text-[#786577]"><span>By {author}</span><span>·</span><time dateTime={date}>September 11, 2026</time><span>·</span><span>12 min read</span></div></header>
      <figure className="mx-auto max-w-6xl px-6 sm:px-8"><Image src={hero} alt={heroAlt} width={1672} height={941} preload sizes="(max-width: 1152px) 100vw, 1088px" className="h-auto w-full rounded-2xl" /></figure>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-8 md:py-16 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-14"><aside><nav aria-label="In this guide" className="rounded-xl border border-primary/10 p-5 lg:sticky lg:top-8 lg:rounded-none lg:border-0 lg:p-0"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">Plan your anniversary</p><ul className="mt-4 space-y-3">{groups.map(g => <li key={g.id}><a href={`#${g.id}`} className="block py-1 text-sm leading-6 text-primary hover:underline">{g.title}</a></li>)}</ul></nav></aside>
      <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]"><div className="space-y-5"><p>The most meaningful long-distance anniversary ideas start with something specific to your relationship: a photo from your last visit, the meal you shared on your first date, or a message that says exactly what this year with your partner has meant to you. Choose one shared activity and one personal gesture. That is enough to build a celebration around.</p><p>If you have an hour together, plan a video-call dinner or a creative date. If your schedules barely overlap, exchange letters or voice notes and book a longer celebration for your next shared day off. These 35 ideas include free options, last-minute surprises, and plans that work across time zones.</p><p>You do not have to fill the day or make a grand reveal. Ask what would make your partner feel celebrated, agree on a comfortable budget, and choose a plan you will both enjoy.</p></div>
      <div className="my-9 border-l-2 border-[#D98AB8] py-1 pl-5"><p className="font-semibold text-primary">Agree on the time before planning the surprise.</p><p className="mt-2">Put the date on both calendars and confirm what time it is for each of you. Keep the activity a surprise if you like, but make sure your partner knows when to be free and whether they need food, supplies, or a charged device.</p></div>
      {groups.map((group, groupIndex) => <section key={group.id} id={group.id} className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12"><h2 className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">{group.title}</h2><ol className="mt-8 ml-7 list-decimal space-y-8 marker:font-semibold marker:text-primary">{group.items.map(([name, text], itemIndex) => { return <li key={name} value={groups.slice(0, groupIndex).reduce((total, previous) => total + previous.items.length, 0) + itemIndex + 1} className="pl-1 sm:pl-2"><h3 className="text-xl font-semibold text-primary">{name}</h3><p className="mt-2">{text}</p></li>; })}</ol></section>)}
      <section className="mt-12 border-t border-primary/10 pt-10"><h2 className="font-helix text-3xl leading-tight text-primary sm:text-4xl">A simple one-hour anniversary plan</h2><p className="mt-5">Spend the first ten minutes sharing a drink and opening your notes. Use the next thirty minutes for one activity, such as coloring a photo, making your yearbook, or revealing your memory quizzes. Save fifteen minutes for dessert and a conversation about your favorite moment from the year. End by choosing your next date.</p><p className="mt-5">Prepare anything you need before the call. If one of you finishes work late, shorten the activity and keep the note. If the connection drops, switch to audio and share pictures afterward. You can still mark the day without making every part of the original plan happen.</p></section>
      <section className="mt-12 border-t border-primary/10 pt-10"><h2 className="font-helix text-3xl leading-tight text-primary sm:text-4xl">What to say when you wish you were together</h2><p className="mt-5">You can acknowledge the disappointment without asking either person to fix the distance tonight. Try: “I wish I could be there. I am really glad we made this time, and my favorite part of this year with you was…” Then name a real memory.</p><p className="mt-5">For a short anniversary message, use three pieces: something you remember, something you appreciate, and something you look forward to. For example: “I keep thinking about our rainy Saturday breakfast. Thank you for making room for me in your busiest weeks. I cannot wait for another ordinary morning together.” Change the details until it sounds like you.</p></section>
      <section className="mt-12 border-t border-primary/10 pt-10"><h2 className="font-helix text-3xl leading-tight text-primary sm:text-4xl">Find the finishing touch for your date</h2><p className="mt-5">If your partner loves opening something, pair your plan with one of our <Link href="/blog/long-distance-relationship-gifts" className="font-semibold text-primary underline">long-distance relationship gifts</Link>. For a playful date, choose a few <Link href="/blog/who-knows-me-better-questions-for-couples" className="font-semibold text-primary underline">Who Knows Me Better questions</Link> or browse our <Link href="/blog/things-to-do-on-facetime-with-your-partner" className="font-semibold text-primary underline">FaceTime activities</Link>.</p><p className="mt-5">Pick one idea that feels like your relationship and send the invitation today. A specific “Saturday, your evening and my afternoon” is a good place to start.</p></section>
      <section className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">Make your anniversary memory together</p><h2 className="mt-3 font-helix text-3xl leading-tight text-primary">Turn one of your photos into something you can make together.</h2><p className="mt-4">Lovla lets couples turn a favorite photo into a coloring page and color together in real time. Choose the picture before your date, send a little invitation, and make something together the next time you miss each other.</p><div className="mt-6"><AppStoreButton showChevron={false} className="gap-3 px-5! w-fit!" /></div><Link href="/blog/turn-photo-into-coloring-page" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">See how to choose a photo that works <ArrowRight size={15} aria-hidden="true" /></Link></section>
      <p className="border-t border-primary/10 pt-6 text-sm leading-7 text-[#786577]">Written by <span className="font-semibold text-primary">The Lovla Team</span>. Practical ideas for couples who want more ways to spend meaningful time together.</p></div></div>
    </article></main><div className="mx-auto max-w-6xl px-6 sm:px-8"><Footer compact /></div>
  </div>;
}
