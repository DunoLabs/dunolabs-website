import React from 'react';
import HeadingBanner from '@/components/ui/heading-banner';
import ViewContainer from '@/components/layouts/view-container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQList: FAQItem[] = [
  {
    question: 'What is your process?',
    answer:
      'We start with a discovery phase where we learn about your business, your customers, and your goals. We then move on to design and development, where we create a digital product that meets your needs. Finally, we launch your product and provide ongoing support.',
  },
  {
    question:
      'What kind of support do you offer after the project is completed?',
    answer:
      'We offer ongoing support and maintenance services to ensure that your solution continues to function smoothly. Our team is available to answer your questions, address any issues, and provide you with the assistance you need to keep your solution up-to-date and secure.',
  },
  {
    question: 'What is our pricing model?',
    answer:
      "We offer a fixed-price model for most projects, but we also offer hourly rates for smaller projects. We're happy to work with you to find a pricing model that works for your budget and your needs.",
  },
  {
    question: 'What is your team like?',
    answer:
      "Our team is made up of talented designers, developers, and project managers who are passionate about creating digital solutions that solve real-world problems. We're dedicated to delivering high-quality work and providing exceptional customer service.",
  },
  {
    question: 'What is your approach to design?',
    answer:
      'We believe that design should be simple, intuitive, and beautiful. We take a user-centered approach to design, which means that we focus on creating solutions that are easy to use and understand. We also believe that design should be accessible to everyone, which is why we strive to make our solutions accessible to people with disabilities.',
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
        <Accordion type="single" collapsible className="w-full my-10">
          {FAQList.map((item, index) => (
            <AccordionItem value={item.question} className="py-3" key={index}>
              <AccordionTrigger className="text-lg uppercase sm:text-xl hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ViewContainer>
    </div>
  );
};

export default FAQ;
