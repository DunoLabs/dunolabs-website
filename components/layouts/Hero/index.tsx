import ViewContainer from '@/components/layouts/view-container';
const Hero = () => {
  return (
    <div className="mt-32 sm:mt-40">
      <ViewContainer>
        <h2 className="text-5xl font-extrabold sm:text-8xl loading-text">
          we&apos;re building the next generation&apos;s micro-saas tools,
          websites &amp; products.
        </h2>
        <p className="w-full my-12 font-semibold sm:my-16 sm:w-2/3 text-md sm:text-2xl text-gray">
          we are a team of passionate developers and designers who are dedicated
          to creating the best possible user experience.
        </p>
      </ViewContainer>
    </div>
  );
};

export default Hero;
