import Button from "@/components/ui/Buttons";
import { NavTabs } from "@/components/layouts/NavTabs";
import { ArrowUpRight } from "lucide-react";
import Fixed from "@/lib/Fixed";
import ViewContainer from "../ViewContainer";

const Header = () => {
  return (
    <Fixed>
      <ViewContainer>
        <div className="px-4 mx-auto my-4 rounded-full w-100 sm:px-6 lg:px-8 bg-primary">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <a href="/" className="font-semibold text-md text-zinc-200">
                  dunolabs
                </a>
              </div>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <NavTabs />
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="px-4 rounded-full"
                    >
                      dunolabs@gmail.com <ArrowUpRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ViewContainer>
    </Fixed>
  );
};

export default Header;

