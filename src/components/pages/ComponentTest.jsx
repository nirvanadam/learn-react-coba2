import React, { useState } from "react";
import ModalComponent from "./ComponentTest2";

function ParentComponent() {
  const [submitedData, setSubmitedData] = useState();
  const handleDataSubmit = (data) => {
    setSubmitedData(data);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-xl font-bold">Form Tiket Pesawat</h1>
      <button onClick={handleModalOpen} type="button" className="bg-[#263238] px-4 py-1 text-white font-medium rounded-lg my-3">
        Modal
      </button>
      {modalOpen && <ModalComponent onDataSubmit={handleDataSubmit} />}

      <input type="text" value={submitedData} name="" id="" className="px-5 py-1  border border-gray-300 rounded-lg" />
    </div>
  );
}

export default ParentComponent;
