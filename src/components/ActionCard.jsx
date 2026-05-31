import React, { useContext } from 'react'
import ModalContext from '../context/ModalContext';

const ActionCard = (props) => {
  const card=props.card;
  

  const {modal,setModal,modalType,setModalType,setTransaction}=useContext(ModalContext)
  return (
    <>

      <div className='
        bg-white/10
        backdrop-blur-2xl
        border border-white/20
        shadow-xl

        rounded-3xl

        p-6

        min-h-40
        w-full

        flex
        flex-col
        justify-between

        hover:scale-105
        transition
        duration-300
      '>

        {/* Top */}
        <div>

          <p className='text-sm opacity-70'>
             {card.title}
          </p>

          <button className='text-2xl font-bold mt-2' 
          onClick={()=> {
            setModal(true);
            setModalType(card.type)
          }}
          >
            {card.btnText}
          </button>

        </div>

        {/* Bottom */}
        <button className='
          mt-6

          bg-gradient-to-r
          from-cyan-500
          to-blue-500

          px-4
          py-3

          rounded-2xl

          font-semibold

          hover:opacity-90
          transition
        '
        onClick={()=> {setModal(true)

           setModalType(card.type);
        }
      
      }
        >

            {card.btnText}

        </button>

      </div>

    </>
  )
}

export default ActionCard