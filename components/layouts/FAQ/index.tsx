import HeadingBanner from "@/components/ui/HeadingBanner";
import ViewContainer from "../ViewContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const FAQList = [
  {
    question: " What is your process?",
    answer:
      "We start with a discovery phase where we learn about your business, your customers, and your goals. We then move on todesign and development, where we create a digital product that meets your needs. Finally, we launch your product and provide ongoing support.",
  },
  {
    question:
      " What kind of support do you offer after the project is completed?",
    answer:
      " We offer ongoing support and maintenance services to ensure that your solution continues to function smoothly. Our team is    available to answer your questions, address any issues, and    provide you with the assistance you need to keep your solution    up-to-date and secure.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="relative py-24 sm:py-32">
      <ViewContainer>
        <div className="flex justify-end max-w-3xl">
          <HeadingBanner
            title="Wait What? You have more questions?"
            description="We have answers to all your questions, checkout the Questions and Answers below to know more about us."
          />
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full my-10"
        ></Accordion>
      </ViewContainer>
    </div>
  );
};

export default FAQ;

