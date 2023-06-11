'use client'

import KenBurn from "@/utils/kenburn";
import TextAnimation from "@/utils/textanimation";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <KenBurn
          src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          alt="dashboard image"
        />

        <div className="mt-4 md:mt-0">
          <TextAnimation>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-slate-100">
            Let's create more tools and ideas that brings us together.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            JhunJhunwala Jewellery helps you connect with friends and communities of people
            who share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-gray-900 dark:bg-slate-100 dark:text-gray-900 dark:hover:bg-gray-100"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          </TextAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
