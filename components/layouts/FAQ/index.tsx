import HeadingBanner from "@/components/ui/HeadingBanner";
import ViewContainer from "../ViewContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import CustomCursor from "@/lib/CustomCursor";

const FAQ: React.FC = () => {
  return (
    <div className="relative py-24 sm:py-32">
      <ViewContainer>
        <div className="flex justify-end max-w-3xl">
          <CustomCursor image="/media/eye-cursor-img.png">
            <HeadingBanner
              title="Wait What? You have more questions?"
              description="We have answers to all your questions, checkout the Questions and Answers below to know more about us."
            />
          </CustomCursor>
        </div>
        <Accordion type="single" collapsible className="w-full my-10">
          <AccordionItem value="item1" className="py-3">
            <AccordionTrigger className="text-xl uppercase hover:no-underline">
              What is your process?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              We start with a discovery phase where we learn about your
              business, your customers, and your goals. We then move on to
              design and development, where we create a digital product that
              meets your needs. Finally, we launch your product and provide
              ongoing support.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item2" className="py-3">
            <AccordionTrigger className="text-xl uppercase hover:no-underline">
              What kind of support do you offer after the project is completed?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              We offer ongoing support and maintenance services to ensure that
              your solution continues to function smoothly. Our team is
              available to answer your questions, address any issues, and
              provide you with the assistance you need to keep your solution
              up-to-date and secure.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ViewContainer>
    </div>
  );
};

export default FAQ;

