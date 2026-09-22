import {
  lovlaStories,
  storyImage,
  storyDate,
  storyMinutes,
} from "@/constants/blog/lovla-september-posts";
import { noQuizPost } from "@/constants/blog/couples-apps-without-quizzes";
import { colorBattlePost } from "@/constants/blog/long-distance-sip-and-paint";
import { creativeDatesPost } from "@/constants/blog/creative-date-ideas";
import { partnerQuestionsPost } from "@/constants/blog/questions-to-ask-your-partner";
import { activitiesPost } from "@/constants/blog/long-distance-activities";
import { photoColoringPost } from "@/constants/blog/photo-to-coloring-page";
import { whoKnowsMeBetterPost } from "@/constants/blog/who-knows-me-better";

export const blogPosts = [
  ...[...lovlaStories]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => ({
      title: post.title,
      excerpt: post.description,
      href: `/blog/${post.slug}`,
      image: storyImage(post),
      alt: post.imageAlt,
      date: storyDate(post.date),
      dateTime: post.date,
      readingMinutes: storyMinutes(post),
      category: post.category,
    })),
  {
    title: noQuizPost.title,
    excerpt: noQuizPost.excerpt,
    href: `/blog/${noQuizPost.slug}`,
    image: noQuizPost.image,
    alt: noQuizPost.imageAlt,
    date: "September 15, 2026",
    dateTime: noQuizPost.date,
    readingMinutes: noQuizPost.readingMinutes,
    category: "Creative connection",
  },
  {
    title: colorBattlePost.title,
    excerpt: colorBattlePost.excerpt,
    href: `/blog/${colorBattlePost.slug}`,
    image: colorBattlePost.image,
    alt: colorBattlePost.imageAlt,
    date: colorBattlePost.displayDate,
    dateTime: colorBattlePost.date,
    readingMinutes: colorBattlePost.readingMinutes,
    category: "Virtual paint dates",
  },
  {
    title: creativeDatesPost.title,
    excerpt: creativeDatesPost.excerpt,
    href: `/blog/${creativeDatesPost.slug}`,
    image: creativeDatesPost.image,
    alt: creativeDatesPost.imageAlt,
    date: creativeDatesPost.displayDate,
    dateTime: creativeDatesPost.date,
    readingMinutes: creativeDatesPost.readingMinutes,
    category: "Creative dates",
  },
  {
    title: partnerQuestionsPost.title,
    excerpt: partnerQuestionsPost.excerpt,
    href: `/blog/${partnerQuestionsPost.slug}`,
    image: partnerQuestionsPost.image,
    alt: partnerQuestionsPost.imageAlt,
    date: partnerQuestionsPost.displayDate,
    dateTime: partnerQuestionsPost.date,
    readingMinutes: partnerQuestionsPost.readingMinutes,
    category: "Conversation starters",
  },
  {
    title: "35 Long-Distance Anniversary Ideas",
    excerpt:
      "Celebrate your story with video-call dates, personal surprises, free activities, and thoughtful plans for different time zones.",
    href: "/blog/long-distance-anniversary-ideas",
    image: "/blog/long-distance-anniversary-ideas.webp",
    alt: "A couple celebrating their anniversary over a video call with cake and love notes",
    date: "September 11, 2026",
    dateTime: "2026-09-11",
    readingMinutes: 12,
    category: "Anniversary ideas",
  },
  {
    title: "25 Long-Distance Relationship Gifts That Actually Feel Personal",
    excerpt:
      "Personal care packages, thoughtful keepsakes, and shared experiences that give your partner a little piece of you, wherever they are.",
    href: "/blog/long-distance-relationship-gifts",
    image: "/blog/long-distance-relationship-gifts.webp",
    alt: "A couple opening a care package over video call beneath the words 25 Long-Distance Gifts",
    date: "September 10, 2026",
    dateTime: "2026-09-10",
    readingMinutes: 11,
    category: "Long-distance gifts",
  },
  {
    title: "35 Things to Do on FaceTime With Your Boyfriend or Girlfriend",
    excerpt:
      "The call does not have to be the activity. Try a quick game, make something together, plan a real date, or just share a quiet evening.",
    href: "/blog/things-to-do-on-facetime-with-your-partner",
    image: "/blog/things-to-do-on-facetime-with-your-partner.png",
    alt: "35 things to do on FaceTime: a couple sharing a playful video-call date",
    date: "September 9, 2026",
    dateTime: "2026-09-09",
    readingMinutes: 10,
    category: "FaceTime dates",
  },
  {
    title: whoKnowsMeBetterPost.title,
    excerpt: whoKnowsMeBetterPost.excerpt,
    href: `/blog/${whoKnowsMeBetterPost.slug}`,
    image: whoKnowsMeBetterPost.image,
    alt: whoKnowsMeBetterPost.imageAlt,
    date: whoKnowsMeBetterPost.displayDate,
    dateTime: whoKnowsMeBetterPost.date,
    readingMinutes: whoKnowsMeBetterPost.readingMinutes,
    category: "Couples games",
  },
  {
    title: photoColoringPost.title,
    excerpt: photoColoringPost.excerpt,
    href: `/blog/${photoColoringPost.slug}`,
    image: photoColoringPost.image,
    alt: photoColoringPost.imageAlt,
    date: photoColoringPost.displayDate,
    dateTime: photoColoringPost.date,
    readingMinutes: photoColoringPost.readingMinutes,
    category: "Creative dates",
  },
  {
    title: activitiesPost.title,
    excerpt: activitiesPost.excerpt,
    href: `/blog/${activitiesPost.slug}`,
    image: activitiesPost.image,
    alt: activitiesPost.imageAlt,
    date: activitiesPost.displayDate,
    dateTime: activitiesPost.date,
    readingMinutes: activitiesPost.readingMinutes,
    category: "Long distance dates",
  },
  {
    title: "9 Best Apps for Couples in 2026 That Are Actually Useful",
    excerpt:
      "Too many memes, not enough date nights? Find an app for the kind of time you actually want to spend together.",
    href: "/blog/best-apps-for-couples",
    image: "/blog/best-apps-for-couples-2026.webp",
    date: "September 4, 2026",
    dateTime: "2026-09-04",
    alt: "Illustration of a couple choosing relationship apps together",
    readingMinutes: 8,
    category: "Couples guides",
  },
].sort((a, b) => b.dateTime.localeCompare(a.dateTime));
