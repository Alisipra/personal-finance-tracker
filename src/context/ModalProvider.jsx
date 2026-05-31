import React, { useEffect, useState } from 'react'
import ModalContext from './ModalContext'


const ModalProvider = (props) => {
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [transaction,setTransaction]=useState([]);
    
  
      useEffect(() => {

    localStorage.setItem(
      "transactions",
      JSON.stringify(transaction)
    );

  }, [transaction]);



  return (
    <>
    <h1>Hello world</h1>
    <ModalContext.Provider value={{modal,setModal,modalType,setModalType,transaction,setTransaction}}>
    {props.children}
    </ModalContext.Provider>
    </>
  )
}

export default ModalProvider