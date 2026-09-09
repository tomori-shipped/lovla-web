import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/common/footer";
import AppStoreButton from "@/components/ui/app-store-button";

const canonical = "https://www.lovla.app/blog/things-to-do-on-facetime-with-your-partner";
const title = "35 Things to Do on FaceTime With Your Boyfriend or Girlfriend";
const description = "35 genuinely fun things to do on FaceTime with your boyfriend or girlfriend, from quick games and creative dates to low-energy ways to feel close.";
const author = "The Lovla Team";
const date = "2026-09-09";

export const metadata: Metadata = {
  title: "35 Things to Do on FaceTime With Your Boyfriend or Girlfriend",
  description,
  authors: [{ name: author, url: "https://www.lovla.app" }],
  alternates: { canonical },
  openGraph: { type: "article", title, description, url: canonical, siteName: "Lovla", publishedTime: date, modifiedTime: date, authors: [author] },
};

const groups = [
  { id: "quick", title: "Quick things to do when you only have 15 minutes", items: [
    ["Give each other a three-photo day recap", "Pick three photos from your camera roll that explain your day better than a play-by-play. Share the story behind each one and let your partner ask one follow-up question."],
    ["Play two truths and a lie about your day", "Keep the statements small and specific. The ridiculous details are usually more fun than trying to invent a dramatic lie."],
    ["Do a five-minute room scavenger hunt", "Take turns naming something to find: the oldest thing you own, something that smells good, something you forgot you had, or the weirdest item within reach."],
    ["Rate each other’s current snacks", "Show what you are eating, defend it like a food critic, and give the other person permission to be completely unreasonable about the score."],
    ["Build tomorrow’s tiny challenge", "Give each other one harmless mission for tomorrow, like photograph something yellow, try a new drink, or send a voice note from an unexpected place."],
    ["Trade one song each", "Choose a song that matches your mood right now. Listen separately while staying on the call, then explain why you picked it."],
    ["Ask one question you have never asked", "Skip the interview. Each person gets exactly one question, which makes you choose something you actually want to know."],
  ]},
  { id: "games", title: "Games that work surprisingly well on a video call", items: [
    ["Play Who Knows Me Better", "Choose ten questions, write your answers before guessing, and compare. Wrong answers are conversation starters, not evidence for the prosecution."],
    ["Play 20 Questions", "Think of a person, place, object, or shared memory and let your partner narrow it down using yes-or-no questions."],
    ["Try a drawing guessing game", "Grab paper, set a one-minute timer, and draw a prompt without speaking. Bad drawings make this better."],
    ["Play Would You Rather with follow-ups", "The choice is only the beginning. After each answer, ask why. That is where the interesting part usually starts."],
    ["Make a relationship trivia round", "Ask about your first dates, trips, old jokes, favorite meals, and tiny details you both remember differently."],
    ["Do an alphabet challenge", "Pick a category such as foods, cities, movies, or date ideas and alternate answers from A onward until somebody gets stuck."],
    ["Play the five-second category game", "Name a category and give your partner five seconds to name three things in it. Keep the categories personal and silly."],
  ]},
  { id: "creative", title: "Creative FaceTime dates when you want to make something", items: [
    ["Color the same memory together", "Choose a photo that means something to both of you, turn it into a coloring page, and color while you talk. The point is the shared activity, not staying inside every line."],
    ["Draw portraits of each other", "Give yourselves ten minutes and do not erase anything. Reveal the portraits at the same time."],
    ["Make a shared dream-room mood board", "Choose a room you would love to have one day and take turns finding ideas for it. Compare the things you both immediately agree on."],
    ["Write a six-line story together", "One person writes the first line, the other adds the next, and keep alternating. Make the rule that neither person is allowed to reject the previous line."],
    ["Design your imaginary restaurant", "Choose the name, menu, signature dessert, music, dress code, and the one menu item you would absolutely refuse to serve."],
    ["Make each other a tiny playlist", "Pick five songs around a prompt: us on a road trip, rainy Sunday, first-date nerves, or songs that feel like home."],
    ["Plan a photo recreation", "Find an old picture of the two of you and plan how you will recreate it the next time you are together."],
  ]},
  { id: "dates", title: "FaceTime date ideas that feel more like an actual date", items: [
    ["Cook the same dinner", "Choose a forgiving recipe, start together, and prop the phone somewhere safe. Compare results instead of racing."],
    ["Order each other dinner", "Set a budget, agree on allergies and hard no’s, then choose the other person’s meal without revealing it first."],
    ["Have a coffee-shop date from two places", "Each go somewhere comfortable, order a drink, put in headphones, and treat the call like you are sitting across a tiny table."],
    ["Dress up for no practical reason", "Pick a level of effort, get ready separately, and meet back on the call. A little ceremony can make an ordinary evening feel different."],
    ["Take each other on a neighborhood walk", "Use headphones, keep safety in mind, and show your partner the little things you normally pass without mentioning."],
    ["Do a dessert date", "Skip the full dinner. Each person gets or makes one dessert, then stay on the call long enough to actually enjoy it instead of turning it into content."],
    ["Plan your next in-person day", "Instead of planning an entire trip, build one realistic day: breakfast, one thing to do, somewhere to wander, dinner, and one unplanned hour."],
  ]},
  { id: "quiet", title: "Low-energy things to do when you miss each other but you are tired", items: [
    ["Read beside each other", "Stay on the call while you each read your own book for 20 minutes, then share one line or idea that stood out."],
    ["Do your nighttime routines together", "Brush teeth, make tea, pack tomorrow’s bag, or fold laundry. Ordinary parallel time can feel more intimate than forcing another big conversation."],
    ["Look through old photos", "Choose a month or trip and scroll slowly. Stop whenever one of you remembers something the other has forgotten."],
    ["Make a short gratitude list", "Name three things from the day you appreciated. They do not all have to be about the relationship."],
    ["Listen to the same album", "Keep the call open, turn the volume down enough to talk between songs, and let the music carry the quiet parts."],
    ["Do a ten-minute reset", "Both tidy one small area while you talk. Stop after ten minutes even if the room is not perfect."],
    ["Say goodnight without stretching the call", "Some nights the best date is a warm ten-minute check-in and permission for both of you to sleep."],
  ]},
];

const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, datePublished: date, dateModified: date, inLanguage: "en-US", author: { "@type": "Organization", name: author, url: "https://www.lovla.app" }, publisher: { "@type": "Organization", name: "Lovla", url: "https://www.lovla.app" }, mainEntityOfPage: canonical };

export default function FaceTimeIdeasPage() {
  let n = 0;
  return <div className="min-h-screen bg-[#FDFBFD] text-[#171217]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <header className="border-b border-primary/10"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8"><Link href="/" aria-label="Lovla home" className="font-helix text-3xl tracking-[-1px] text-primary">Lovla.</Link><Link href="/blog" className="flex items-center gap-2 py-2 text-sm font-medium text-primary hover:underline underline-offset-4"><ArrowLeft size={15} aria-hidden="true" />All stories</Link></div></header>
    <main><article>
      <header className="mx-auto max-w-4xl px-6 pb-10 pt-12 text-center sm:px-8 md:pb-12 md:pt-20"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A93F7B]">For when “so… what are you doing?” runs out</p><h1 className="mt-5 font-helix text-[38px] leading-[1.1] tracking-[-0.03em] text-primary sm:text-5xl md:text-[60px]">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6F5B6D] sm:text-lg">You do not need another two-hour conversation about your day. Pick something to do together and let the conversation happen around it.</p><div className="mt-6 flex items-center justify-center gap-3 text-sm text-[#786577]"><span>By {author}</span><span>·</span><time dateTime={date}>September 9, 2026</time><span>·</span><span>10 min read</span></div></header>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-8 md:py-16 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-14"><aside><nav aria-label="In this guide" className="rounded-xl border border-primary/10 p-5 lg:sticky lg:top-8 lg:rounded-none lg:border-0 lg:p-0"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#786577]">Pick your energy</p><ul className="mt-4 space-y-3">{groups.map(g => <li key={g.id}><a href={`#${g.id}`} className="block py-1 text-sm leading-6 text-primary hover:underline">{g.title}</a></li>)}</ul></nav></aside>
      <div className="min-w-0 max-w-[740px] text-[17px] leading-[1.85] text-[#4F4350]"><div className="space-y-5"><p>FaceTime gets boring when the call itself is expected to be the entertainment. That is a lot of pressure for two people who may have already texted all day.</p><p>A better approach is to give the call a small purpose. Play something, make something, eat something, walk somewhere, or simply do your separate routines together. You still get to talk, but neither person has to manufacture conversation every minute.</p><p>This list stays focused on activities that actually work while you are already on a video call. If you want a broader list that includes texting, mail, shared rituals, and asynchronous ideas, see our <Link href="/blog/long-distance-relationship-activities" className="font-semibold text-primary underline decoration-[#D98AB8] underline-offset-4">long-distance relationship activities</Link>.</p></div>
      <div className="my-9 border-l-2 border-[#D98AB8] py-1 pl-5"><p className="font-semibold text-primary">Choose by energy, not ambition.</p><p className="mt-2">If one of you is exhausted, pick something from the quiet section. A date you both enjoy for 15 minutes is better than an elaborate plan you secretly want to cancel.</p></div>
      {groups.map(group => <section key={group.id} id={group.id} className="scroll-mt-8 border-t border-primary/10 pt-10 mt-12"><h2 className="font-helix text-3xl leading-tight tracking-[-0.02em] text-primary sm:text-4xl">{group.title}</h2><ol className="mt-8 ml-7 list-decimal space-y-8 marker:font-semibold marker:text-primary">{group.items.map(([name, text]) => { n += 1; return <li key={name} value={n} className="pl-1 sm:pl-2"><h3 className="text-xl font-semibold text-primary">{name}</h3><p className="mt-2">{text}</p></li>; })}</ol></section>)}
      <section className="mt-12 border-t border-primary/10 pt-10"><h2 className="font-helix text-3xl leading-tight text-primary sm:text-4xl">How to make a FaceTime date feel less awkward</h2><p className="mt-5">Agree on the activity before the call when it requires ingredients, supplies, or leaving home. For everything else, keep the setup under five minutes. Put the phone somewhere stable, use headphones when they help, and do not turn every quiet moment into a problem that needs fixing.</p><p className="mt-5">It also helps to give the date an ending. “Let’s cook and hang out until 9:30” feels easier than an open-ended call where somebody eventually has to invent a reason to leave.</p></section>
      <section className="my-12 rounded-2xl bg-[#F0E6F0] p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8C4677]">A creative FaceTime date</p><h2 className="mt-3 font-helix text-3xl leading-tight text-primary">Turn one of your photos into something you can make together.</h2><p className="mt-4">Lovla lets couples turn a favorite photo into a coloring page and color together in real time. Pick a memory, stay on your call, and work on the same page while you talk.</p><div className="mt-6"><AppStoreButton showChevron={false} className="gap-3 px-5! w-fit!" /></div><Link href="/blog/turn-photo-into-coloring-page" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">See how to choose a photo that works <ArrowRight size={15} aria-hidden="true" /></Link></section>
      <p className="border-t border-primary/10 pt-6 text-sm leading-7 text-[#786577]">Written by <span className="font-semibold text-primary">The Lovla Team</span>. Practical ideas for couples who want more ways to spend meaningful time together.</p></div></div>
    </article></main><div className="mx-auto max-w-6xl px-6 sm:px-8"><Footer compact /></div>
  </div>;
}
