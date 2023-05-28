import ViewContainer from "@/components/layouts/ViewContainer";
import HeadingBanner from "@/components/ui/HeadingBanner";

const CTA: React.FC = () => {
  return (
    <div className="relative py-24 bg-zinc-900 sm:py-32">
      <ViewContainer>
        <HeadingBanner
          title={"Let’s do this together!"}
          className="text-zinc-50"
          links={[
            {
              href: "mailto:dunolabs@gmail.com",
              text: "dunolabs@gmail.com",
              linkVariant: "linkLight",
            },
          ]}
        >
          <div className="max-w-3xl mt-10">
            <p className="mt-10">
              <span className="text-lg sm:text-xl text-gray">
                we specialize in building human-centered systems that solve
                real-world problems. We understand that you know your customers
                and industry best, and that&apos;s why we believe in
                collaborating with you to create digital products that truly
                resonate with your target audience.
              </span>
            </p>
            <p className="mt-10">
              <span className="text-lg sm:text-xl text-gray">
                Whether you have a specific project in mind or just a rough
                idea, we would love to hear from you. So, if you&apos;re ready
                to take your digital product to the next level, drop us a line
                and tell us your idea.
              </span>
            </p>

            <p className="mt-10">
              <span className="text-lg sm:text-xl text-gray">
                By the way: If you would like to talk to us in Hindi,
                that&apos;s fine. We do speak Hindi too.
              </span>
            </p>
          </div>
        </HeadingBanner>
      </ViewContainer>
    </div>
  );
};

export default CTA;

