import ViewContainer from "components/layouts/ViewContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/Accordion";
import HeadingBanner from "components/ui/HeadingBanner";

const OurServicesList = [
  {
    item: "item-1",
    title: "UX / UI Design",
    content:
      "We design beautiful and functional interfaces, from scratch or based on your existing design.",
  },
  {
    item: "item-2",
    title: "Web Design",
    content:
      "We design beautiful and functional interfaces, from scratch or based on your existing design.",
  },
  {
    item: "item-3",
    title: "Web Development",
    content:
      "We build websites and web applications using the latest technologies.",
  },
  {
    item: "item-4",
    title: "Digital Marketing",
    content:
      "We help you reach your target audience and convert them into customers using the latest digital marketing techniques.",
  },
];

const OurServices: React.FC = () => {
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
                      {item.title}
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
