import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { stackMapper } from "@/utils/stackMapper";
import Image from "next/image";

export function TechStackTooltip({ image }: { image: string }) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Image
            src={"/assets/stackIcons" + image}
            fill
            alt="icon5"
            className="p-2"
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{stackMapper[image]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
