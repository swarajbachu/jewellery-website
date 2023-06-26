"use client";

import KenBurnsImage from "@/utils/kenburn";
import TextAnimation from "@/utils/textanimation";

const About2 = () => {
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
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <KenBurnsImage src="https://cdn.pixabay.com/photo/2023/06/22/04/20/jhunjhunwala-diamonds-8080485_1280.jpg" alt="diamonds" />
          <KenBurnsImage src="/about-3.avif" alt="office content 2" />
        </div>
        <TextAnimation>
          <p className="mb-4">
            As a customer-centric business, we prioritize your satisfaction
            above all else. We strive to exceed your expectations at every step
            of your journey with us. From the moment you enter our store or
            browse our online collection, to the after-sales service and care,
            our commitment to your happiness is unwavering.
          </p>
          <p className="mb-4">
            Jhunjhunwala Diamonds has garnered a strong reputation for its
            unwavering commitment to authenticity and transparency. We source
            our diamonds and precious stones from reputable suppliers, adhering
            to the highest industry standards and ethical practices. With our
            vast knowledge and expertise, we assure you that each piece of
            jewellery you acquire from us is a genuine work of art.
          </p>
          <p>
            We invite you to embark on a mesmerizing journey into the world of
            diamonds with Jhunjhunwala Diamonds. Explore our collection,
            discover the perfect piece that resonates with your style and story,
            and let us be a part of your precious moments. 
          </p>
        </TextAnimation>
      </div>
    </section>
  );
};

export default About2;
