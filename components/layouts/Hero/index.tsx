import ScreenCenter from "../ScreenCenter";
import ViewContainer from "../ViewContainer";

const Hero = () => {
  return (
    <ViewContainer>
      <ScreenCenter className="items-start">
        <h1>
          <span className="text-2xl font-semibold tracking-wide text-gray-500 uppercase">
            We are Dunolabs & WE
          </span>
        </h1>
        <h1 className="text-xl font-extrabold sm:text-5xl">
          Design ✦ Develop ✦ Market{" "}
        </h1>

        <p className="mt-4 sm:text-xl sm:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
      </ScreenCenter>
    </ViewContainer>
  );
};

export default Hero;

