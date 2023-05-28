import Layout from "@/components/layouts";
import Footer from "@/components/layouts/Footer";

import ViewContainer from "@/components/layouts/ViewContainer";
import Button from "@/components/ui/Buttons";
import CTA from "@/components/ui/CTA";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardId,
  CardTitle,
} from "@/components/ui/Card";
import HeadingBanner from "@/components/ui/HeadingBanner";

const CardData = [
  {
    id: "01",
    title: "Team players only",
    description:
      "Working for @dunolabs is a team sport. There is no place for egoism or superstar attitudes. We always take care of each other.",
  },
  {
    id: "02",
    title: "Take time off",
    description:
      'We respect your time off and do not allow you to work extra hours. We do not want you to chat with us or check your emails during your vacation. As the dictionary says: "A time when someone does not go to work or school but is free to do what they want, such as travel or relax." It’s that easy.',
  },
  {
    id: "03",
    title: "Work anywhere",
    description:
      "You decide which working place fits your needs. It’s up to you to work in the office, from your home desk, or in the middle of nowhere.",
  },
  {
    id: "04",
    title: "Be curious",
    description:
      "Doing repetitive tasks according to the same pattern from nine to five will someday get boring. We give our very best to provide you with different jobs with challenging tasks in various projects to satisfy your curiosity.",
  },
  {
    id: "05",
    title: "Transparent salaries",
    description:
      "We know your salary is a touchy issue. For the moment, you will find a salary range in every job offer, but we’re still working on a comprehensible salary formula with the whole team to avoid salary negotiations.",
  },
  {
    id: "06",
    title: "Learn new things",
    description:
      "Education is an essential part of our business. We spend a 1,000 ₹ training budget per employee and per year.",
  },
  {
    id: "07",
    title: "No assholes",
    description: "We don’t work for clients that don’t share our values.",
  },
];

const People: React.FC = () => {
  return (
    <Layout>
      <div className="py-24 bg-zinc-900 sm:py-40">
        <ViewContainer>
          <HeadingBanner
            title="Let’s be honest."
            className="mt-10 text-zinc-50"
          >
            <div className="max-w-3xl">
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  we believe that there's more to a great company than just
                  flashy perks. Instead of playing HR bingo, we're focused on
                  delivering real value to our clients. Our team is passionate
                  about creating digital solutions that solve real-world
                  problems and help our clients achieve their goals. We take the
                  time to understand our clients' unique needs and work closely
                  with them to deliver solutions that meet those needs.
                </span>
              </p>
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  We believe that our success is tied to our clients' success,
                  which is why we're dedicated to building long-term
                  relationships based on trust, transparency, and collaboration.
                  Whether you're a startup or a Fortune 500 company, we're here
                  to help you achieve your goals and take your digital product
                  to the next level. Choose Dunolabs for digital solutions that
                  truly make a difference.
                </span>
              </p>{" "}
            </div>
            <Button variant={"white"} className="mt-10 rounded-full">
              we are hiring / apply now
            </Button>
          </HeadingBanner>
        </ViewContainer>
      </div>

      <div className="py-24 bg-zinc-50 sm:py-40">
        <ViewContainer>
          <HeadingBanner
            title="We believe sustainable structures thrive when individuals can freely develop their talents in peace."
            className="max-w-4xl mt-10 text-zinc-900"
          >
            <div className="max-w-3xl">
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  You only have one life (unless you're a cat), so there's no
                  need to spend your entire week working if you don't want to.
                  The amount of time you choose to work is entirely up to you.
                </span>
              </p>
            </div>
          </HeadingBanner>

          <div className="flex flex-wrap mt-28">
            <div className="w-full md:w-1/2">
              {
                /// add only odd cards
                CardData.filter((_, index) => index % 2 === 0).map((card) => (
                  <Card className="w-9/12 mb-48 border-none shadow-none">
                    <CardHeader>
                      <CardId>{card.id}</CardId>
                      <CardTitle className="mb-3 text-3xl ">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-3">
                      <CardDescription className="text-xl ">
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))
              }
            </div>
            <div className="w-full md:w-1/2">
              {
                /// add only even cards
                CardData.filter((_, index) => index % 2 !== 0).map((card) => (
                  <Card className="w-9/12 mt-48 border-none shadow-none">
                    <CardHeader>
                      <CardId>{card.id}</CardId>
                      <CardTitle className="mb-3 text-3xl ">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-3">
                      <CardDescription className="text-xl ">
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))
              }
            </div>
          </div>
          <HeadingBanner
            title="No vacancy in the list that fits your needs?"
            className="max-w-3xl mt-10 text-zinc-900"
          >
            <div className="max-w-3xl">
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  It’s a pity, but of course, you can send us your speculative
                  application to dunolabs@gmail.com
                </span>
              </p>
            </div>
          </HeadingBanner>
        </ViewContainer>
      </div>
      <CTA />
      <Footer />
    </Layout>
  );
};

export default People;
