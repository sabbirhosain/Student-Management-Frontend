import { createContext, useContext, useState } from "react"
import { show_class, show_subject, show_teacher } from "../api_base_routes"
import axios from 'axios'

const Academy_Info_Context_Provider = createContext()
const Academy_Info_Context = ({ children }) => {

    const [teacher, setTeacher] = useState({ isLoading: false, data: [], pagination: null, search: '', error_message: null })
    const updateTeacherState = (newState) => { setTeacher(prev => ({ ...prev, ...newState })) };

    const fetchTeacherData = async (page) => {
        try {
            updateTeacherState({ isLoading: true, error_message: null });
            const response = await axios.get(show_teacher, {
                params: { search: teacher.search, page: page }
            })

            if (response && response.data) {
                updateTeacherState({
                    data: response.data.payload || [],
                    pagination: response.data.pagination || null,
                });
            }

        } catch (error) {
            console.log(error);
        } finally {
            updateTeacherState({ isLoading: false });
        }
    }

    // === Class Data Fetch ===

    const [classs, setClass] = useState({ isLoading: false, data: [], pagination: null, search: '', error_message: null })
    const updateClassState = (newState) => { setClass(prev => ({ ...prev, ...newState })) };

    const fetchClassData = async (page) => {
        try {
            updateClassState({ isLoading: true, error_message: null });
            const response = await axios.get(show_class, {
                params: { search: classs.search, page: page }
            })

            if (response && response.data) {
                updateClassState({
                    data: response.data.payload || [],
                    pagination: response.data.pagination || null,
                });
            }

        } catch (error) {
            console.log(error);
        } finally {
            updateClassState({ isLoading: false });
        }
    }


    // === Subject Data Fetch ===

    const [subject, setSubject] = useState({ isLoading: false, data: [], pagination: null, search: '', error_message: null })
    const updateSubjectState = (newState) => { setSubject(prev => ({ ...prev, ...newState })) };

    const fetchSubjectData = async (page) => {
        try {
            updateSubjectState({ isLoading: true, error_message: null });
            const response = await axios.get(show_subject, {
                params: { search: subject.search, page: page }
            })

            if (response && response.data) {
                updateSubjectState({
                    data: response.data.payload || [],
                    pagination: response.data.pagination || null,
                });
            }

        } catch (error) {
            console.log(error);
        } finally {
            updateSubjectState({ isLoading: false });
        }
    }

    // === Section Data Fetch ===

    const [section, setSection] = useState({ isLoading: false, data: [], pagination: null, search: '', error_message: null })
    const updateSectionState = (newState) => { setSection(prev => ({ ...prev, ...newState })) };

    const fetchSectionData = async (page) => {
        try {
            updateSectionState({ isLoading: true, error_message: null });
            const response = await axios.get(show_subject, {
                params: { search: section.search, page: page }
            })

            if (response && response.data) {
                updateSectionState({
                    data: response.data.payload || [],
                    pagination: response.data.pagination || null,
                });
            }

        } catch (error) {
            console.log(error);
        } finally {
            updateSectionState({ isLoading: false });
        }
    }




    return (
        <Academy_Info_Context_Provider.Provider value={{ teacher, updateTeacherState, fetchTeacherData, classs, updateClassState, fetchClassData, subject, updateSubjectState, fetchSubjectData, section, updateSectionState, fetchSectionData }}>
            {children}
        </Academy_Info_Context_Provider.Provider>
    )
}

export default Academy_Info_Context

// coustom hooks
export const useAcademy_Info_Context = () => {
    return useContext(Academy_Info_Context_Provider)
};