import AppleIcon from "@/assets/svg/apple-icon";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

/** App Store URL for the Lovla app. */
const APP_STORE_URL = "https://apps.apple.com/gb/app/lovla/id6758548454";

interface AppStoreButtonProps {
  className?: string;
  iconSize?: string;
  showChevron?: boolean;
}

export default function AppStoreButton({
  className = "",
  iconSize = "size-[30px]",
  showChevron = true,
}: AppStoreButtonProps) {
  return (
    <Button
      asChild
      aria-label="Download Lovla on the App Store"
      className={`h-[56px] cursor-pointer w-[185px] bg-black! p-0 rounded-[10px] flex flex-row items-center justify-between ${className}`}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppleIcon className={`text-white ${iconSize}`} />
        <div className="flex flex-col items-start justify-between">
          <span className="text-white text-xs">Download on the</span>
          <span className="text-white text-xl font-bold">App Store</span>
        </div>
        {showChevron && (
          <ChevronRight className="text-white size-[24px]" />
        )}
      </a>
    </Button>
  );
}
