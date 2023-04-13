import Fixed from "@/lib/Fixed";
import ScreenCenter from "@/components/layouts/ScreenCenter";
import ViewContainer from "@/components/layouts/ViewContainer";

const Hero = () => {
  return (
    <ScreenCenter className="my-10">
      <ViewContainer>
        <h2 className="my-10 text-xl font-extrabold sm:text-9xl text-blue text-border">
          Design-driven development of your web product
        </h2>

        <p className="mt-4 font-bold sm:text-xl sm:leading-relaxed ">
          We are a team of passionate designers and developers who can help you
          build your business.
        </p>
      </ViewContainer>
    </ScreenCenter>
  );
};

export default Hero;
