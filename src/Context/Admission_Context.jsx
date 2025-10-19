import { createContext, useContext, useState } from "react"
import { show_admission } from "../api_base_routes"
import axios from 'axios'


const Admission_Context_Provider = createContext()
const Admission_Context = ({ children }) => {
    
    const [admission, setAdmission] = useState({ isLoading: false, data: [], pagination: null, search: '', error_message: null })
    const updateAdmissionState = (newState) => { setAdmission(prev => ({ ...prev, ...newState })) };

    const fetchAdmissionData = async (page) => {
        try {
            updateAdmissionState({ isLoading: true, error_message: null });
            const response = await axios.get(show_admission, {
                params: { search: admission.search, page: page }
            })

            if (response && response.data) {
                updateAdmissionState({
                    data: response.data.payload || [],
                    pagination: response.data.pagination || null,
                });
            }

        } catch (error) {
            console.log(error);
        } finally {
            updateAdmissionState({ isLoading: false });
        }
    }







    return (
        <Admission_Context_Provider.Provider value={{ admission, updateAdmissionState, fetchAdmissionData }}>
            {children}
        </Admission_Context_Provider.Provider>
    )
}

export default Admission_Context

// coustom hooks
export const useAdmission_Context = () => {
    return useContext(Admission_Context_Provider)
};