import ViewContainer from '@/components/layouts/view-container';
const Hero = () => {
  return (
    <div className="mt-32 sm:mt-48">
      <ViewContainer>
        <h2 className="text-4xl font-extrabold uppercase sm:text-8xl loading-text">
          We craft{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-400 to-zinc-800">
            web apps, products, & tools
          </span>
          <br /> to elevate your online presence.
        </h2>
        <p className="w-full mt-8 mb-10 font-normal sm:my-12 sm:w-2/4 text-md sm:text-2xl text-zinc-800 loading-text">
          Your go-to software agency for creative design, development, and
          effective web app marketing.
        </p>
      </ViewContainer>
    </div>
  );
};

export default Hero;
