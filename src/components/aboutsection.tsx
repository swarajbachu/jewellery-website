"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  const imageVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: "-10%",
      transition: { duration: 0.5 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <section className="bg-slate-100 min-h-[90vh] flex flex-col justify-center">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-600 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4">
            We are JEWELERS. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://img.freepik.com/free-photo/model-shows-earrings-ring-with-beautiful-blue-precious-stones_8353-5043.jpg?w=1060&t=st=1686238429~exp=1686239029~hmac=bd1e4b5e965c8a62d2a467393eac701e21e7e03d66920db1d0901b78a06ce011"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://img.freepik.com/free-photo/portrait-young-woman-with-earrings-with-gems-isolated_132075-10060.jpg?w=1060&t=st=1686238456~exp=1686239056~hmac=80bfbf0f700870bbbfb25fc3083537a2c56391dba45452cb09e3cb39306c04df"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
