import React from "react";

const Products = () => {
  const info = [
    {
      product: "Diamonds",
      description:
        "Diamonds are the hardest material on earth: 58 times harder than anything else in nature. Diamonds are formed over billions of years, deep within the earth, under conditions of intense heat and pressure that cause carbon atoms to crystallise forming diamonds.",
        link:"https://images.unsplash.com/photo-1590570894869-f6947be08e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      product: "Gold",
      description:
        "Gold is a chemical element with the symbol Au (from Latin: aurum) and atomic number 79, making it one of the higher atomic number elements that occur naturally. In a pure form, it is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal.",
      link: "https://images.unsplash.com/photo-1590570894869-f6947be08e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },

    {
      product: "Silver",
      description:
        "Silver is a chemical element with the symbol Ag (from the Latin argentum, derived from the Proto-Indo-European h₂erǵ: 'shiny' or 'white') and atomic number 47. A soft, white, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal.",
        link: "https://images.unsplash.com/photo-1590570894869-f6947be08e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      product: "Rings",
      description:
        "A ring is a round band, usually of metal, worn as ornamental jewellery. The term 'ring' by itself always denotes jewellery worn on the finger; when worn as an ornament elsewhere, the body part is specified within the term, e.g., earrings, neck rings, arm rings, and toe rings.",
        link: "https://images.unsplash.com/photo-1590570894869-f6947be08e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
  ];

  return (
    <section className="bg-slate-100 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Products
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of Dimond Jewellery
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {info.map((item, index) => (
            <div className="items-center bg-slate-100 px-4 py-2 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div >
                <img
                  className="w-full rounded-lg "
                  src={item.link}
                  alt="Sofia Avatar"
                />
                </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{item.product}</a>
                </h3>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {item.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
