import React, { useState } from "react";

function Page3() {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/hello";
  };

  const email = localStorage.getItem("email");

  const product = [
    {
      id: 1,
      name: "Item 1",
      price: 500000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure doloribus nemo non hic, repellendus impedit aliquid recusandae quasi consectetur rerum, quae officia cumque nam in quibusdam aspernatur ipsa eos!",
    },
    {
      id: 2,
      name: "Item 2",
      price: 650000,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure doloribus nemo non hic, repellendus impedit aliquid recusandae quasi consectetur rerum, quae officia cumque nam in quibusdam aspernatur ipsa eos!",
    },
    {
      id: 3,
      name: "Item 3",
      price: 750000,
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure doloribus nemo non hic, repellendus impedit aliquid recusandae quasi consectetur rerum, quae officia cumque nam in quibusdam aspernatur ipsa eos!",
    },
  ];

  const [cart, setCart] = useState([
    {
      id: "1",
      qty: 1,
    },
  ]);

  const handleAddToCart = () => {
    setCart([
      ...cart,
      {
        id: product.name,
        qty: 2,
      },
    ]);
  };
  return (
    <div>
      {/* Navbar */}
      <div className="flex gap-4 px-4 py-4 bg-[#263238] justify-between">
        <h1 className="font-semibold text-lg text-white">Hello, {email}</h1>
        <button onClick={handleLogout} className="bg-cyan-400 px-4 py-1 rounded font-semibold text-white">
          Logout
        </button>
      </div>
      {/* Navbar End */}

      <div className="flex">
        {/* Product */}
        <div className="w-3/4">
          <h1 className="text-3xl font-bold">Product List</h1>
          <div className="flex flex-wrap gap-5 p-5">
            {product.map((item) => {
              return (
                <div className="flex flex-col max-w-sm bg-[#263238] text-white rounded p-5">
                  <h1 className="text-3xl font-bold text-cyan-400">{item.name}</h1>
                  <p className="my-3">{item.desc}</p>
                  <h1 className="text-xl font-semibold">Rp {item.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</h1>
                  <button onClick={handleAddToCart} className="px-4 py-1 bg-cyan-400 font-semibold w-fit rounded mt-3">
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {/* Product End */}

        {/* Cart */}
        <div className="w-1/4">
          <h1 className="text-3xl font-bold">Cart</h1>
          <ul>
            {cart.map((item) => {
              return <li key={item.id}>{item.id}</li>;
            })}
          </ul>
        </div>
        {/* Cart End */}
      </div>
    </div>
  );
}

export default Page3;
