import ScreenCenter from "@/components/layouts/ScreenCenter";
import ViewContainer from "@/components/layouts/ViewContainer";

const Hero = () => {
  return (
    <ScreenCenter className="mt-24">
      <ViewContainer>
        <h2 className="my-10 text-6xl font-extrabold sm:text-9xl text-blue">
          we design develop & market your product ;
        </h2>
        <p className="w-2/3 my-20 text-lg font-medium sm:text-2xl text-gray">
          we manage your project from start to finish, we design, develop and
          market your product.
        </p>
      </ViewContainer>
    </ScreenCenter>
  );
};

export default Hero;
