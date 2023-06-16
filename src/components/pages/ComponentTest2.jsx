import React, { useState } from "react";

function ModalComponent({ onDataSubmit }) {
  const [inputValue, setInputValue] = useState();
  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDataSubmit(inputValue);
  };

  return (
    <div className="p-5 rounded-lg border border-gray-400">
      <h1>Modal Form</h1>
      <form onSubmit={handleSubmit} className={`relative flex flex-col`}>
        <button type="button" className="absolute top-0 right-0 font-bold">
          X
        </button>
        <label htmlFor="nama">Nama</label>
        <input type="text" name="" value={inputValue} onChange={handleOnchange} className="border border-gray-400 rounded-lg outline-none px-4 py-1" />
        <button type="submit" className="bg-[#263238] px-4 py-1 rounded-lg text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ModalComponent;
