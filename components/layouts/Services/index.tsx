import ViewContainer from "components/layouts/ViewContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/Accordion";
import HeadingBanner from "components/ui/HeadingBanner";
import { Badge } from "components/ui/Badge";

interface OurServicesItem {
  item: string;
  title: string;
  content: string;
  status: string;
}

const OurServicesList: OurServicesItem[] = [
  {
    item: "item-1",
    title: "UX / UI Design",
    content:
      "We design beautiful and functional interfaces, from scratch or based on your existing design.",
    status: "active",
  },
  {
    item: "item-2",
    title: "Product Design",
    content:
      "We design beautiful and functional interfaces, from scratch or based on your existing design.",
    status: "active",
  },
  {
    item: "item-3",
    title: "Web Development",
    content:
      "we provide you better and modern web interface for your company website and web products",
    status: "active",
  },
  {
    item: "item-4",
    title: "App Development",
    content:
      "We build mobile apps for iOS and Android, using the latest technologies.",
    status: "coming soon",
  },
];

const OurServices: React.FC<OurServicesItem> = () => {
  return (
    <div className="relative py-24 sm:py-40">
      <ViewContainer>
        <div className="items-center justify-center w-full h-full ">
          <div className="flex flex-wrap items-center justify-between mt-10">
            <div className="w-full h-full mb-10 sm:w-3/5">
              <p>
                <span className="text-lg text-zinc-900 sm:text-lg text-gray">
                  01 / 03
                </span>
              </p>
              <HeadingBanner
                title="Tough challenges?
                Take it easy!
                We’ll assist you."
                description="  we are a team of passionate developers and designers who are
                  dedicated to creating the best possible user experience for
                  our clients."
                links={[
                  {
                    text: "View all services",
                    linkVariant: "linkDark",
                  },
                ]}
              />
            </div>
            <div className=" sm:w-[28rem] w-full">
              <Accordion
                type="single"
                collapsible
                className=" sm:w-[28rem] w-full"
              >
                {OurServicesList.map((item, index) => (
                  <AccordionItem value={item.item} className="py-3" key={index}>
                    <AccordionTrigger className="text-lg uppercase sm:text-xl hover:no-underline">
                      {item.title}{" "}
                      {item.status === "coming soon" ? (
                        <Badge
                          className="ml-2 bg-zinc-900 text-zinc-50"
                          variant={"default"}
                        >
                          {item.status}
                        </Badge>
                      ) : null}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};

export default OurServices;
