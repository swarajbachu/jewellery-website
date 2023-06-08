import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="py-2 h-[80vh]  w-full flex justify-center">
      <div className="relative flex justify-end items-center lg:w-[70%]">
        <Image
          src="/about.jpg"
          width={500}
          height={500}
          alt={""}
          className="absolute shadow-lg z-30 rounded-sm lg:top-[-5%] lg:left-0"
        />
        <div className="w-1/2 ">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
