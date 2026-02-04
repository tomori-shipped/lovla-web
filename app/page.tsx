import Image from "next/image";
import AppStoreButton from "@/components/ui/app-store-button";
import Footer from "@/components/common/footer";
import {
  FeaturesGrid,
  HowItWorks,
  FaqSection,
  AndroidWaitlist,
  TrustBadges,
} from "@/components/landing";
import {
  features,
  howItWorksSteps,
  faqItems,
  waitlistConfig,
  trustBadges,
} from "@/constants/landing";
import { loveYaLikeASister } from "@/utils/fonts";
import bojan from "@/assets/svg/bojan.svg";
import blob from "@/assets/svg/blob.svg";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-accent">
      <div className="mx-auto h-full max-w-6xl px-4 pt-8 md:px-6 md:pt-[50px]">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-helix text-primary sm:text-6xl md:text-8xl lg:text-[110px]">
            Lovla.
          </h1>

          <h2 className="mt-2 text-2xl leading-tight text-primary sm:text-3xl md:text-4xl lg:text-[57px] lg:leading-[72px]">
            A Coloring Journal <br className="hidden sm:block" /> Made For
            Lovers
          </h2>

          <p className="mt-3 text-sm text-black sm:text-base md:text-lg">
            Be among the first couples to discover your love language
          </p>

          <div className="mx-auto mt-5 w-fit sm:mt-6 md:mt-8">
            <AppStoreButton />
          </div>

          <div className="mt-3 sm:mt-4">
            <TrustBadges badges={trustBadges} size="small" />
          </div>
        </section>

        {/* Mascot Section */}
        <section className="mt-12 md:mt-20">
          <h3
            className={`${loveYaLikeASister.className} text-center text-[32px] leading-[12px] text-primary sm:text-[42px] sm:leading-[15px] md:text-[58px] md:leading-[19.5px]`}
          >
            Hi! I&apos;m
          </h3>
          <h3
            className={`${loveYaLikeASister.className} text-center text-[100px] leading-[120px] text-primary sm:text-[150px] sm:leading-[180px] md:text-[200px] md:leading-[240px] lg:text-[227.25px] lg:leading-[280px]`}
          >
            Bojan
          </h3>

          <div className="relative mx-auto flex w-fit flex-row items-center justify-center">
            <div className="z-20 -mr-[90px] -mt-[40px] h-fit w-[220px] sm:-mr-[100px] sm:-mt-[50px] sm:w-[260px] md:-mr-[180px] md:-mt-[60px] md:w-[431.4px]">
              <Image
                src={bojan}
                className="h-full w-full"
                alt="Bojan - Lovla's friendly mascot"
                priority
              />
            </div>
            <div className="relative flex h-[240px] w-[240px] items-center justify-center sm:h-[280px] sm:w-[280px] md:h-[400px] md:w-[400px]">
              <Image
                draggable={false}
                className="absolute inset-0 z-10 h-full w-full"
                src={blob}
                alt=""
                aria-hidden="true"
              />
              <p className="z-20 ml-4 w-[150px] text-[11px] leading-snug text-primary sm:ml-5 sm:w-[170px] sm:text-xs md:ml-6 md:w-[220px] md:text-sm">
                I&apos;m here to help you and your partner discover your{" "}
                <span className="font-bold italic">love language</span> by
                turning your shared memories into a meaningful activity you
                enjoy together.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks steps={howItWorksSteps} className="mt-8" />

        {/* Features Section */}
        <FeaturesGrid features={features} className="mt-8" />

        {/* Android Waitlist Section */}
        <AndroidWaitlist config={waitlistConfig} className="mt-16" />

        {/* CTA Section */}
        <section className="mt-12 flex w-full flex-col items-center justify-between gap-6 rounded-2xl bg-cta-background p-6 sm:mt-16 sm:rounded-[34px] sm:p-8 md:flex-row md:p-10 lg:p-[53px]">
          <div className="text-center md:text-left">
            <p className="text-sm text-primary sm:text-base md:text-lg lg:text-[20px]">
              Available now on iOS
            </p>
            <p className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl lg:text-[64px]">
              Start here
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <AppStoreButton />
            <TrustBadges badges={trustBadges} size="small" />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection items={faqItems} className="mt-8" />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
