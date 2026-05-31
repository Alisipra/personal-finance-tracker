import React, { useContext, useEffect, useState } from "react";
import ModalContext from "../context/ModalContext";

const TransactionModal = () => {
  const { modal, setModal, modalType,transaction, setTransaction } =
    useContext(ModalContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [fetchData,setFetchData]=useState([]);
  
  const handleSubmit=(e)=>{

    e.preventDefault();
    const newTransaction={
      id:Date.now(),
      type:modalType,
      title:title,
      amount:amount,
      description:description
    }
    console.log(newTransaction)
    // setTransaction([...transaction,newTransaction]) bad way
    setTransaction((prev)=>{
      return[...prev,newTransaction]
    })
  
    setTimeout(() => {
      
      
      setTitle("")
      setAmount("")
      setDescription("")
      setModal(false)
    }, 2000);

  }


  return (
    <div className="p-10">
      {/* Modal */}
      {modal && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            backdrop-blur-sm
            flex
            justify-center
            items-center
            z-50
          "
        >
          {/* Modal Box */}
          <div
            className="
              bg-white
              text-black
              p-8
              rounded-3xl
              w-[90%]
              max-w-md
              shadow-2xl
            "
          >
            {/* Dynamic Heading */}
            <h2 className="text-2xl font-bold mb-6 text-center">
              {modalType === "income" && "Add Income"}

              {modalType === "expense" && "Add Expense"}

              {modalType === "history" && "Transaction History"}
            </h2>

            {/* ========================= */}
            {/* Income Form */}
            {/* ========================= */}

            {modalType === "income" && (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Income Title"
                  value={title}
                  className="
                    border
                    border-gray-300
                    p-3
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-green-400
                  "
                  onChange={(e)=>setTitle(e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Enter Income Amount"
                  className="
                    border
                    border-gray-300
                    p-3
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-green-400
                  "
                  value={amount}
                  onChange={(e)=>setAmount(e.target.value)}
                />

                <textarea
                  placeholder="Enter Description"
                  rows="4"
                  className="
                    border
                    border-gray-300
                    p-3
                    rounded-xl
                    outline-none
                    resize-none
                    focus:ring-2
                    focus:ring-green-400
                  "
                  
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                ></textarea>

                <div className="flex gap-3 mt-4">
                  <button
                    type="submit"
                    className="
                      flex-1
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    Save Income
                  </button>

                  <button
                    type="button"
                    onClick={() => setModal(false)}
                    className="
                      flex-1
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    Close
                  </button>
                </div>
              </form>
            )}

            {/* ========================= */}
            {/* Expense Form */}
            {/* ========================= */}

            {modalType === "expense" && (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Expense Title"
                  className="
                    border
                    border-gray-300
                    p-3
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-red-400
                  "
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Enter Expense Amount"
                  className="
                    border
                    border-gray-300
                    p-3
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-red-400
                  "
                   value={amount}
                  onChange={(e)=>setAmount(e.target.value)}
                />

                <textarea
                  placeholder="Enter Description"
                  rows="4"
                  className="
                    border
                    border-gray-300
                    p-3
                    rounded-xl
                    outline-none
                    resize-none
                    focus:ring-2
                    focus:ring-red-400
                  "
                   value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                ></textarea>

                <div className="flex gap-3 mt-4">
                  <button
                    type="submit"
                    className="
                      flex-1
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    Save Expense
                  </button>

                  <button
                    type="button"
                    onClick={() => setModal(false)}
                    className="
                      flex-1
                      bg-gray-500
                      hover:bg-gray-600
                      text-white
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    Close
                  </button>
                </div>
              </form>
            )}

            {/* ========================= */}
            {/* Transaction History */}
            {/* ========================= */}

            {modalType === "history" && (
              <div className="space-y-4">
                <div className="border p-4 rounded-xl">
                  <h3 className="font-semibold">Salary</h3>

                  <p className="text-sm text-gray-500">+5000$</p>
                </div>

                <div className="border p-4 rounded-xl">
                  <h3 className="font-semibold">Shopping</h3>

                  <p className="text-sm text-gray-500">-200$</p>
                </div>

                <button
                  onClick={() => setModal(false)}
                  className="
                    w-full
                    mt-4
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    py-3
                    rounded-xl
                    transition
                  "
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionModal;
