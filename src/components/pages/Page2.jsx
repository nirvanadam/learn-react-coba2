import React from "react";
import Button from "../elements/button/Button";

function Page2() {
  const products = [
    {
      id: 1,
      name: "Xbox 1",
      price: "450",
      image: "/images/xbox.jpg",
      description: "loremfa fdafacac",
    },
    {
      id: 2,
      name: "Xbox 2",
      price: "500",
      image: "/images/xbox.jpg",
      description: "loremfa fdafacac",
    },
  ];
  return (
    <div className="flex justify-center py-5 gap-4">
      {products.map((product) => {
        return (
          <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded shadow">
            <a href="#">
              <img src="/images/xbox.jpg" alt="" className="p-8 rounded-t-lg" />
            </a>
            <div className="px-5 pb-5">
              <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{product.name}</h5>
                <p className="text-m text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eius, omnis et distinctio optio aspernatur! Accusantium nemo voluptates quidem, incidunt vitae ratione quod, minima quam fuga provident odit ex nam.
                </p>
              </a>
            </div>
            <div className="flex items-center justify-between px-5 pb-5">
              <span className="text-3xl font-bold text-white">{product.price}</span>
              <Button variant="bg-cyan-400">Add to Cart</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Page2;
