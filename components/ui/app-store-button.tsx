import AppleIcon from "@/assets/svg/apple-icon";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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
      className={`h-[56px] cursor-pointer w-[185px] bg-black! p-0 rounded-[10px] flex flex-row items-center justify-between ${className}`}
    >
      <AppleIcon className={`text-white ${iconSize}`} />
      <div className="flex flex-col items-start justify-between">
        <h6 className="text-white text-xs">Download on the</h6>
        <h6 className="text-white text-xl font-bold">App Store</h6>
      </div>
      {showChevron && (
        <ChevronRight className="text-white size-[24px]" />
      )}
    </Button>
  );
}
