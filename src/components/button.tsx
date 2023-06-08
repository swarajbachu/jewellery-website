'use client'

type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button className="group  relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-black  px-8 py-3 text-base font-medium  text-white transition duration-300 ease-out  hover:shadow-orange-600 active:translate-y-1"
    onClick={onClick}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-700 to-purple-800 opacity-0 transition duration-300 ease-out group-hover:opacity-100 group-active:opacity-90"></span>
      <span className="relative group-hover:text-white">{text}</span>
    </button>
  );
};

export default Button;
