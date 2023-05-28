import Button from "@/components/ui/Buttons";
import { NavTabs } from "@/components/ui/NavTabs";
import { ArrowUpRight } from "lucide-react";
import Fixed from "@/lib/Fixed";
import ViewContainer from "@/components/layouts/ViewContainer";
import Link from "next/link";

const Header = () => {
  return (
    <Fixed>
      <ViewContainer>
        <div className="px-10 mx-auto my-5 border-2 rounded-full w-100 backdrop-blur bg-white/60">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <Link href="/" className="text-sm font-semibold">
                  dunolabs in black & white / 2023
                </Link>
              </div>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <NavTabs />
              </nav>
            </div>
          </div>
        </div>
        <div className="items-center justify-between hidden gap-4 sm:flex">
          <div className="sm:flex sm:gap-4">
            <div>
              <Button
                variant={"white"}
                className="rounded-full "
                border="default"
              >
                dunolabs@gmail.com <ArrowUpRight className="ml-1" />
              </Button>
            </div>
          </div>{" "}
          <div className="sm:flex sm:gap-4">
            <div>
              <Button className="rounded-full ">
                we are launching soon <ArrowUpRight className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </ViewContainer>
    </Fixed>
  );
};

export default Header;
