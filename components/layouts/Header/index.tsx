import Button from "components/ui/Buttons";
import { NavTabs } from "components/ui/NavTabs";
import { ArrowUpRight } from "lucide-react";
import Fixed from "lib/Fixed";
import ViewContainer from "components/layouts/ViewContainer";
import Link from "next/link";

const Header = () => {
  return (
    <Fixed>
      <ViewContainer>
        <div className="my-5 border-2 rounded-full sm:px-10 w-100 backdrop-blur bg-white/60 px-7">
          <div className="flex items-center justify-between h-14 sm:h-16 ">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <div className="flex items-center justify-center gap-4 ">
                <Link
                  href="/"
                  className="text-sm font-semibold text-center sm:text-start "
                >
                  dunolabs in black &amp; white / 2023
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
            <Button
              variant={"white"}
              className="rounded-full "
              border="default"
              asChild
            >
              <Link href="mailto:dunolabs@gmail.com">
                dunolabs@gmail.com <ArrowUpRight className="ml-1" />
              </Link>
            </Button>
          </div>{" "}
          <div className="sm:flex sm:gap-4">
            <Button className="rounded-full " asChild>
              <Link href="/contact">
                let&apos;s be frens! <ArrowUpRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </ViewContainer>
    </Fixed>
  );
};

export default Header;
