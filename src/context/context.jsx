import {createContext, useState, useContext} from 'react'


export const Modal = createContext(false)

export const useModal=()=>{
    useContext(Modal)
}

export const ModalProvider=({children})=>{
    const [showRegister,setShowRegister]=useState(false)
    const [showLogin,setShowLogin]=useState(false)
    const [showSearch,setShowSearch]=useState(false)

     const states=[showRegister , setShowRegister, showLogin,setShowLogin,showSearch,setShowSearch]
   
    return(
        <Modal.Provider value={states}>{children}</Modal.Provider>
    )
}