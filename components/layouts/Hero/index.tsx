import Fixed from "@/lib/Fixed";
import ScreenCenter from "../ScreenCenter";
import ViewContainer from "../ViewContainer";

const Hero = () => {
  return (
    <ScreenCenter className="items-start bg-secondary text-primary">
      <ViewContainer>
        <h4 className="text-2xl font-extrabold sm:text-4xl">WE</h4>
        <h1 className="text-xl font-extrabold sm:text-7xl">
          Design <span>✦</span> Develop <span className="color">✦</span> Market
        </h1>

        <h2 className="text-xl font-extrabold sm:text-9xl">Your Business !</h2>

        <p className="mt-4 font-bold sm:text-xl sm:leading-relaxed text-primary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
      </ViewContainer>
    </ScreenCenter>
  );
};

export default Hero;

