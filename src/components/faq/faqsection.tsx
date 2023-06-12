// pages/index.tsx
import React from "react";
import FAQCard from "./faqcard";
import Image from "next/image";

const faqs = [
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    question: "Question 3",
    answer: "Answer 3",
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="flex flex-col w-full  px-4 justify-center dark:bg-slate-900 items-center min-h-[80vh] bg-slate-100  dark:text-slate-100">
        <h1 className="text-3xl font-bold mb-10 ">
            FAQ Section
        </h1>
    <div className="flex flex-col md:flex-row w-full gap-5 md:w-[80%]">
        
        <div className="h-64 md:h-full w-full md:w-1/2 mb-5 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2365&q=80"
          alt="FAQ Illustration"
          className="object-cover h-full w-full rounded-lg shadow-sm"

        />
        </div>
      <div className="w-full md:w-1/2 flex flex-col gap-1">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default FAQ;
