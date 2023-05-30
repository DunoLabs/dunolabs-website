import { cn } from "lib/utils";

interface Props {
  text: string;
  className?: string;
  seperator?: string;
}

const Marquee: React.FC<Props> = ({
  text,
  className = "text-zinc-900",
  seperator = "✦",
}) => {
  return (
    <div className={cn(" marquee", className)}>
      <div className="py-4 font-medium uppercase marquee__group">
        {text.concat(" ", seperator, " ").repeat(25)}
      </div>
    </div>
  );
};

export default Marquee;
