import { createContext, useContext, useState } from "react"
import { show_notice } from "../api_base_routes";
import axios from "axios";

const Notice_Context_Provider = createContext()
const Notice_Context = ({ children }) => {

    const [notice, setNotice] = useState({ isLoading: false, data: [], search: '', status: '', error_message: null })
    const updateNoticeState = (newState) => { setNotice(prev => ({ ...prev, ...newState })) };

    const fetchNoticeData = async (page) => {
        try {
            updateNoticeState({ isLoading: true, error_message: null });
            const response = await axios.get(show_notice, {
                params: {
                    search: notice.search,
                    status: notice.status,
                    page: page
                }
            })

            if (response && response.data) {
                const data = response.data || [];
                updateNoticeState({ data: data });
            }

        } catch (error) {
            console.log(error);
        } finally {
            updateNoticeState({ isLoading: false });
        }
    }




    return (
        <Notice_Context_Provider.Provider value={{ notice, updateNoticeState, fetchNoticeData }}>
            {children}
        </Notice_Context_Provider.Provider>
    )
}

export default Notice_Context

// coustom hooks
export const useNotice_Context = () => {
    return useContext(Notice_Context_Provider)
};