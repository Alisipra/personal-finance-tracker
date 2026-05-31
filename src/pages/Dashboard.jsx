import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import StateCard from "../components/StateCard";
import { ChartCard } from "../components/ChartCard";
import ActionCard from "../components/ActionCard";
import TransactionModal from "../components/TransactionModal";

export const Dashboard = () => {
const cardData = [
  {
    title: "Balance",
    amount: "500$",
  },
  {
    title: "Income",
    amount: "1000$",
  },
  {
    title: "Expense",
    amount: "100$",
  },
  {
    title: "Savings",
    amount: "50$",
  },
];
const chartsCard=[

  {
    title:"Earning Overview",

  },
  {
    title:"Monthly Breakdown"
  }
]
const actionbutton=[
  {
    title:"View History",
    btnText:"Recent Transactions",
    type:"history"
    },
    {
    title:"INCOME",
    btnText:"ADD INCOME",
    type:"income"
    },
{
    title:"EXPENSES",
    btnText:"ADD EXPENSE",
    type:"expense"

    },

]



  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#fec76f] via-[#b3be62]  to-[#71a3c1] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">

        {/* Navbar */}
        <Navbar />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

            {cardData.map((item,index)=>{
              return(
                
                <StateCard key={index} card={item} />
              )
            })}
         
          
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {chartsCard.map((item,index)=>{
            return(

              <ChartCard chart={item} key={index}/>
            )

          })}
          
          
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {
            actionbutton.map((item,index)=>{
              return(

                <ActionCard card={item} key={index}/>
              )
            })
          }
       
        </div>

          <TransactionModal/>
      </div>

    </div>
  );
};