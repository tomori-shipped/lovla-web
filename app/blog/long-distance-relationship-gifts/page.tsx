import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";

const canonical = "https://www.lovla.app/blog/long-distance-relationship-gifts";
const title = "25 Long-Distance Relationship Gifts Packed With Love";
const description = "Find 25 thoughtful long-distance relationship gifts, from personal care packages and keepsakes to digital surprises and creative dates you can share.";
const author = "The Lovla Team";
const date = "2026-09-10";
const hero = "/blog/long-distance-relationship-gifts.webp";
const heroUrl = `https://www.lovla.app${hero}`;
const heroAlt = "A couple opening a care package over video call beneath the words 25 Long-Distance Gifts";

export const metadata: Metadata = {
  title: "25 Long-Distance Relationship Gifts Packed With Love",
  description,
  authors: [{ name: author, url: "https://www.lovla.app" }],
  alternates: { canonical },
  openGraph: { type: "article", title, description, url: canonical, siteName: "Lovla", publishedTime: date, modifiedTime: date, authors: [author], images: [{ url: heroUrl, width: 1672, height: 941, alt: heroAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [heroUrl] },
};

const groups = [
  {
    "id": "personal",
    "title": "Personal gifts that hold a little of your story",
    "items": [
      [
        "A small photo book with the stories left in",
        "Choose ten or twelve photos and write what you remember beneath each one. Include the missed train, the terrible breakfast, and the blurry picture you both love. A short book with real captions gives your partner more to return to than a large album of unexplained photos. Leave a final page for your next visit."
      ],
      [
        "Open-when letters for specific days",
        "Write a handful of letters for moments you can picture: after a difficult shift, before an interview, or on a Sunday when the apartment feels quiet. Put a memory, a joke, or a concrete encouragement inside each envelope. Five thoughtful letters are plenty; you do not need to turn this into a month-long craft project."
      ],
      [
        "A framed photo with a note on the back",
        "Pick a picture your partner would actually display, then write something they cannot see from the image alone. Try: “This was when I realized I could spend an entire afternoon doing nothing with you.” Check how much shelf space they have before choosing the frame, especially if they live with roommates."
      ],
      [
        "A pocket-sized memory notebook",
        "Fill a little notebook with the details you are glad you noticed: their airport wave, their coffee order, the phrase they say when they are sleepy. Date a few entries so the book feels rooted in your actual life. Keep the rest blank if you want to keep adding memories during future visits."
      ],
      [
        "A map of one place that matters",
        "Choose the street where you met, the park from your first visit, or the town where you hope to spend a weekend. A simple printed map with a handwritten marker is enough. Add one sentence about why you chose that spot, rather than relying on coordinates your partner might not recognize."
      ]
    ]
  },
  {
    "id": "care-packages",
    "title": "Care package gifts for their ordinary days",
    "items": [
      [
        "A favorite-snack tasting box",
        "Choose three or four things they already love and one wildcard you want them to try. Add little scorecards and keep the same snacks for yourself if possible, so opening the box becomes a tasting date. Check allergies, temperature sensitivity, and the destination’s shipping restrictions before sending food."
      ],
      [
        "A hoodie with a letter in the pocket",
        "Send a hoodie they have borrowed before, or pick one in a size and fabric they like. Slip a letter into the pocket and mention it on the tag so it survives the first wash. Avoid adding perfume unless you know they enjoy it; familiar and comfortable is the goal."
      ],
      [
        "A morning coffee or tea kit",
        "Build the gift around their actual morning: their preferred tea, coffee they can brew with the equipment they own, and a note to read with the first cup. Suggest a weekend breakfast call. If mornings never overlap across your time zones, exchange photos of your drinks instead."
      ],
      [
        "A rough-week comfort parcel",
        "Think about the week they are having. Soft socks, a familiar snack, and a handwritten permission slip to have an uneventful evening can make a thoughtful combination. Choose things they will use immediately. Keep the message warm without expecting them to suddenly feel better or schedule a long call to thank you."
      ],
      [
        "A tiny piece of your hometown",
        "Send a postcard from your neighborhood, a small print by a local artist, or a bookmark from the bookshop you always mention. Explain where you found it and why it reminded you of them. It gives your partner a physical detail from the everyday world they usually see through your phone."
      ]
    ]
  },
  {
    "id": "shared",
    "title": "Gifts that turn into time together",
    "items": [
      [
        "A photo-coloring date invitation",
        "Pick a favorite photo and give your partner an invitation to color that memory together. We make Lovla, a couples coloring app that turns photos into coloring pages and lets you color together in real time. The gift is choosing the memory and making time for it. Check the current App Store listing for compatibility and any purchase requirements before planning."
      ],
      [
        "Two copies of a short book",
        "Choose a book you can both finish without homework-level commitment. Put a note inside their copy with three moments you want to discuss, or trade one thought after each chapter. If your reading speeds differ, agree on a small stopping point so neither person feels chased through the story."
      ],
      [
        "A cook-together recipe kit",
        "Send a recipe card with a personal note about why you chose the meal. You can include suitable shelf-stable ingredients, or arrange a local grocery order with their agreement. Pick a forgiving recipe and set a time to cook. A meal you can make with ordinary pans will be easier to enjoy than a complicated surprise."
      ],
      [
        "A movie-night envelope",
        "Put together a movie suggestion, a snack, and an invitation with a specific date and time. Confirm you can both access the film in your own regions before spending money. Add a second option so your partner gets a say, then keep the evening simple: press play together and compare favorite scenes afterward."
      ],
      [
        "A question deck made just for you two",
        "Write fifteen questions on cards, mixing silly choices with memories and things you still want to learn. Include prompts such as “Which meal from our last visit deserves a rematch?” Leave room to skip any question. This works particularly well as a small addition to a birthday parcel or an otherwise ordinary call."
      ]
    ]
  },
  {
    "id": "digital",
    "title": "Digital gifts when shipping is awkward or time is short",
    "items": [
      [
        "A playlist with a reason for every song",
        "Choose eight songs and attach a short note explaining each choice. One can be the song from a trip; another can capture how you feel waiting at arrivals. Send the notes as a letter or document alongside the playlist. Check that your partner can open the music link before making it the centerpiece."
      ],
      [
        "A collection of short voice notes",
        "Record a good-morning message, a favorite memory, something ridiculous, and a gentle goodnight. Give the files clear names so your partner can choose one without guessing. Keep them somewhere private that your partner can access and download. There is no need for perfect sound or a rehearsed speech."
      ],
      [
        "A digital scrapbook of one visit",
        "Use a small set of pictures, ticket screenshots, and captions to tell the story of a single trip. A simple PDF or shared album works. Include the ordinary bits between the highlights, and avoid making a public post out of private messages or photos unless your partner is comfortable with that."
      ],
      [
        "A local lunch or coffee treat",
        "Arrange a meal or café gift card from somewhere near them after checking the location, redemption terms, and any delivery fees. If a surprise delivery would interrupt work, tell them the plan and let them choose the time. Pair the treat with a message about the day they are having."
      ],
      [
        "A future-date menu",
        "Make a one-page menu of three dates you would like to arrange: a coloring evening, a breakfast call, or a photo walk. Give each option a realistic duration and let your partner pick. The follow-through matters here. Once they choose, put it on both calendars and handle the small bits of planning."
      ]
    ]
  },
  {
    "id": "keepsakes",
    "title": "Everyday keepsakes and something to look forward to",
    "items": [
      [
        "Matching mugs you will actually use",
        "Choose the mug shape your partner reaches for, whether that is a big tea mug or a small coffee cup. Matching can mean the same color or a shared joke; it does not have to mean identical slogans. Include an invitation for your first drink together over a call."
      ],
      [
        "A keyring with a private reference",
        "Use a date, a short phrase, or a symbol that means something to the two of you. Keep it small enough for their actual keys and check spelling before ordering personalization. An inside joke often gives you more to smile about than a generic romantic message, especially for someone who prefers understated gifts."
      ],
      [
        "A desk photo calendar",
        "Choose twelve photos and add birthdays, anniversaries, and confirmed visits. Leave uncertain travel dates unmarked so the calendar does not become a promise neither of you can keep. If the year is nearly over, make a rolling twelve-month version or a simple set of monthly photo cards."
      ],
      [
        "A shared visit fund contribution",
        "If seeing each other is the thing you both want most, offer a contribution toward an agreed visit instead of another parcel. Include a card explaining what you are looking forward to doing together. Discuss the amount and booking plan first, so a generous gesture does not create pressure to take time off or spend more."
      ],
      [
        "A next-visit adventure envelope",
        "Make a small envelope containing three realistic plans for the next time you are together: a favorite breakfast place, a walk, and an evening at home. Add a little drawing or a printed menu. Keep reservations flexible and agree on travel before booking. Anticipation can be part of the gift without making the visit a surprise."
      ]
    ]
  }
];

const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, image: heroUrl, datePublished: date, dateModified: date, inLanguage: "en-US", author: { "@type": "Organization", name: author, url: "https://www.lovla.app" }, publisher: { "@type": "Organization", name: "Lovla", url: "https://www.lovla.app" }, mainEntityOfPage: canonical };

export default function LongDistanceGiftsPage() {
  return <div className="min-h-screen bg-[#FDFBFD] text-[#171217]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <header className="border-b border-primary/10"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8"><Link href="/" aria-label="Lovla home" className="font-helix text-3xl tracking-[-1px] text-primary">Lovla.</Link><Link href="/blog" className="flex items-center gap-2 py-2 text-sm font-medium text-primary hover:underline underline-offset-4"><ArrowLeft size={15} aria-hidden="true" />All stories</Link></div></header>
    <main><article>
      <header className="mx-auto max-w-4xl px-6 pb-10 pt-12 text-center sm:px-8 md:pb-12 md:pt-20"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">A little closer, even from here</p><h1 className="mt-5 font-helix text-[38px] leading-[1.1] tracking-[-0.03em] text-primary sm:text-5xl md:text-[60px]">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6F5B6D] sm:text-lg">Something they can open, keep, or do with you. Here are 25 gifts that make room for your actual story.</p><div className="mt-6 flex items-center justify-center gap-3 text-sm text-[#786577]"><span>By {author}</span><span>·</span><time dateTime={date}>September 10, 2026</time><span>·</span><span>11 min read</span></div></header>
      <figure className="mx-auto max-w-6xl px-6 sm:px-8"><Image src={hero} alt={heroAlt} width={1672} height={941} preload sizes="(max-width: 1152px) 100vw, 1088px" className="h-auto w-full rounded-2xl" /></figure>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-8 md:py-16 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-14"><aside><nav aria-label="In this guide" className="rounded-xl border border-primary/10 p-5 lg:sticky lg:top-8 lg:rounded-none lg:border-0 lg:p-0"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">Find their kind of gift</p><ul className="mt-4 space-y-3">{groups.map(g => <li key={g.id}><a href={`#${g.id}`} className="block py-1 text-sm leading-6 text-primary hover:underline">{g.title}</a></li>)}</ul></nav></aside>
      <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]"><div className="space-y-5"><p>The best long-distance relationship gifts give your partner something personal to come back to: your handwriting, a favorite memory, a comfort they reach for, or a plan to spend time together. You do not need a huge box or an expensive device to make the gift feel like you.</p><p>Start with what your partner enjoys. Someone who keeps every card might love a bundle of letters. Someone with a crowded apartment may prefer a digital scrapbook or a date you have already planned. The ideas below work for a boyfriend, girlfriend, or spouse; choose by personality rather than the label on a gift guide.</p><p>For a quick starting point, pair one keepsake with one shared activity. A photo and a coloring date, a mug and a breakfast call, or a snack box and a movie invitation gives the gift a life after it arrives.</p></div>
      <div className="my-9 border-l-2 border-[#D98AB8] py-1 pl-5"><p className="font-semibold text-primary">Set the whole budget before you shop.</p><p className="mt-2">Include packaging and delivery in what you can comfortably spend. If shipping would eat most of it, choose a digital gift or order something locally to your partner. A thoughtful message does not become less meaningful because it arrives on a screen.</p></div>
      {groups.map((group, groupIndex) => <section key={group.id} id={group.id} className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12"><h2 className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">{group.title}</h2><ol className="mt-8 ml-7 list-decimal space-y-8 marker:font-semibold marker:text-primary">{group.items.map(([name, text], itemIndex) => { return <li key={name} value={groups.slice(0, groupIndex).reduce((total, previous) => total + previous.items.length, 0) + itemIndex + 1} className="pl-1 sm:pl-2"><h3 className="text-xl font-semibold text-primary">{name}</h3><p className="mt-2">{text}</p></li>; })}</ol></section>)}
      <section className="mt-12 border-t border-primary/10 pt-10"><h2 className="font-helix text-3xl leading-tight text-primary sm:text-4xl">How to pack a long-distance care package</h2><p className="mt-5">Choose a small theme, then stop at a few items: something to read, something to enjoy, and something to keep. For a quiet Sunday box, that could be a letter, tea, and a photo. For a birthday, it could be a memory notebook, a favorite snack, and an invitation to celebrate on a call.</p><p className="mt-5">Protect fragile items, keep anything that could leak away from paper, and confirm the delivery address. For international parcels, check your carrier’s current rules and the destination’s requirements before buying food or other restricted items. For parcels sent through USPS, start with its <a href="https://www.usps.com/international/shipping-restrictions.htm" className="font-semibold text-primary underline">international shipping guidance</a>. Leave enough time for delays, and send a digital note on the day if the parcel is still traveling.</p><p className="mt-5">Offer to open it together, but let your partner choose. They may want a private moment with a letter, or they may get home too tired for a call. Receiving a gift should not come with a performance requirement.</p></section>
      <section className="mt-12 border-t border-primary/10 pt-10"><h2 className="font-helix text-3xl leading-tight text-primary sm:text-4xl">Make the next moment part of the gift</h2><p className="mt-5">A short invitation makes it easy to follow through: “I kept the same tea. Want to have a cup together on Sunday?” If you need an activity to include, browse our <Link href="/blog/things-to-do-on-facetime-with-your-partner" className="font-semibold text-primary underline">FaceTime date ideas</Link> or our <Link href="/blog/long-distance-relationship-activities" className="font-semibold text-primary underline">long-distance relationship activities</Link>.</p><p className="mt-5">You can also tuck a few <Link href="/blog/who-knows-me-better-questions-for-couples" className="font-semibold text-primary underline">Who Knows Me Better questions</Link> into a parcel. Pick the ones that will start a story, then leave the evening open enough to enjoy the conversation.</p></section>
      <section className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">Give a memory some time together</p><h2 className="mt-3 font-helix text-3xl leading-tight text-primary">Turn one of your photos into something you can make together.</h2><p className="mt-4">Lovla lets couples turn a favorite photo into a coloring page and color together in real time. Choose the picture before your date, send a little invitation, and make something together the next time you miss each other.</p><div className="mt-6"><AppStoreButton showChevron={false} className="gap-3 px-5! w-fit!" /></div><Link href="/blog/turn-photo-into-coloring-page" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">See how to choose a photo that works <ArrowRight size={15} aria-hidden="true" /></Link></section>
      <p className="border-t border-primary/10 pt-6 text-sm leading-7 text-[#786577]">Written by <span className="font-semibold text-primary">The Lovla Team</span>. Practical ideas for couples who want more ways to spend meaningful time together.</p></div></div>
    </article></main><div className="mx-auto max-w-6xl px-6 sm:px-8"><Footer compact /></div>
  </div>;
}
