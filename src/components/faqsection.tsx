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
    <section className="flex bg-slate-100 flex-col w-full justify-center items-center min-h-[80vh]">
        <h1 className="text-3xl font-bold mb-10">
            FAQ Section
        </h1>
    <div className="flex w-[80%] gap-5">
        
        <div className="h-full">
        <img
          src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2365&q=80"
          alt="FAQ Illustration"
          className="object-cover h-full w-full rounded-lg shadow-sm"

        />
        </div>
      <div className="w-full flex flex-col gap-1">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default FAQ;
