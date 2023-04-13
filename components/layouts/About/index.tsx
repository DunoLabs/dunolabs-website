import ViewContainer from "@/components/layouts/ViewContainer";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-900 sm:py-32">
      <ViewContainer>
        <div className="items-center justify-center w-full h-full ">
          <h2 className="my-10 text-6xl font-extrabold text-white sm:text-9xl">
            about
          </h2>
          <p className="w-full my-10 text-lg text-white sm:w-1/3 sm:text-lg text-gray">
            we are a team of passionate developers and designers who are
            dedicated to creating the best possible user experience for our
            clients.
          </p>

          <div className="flex flex-col items-end justify-end">
            <Image
              src="/media/about.jpg"
              alt="about"
              width={500}
              height={200}
              className="border-4 border-white"
            />
            <p className="w-full my-10 text-lg text-white sm:w-1/3 text-end ">
              we are a team of passionate developers and designers who are
              dedicated to creating the best possible user experience for our
              clients.
            </p>
            <p className="text-white">dunolabs in black & white | 2023</p>
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};
export default About;

