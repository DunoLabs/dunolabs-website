import Button from "@/components/ui/Buttons";
import { NavTabs } from "@/components/layouts/NavTabs";
import { ArrowUpRight } from "lucide-react";
import ViewContainer from "../ViewContainer";
import Fixed from "@/lib/Fixed";

const Header = () => {
  return (
    <Fixed top={0} left={0} right={0}>
      <ViewContainer>
        <div className="px-4 mx-auto my-4 rounded-full sm:px-6 lg:px-8 bg-zinc-900">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <a href="/" className="font-semibold text-md text-zinc-50">
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
                      variant="white"
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

