import AppleIcon from "@/assets/svg/apple-icon";
import AppStoreButton from "@/components/ui/app-store-button";
import { Button } from "@/components/ui/button";
import { loveYaLikeASister } from "@/utils/fonts";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import bojan from "@/assets/svg/bojan.svg";
import blob from "@/assets/svg/blob.svg";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <div className="bg-accent min-h-screen w-screen">
      <div className="max-w-6xl mx-auto h-full pt-[50px]">
        <h1 className="text-center text-[110px] font-helix text-primary">
          Lovla.
        </h1>

        <h3
          className={`text-[57px] leading-[72px] text-center font-normal font-inter text-primary`}
        >
          A Coloring Journal <br /> Made For Lovers
        </h3>

        <h6 className="text-center font-normal text-black mt-3">
          Built to strengthen relationship bonds
        </h6>

        <div className="mt-8 w-fit mx-auto">
          <AppStoreButton />
        </div>

        <div className="mt-20">
          <h1
            className={`${loveYaLikeASister.className} text-[58px] text-center text-primary leading-[19.5px]`}
          >
            Hi! I'm
          </h1>
          <h1
            className={`${loveYaLikeASister.className} text-[227.25px] text-center text-primary leading-[280px]`}
          >
            Bojan
          </h1>
        </div>

        <div className="w-fit mx-auto flex flex-row items-center justify-center relative">
          <div className="w-[431.4px] h-fit -mt-[60px] z-20">
            <Image src={bojan} className="w-full h-full" alt="bojan image" />
          </div>
          <Image
            draggable={false}
            className="absolute w-[400pxpx] h-[400px] top-0 -right-[100px] z-10"
            src={blob}
            alt="blob"
          />
          <p className="text-primary text-sm w-[273px] -ml-[65px] z-20">
            I’m here to help you and <br className="md:block hidden" /> your
            partner discover <br className="md:block hidden" /> your{" "}
            <span className="font-bold italic">love language</span> by{" "}
            <br className="md:block hidden" /> turning your shared{" "}
            <br className="md:block hidden" /> memories into a{" "}
            <br className="md:block hidden" /> meaningful activity{" "}
            <br className="md:block hidden" /> you enjoy together.
          </p>
        </div>

        <div className="mt-5 w-full flex flex-row items-center justify-between bg-[#F8F0FA] rounded-[34px] p-[53px] mb-20">
          <div>
            <div className="text-[20px] text-primary">Available now on IOS</div>
            <div className="text-[64px] text-primary font-bold">Start here</div>
          </div>

          <div>
            <AppStoreButton />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
