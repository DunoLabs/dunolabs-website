import ScreenCenter from "@/components/layouts/ScreenCenter";
import ViewContainer from "@/components/layouts/ViewContainer";

const Hero = () => {
  return (
    <ScreenCenter className="mt-24">
      <ViewContainer>
        <h2 className="my-10 text-6xl font-extrabold sm:text-9xl text-blue">
          we design, develop & market your product ;
        </h2>
        <p className="w-2/3 my-20 text-lg sm:text-2xl text-gray ">
          we are a team of passionate developers and designers who are dedicated
          to creating the best possible user experience for our clients.
        </p>{" "}
      </ViewContainer>
    </ScreenCenter>
  );
};

export default Hero;
