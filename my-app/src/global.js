import { createContext, useContext } from "react"

export const GlobalContext=createContext({
    ID:"",
    setID:()=>{}
})

export const useGlobal=()=>useContext(GlobalContext)