import React from "react";

const StateCard = (props) => {
  const cardData = props.card;

  return (
    <>
     
     
          
            

             <div
        className="
        bg-white/10
        backdrop-blur-2xl
        border border-white/20
        shadow-xl

        rounded-3xl

        p-6

        min-h-32
        w-full

        flex
        flex-col
        justify-center
        items-center

        text-center

        hover:scale-105
        transition
        duration-300
      "
      >


              <p className="text-sm sm:text-lg opacity-80">{cardData.title}</p>

              <h3 className="text-2xl sm:text-4xl font-bold mt-2">
                {cardData.amount}
              </h3>


            </div>

            </>
          );
}
      
    

export default StateCard;
