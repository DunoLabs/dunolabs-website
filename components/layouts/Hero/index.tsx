import ViewContainer from "@/components/layouts/ViewContainer";

const Hero = () => {
  return (
    <div className="mt-32 sm:mt-40">
      <ViewContainer>
        <h2 className="text-6xl font-extrabold sm:text-9xl text-blue ">
          we design, develop & market your product ;
        </h2>
        <p className="w-2/3 my-16 font-semibold text-md sm:text-2xl text-gray ">
          we are a team of passionate developers and designers who are dedicated
          to creating the best possible user experience for our clients.
        </p>{" "}
      </ViewContainer>
    </div>
  );
};

export default Hero;
