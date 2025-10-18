import { createContext, useContext, useState } from "react"
import { } from "../api_base_routes"
import axios from 'axios'

const Academy_Info_Context_Provider = createContext()
const Academy_Info_Context = ({ children }) => {











    return (
        <Academy_Info_Context_Provider.Provider value={{}}>
            {children}
        </Academy_Info_Context_Provider.Provider>
    )
}

export default Academy_Info_Context

// coustom hooks
export const useAcademy_Info_Context = () => {
    return useContext(Academy_Info_Context_Provider)
};