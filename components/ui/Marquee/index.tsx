import { cn } from "@/lib/utils";

interface Props {
  text: string;
  className?: string;
}

const Marquee: React.FC<Props> = ({ text, className = "text-black" }) => {
  const span = "✦";
  return (
    <div className={cn("border-y-4 marquee border-zinc-900 ", className)}>
      <div className="py-4 font-medium uppercase marquee__group ">
        {text.concat(" ", span, " ").repeat(25)}
      </div>
    </div>
  );
};

export default Marquee;

