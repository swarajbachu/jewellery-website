"use client";

import KenBurnsImage from "@/utils/kenburn";
import TextAnimation from "@/utils/textanimation";

const AboutSection = () => {
  const imageVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: "-10%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="bg-slate-100 relative dark:bg-gray-900 flex flex-col justify-center items-center"
    >
      <h2 className="text-2xl mt-10 mb-0 font-bold">About US</h2>
      <div className="gap-16 items-center text-gray-900 pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:pt-10 lg:px-6">
        <TextAnimation>
          {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100">
            We didn't reinvent the wheel
          </h2> */}
          <p className="mb-4">
            Welcome to Jhunjhunwala Diamonds, your premier destination for
            exquisite diamond jewellery and precious stones. At Jhunjhunwala
            Diamonds, we believe in the inherent beauty and individuality of
            each diamond. With our founder's extensive education and experience,
            we have curated a captivating collection of unique designs that
            reflect our commitment to quality and craftsmanship.
          </p>
          <p className="mb-4">
            Our skilled artisans and gemologists meticulously handpick diamonds
            that possess unparalleled brilliance and character, ensuring that
            every piece in our collection is truly one-of-a-kind. We take pride
            in offering GIA, IGI, HRD certified solitaire diamonds, providing
            you with the utmost assurance of authenticity and superior quality.
          </p>
          <p className="mb-4">
            From elegant solitaire rings to stunning necklaces, earrings and
            other luxary jewellery, our diverse range of collection caters to every taste and
            occasion. We understand that finding the perfect piece of jewellery
            is a deeply personal experience, which is why we offer customization
            options. You have the freedom to choose the gold purity, diamond
            quality, and design elements that resonate with your unique style.
          </p>
        </TextAnimation>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <KenBurnsImage src="https://cdn.pixabay.com/photo/2023/06/22/04/19/hand-8080483_1280.jpg" alt="About Diamonds 1" />
          <KenBurnsImage src="https://cdn.pixabay.com/photo/2023/06/22/04/17/woman-8080479_1280.jpg" alt="About Diamonds 2" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
