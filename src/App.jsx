import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { ToastContainer } from "react-toastify"
import { Route, Routes } from "react-router-dom"
import Dashboard_Page from "./Pages/Dashboard_Page"
import Settings_Page from "./Pages/Settings_Page"
import New_Admission from "./Pages/New_Admission"
import Create_New_Admission from "./Components/New_Admission/Create_New_Admission"
import Update_New_Admission from "./Components/New_Admission/Update_New_Admission"
import View_New_Admission from "./Components/New_Admission/View_New_Admission"
import Notice_Page from "./Pages/Notice_Page"
import Create_Notice from "./Components/Notices/Create_Notice"
import Update_Notice from "./Components/Notices/Update_Notice"
import View_Notice from "./Components/Notices/View_Notice"
import Teacher_Page from "./Pages/Teacher_Page"
import Create_Teacher from "./Components/Teacher/Create_Teacher"
import Update_Teacher from "./Components/Teacher/Update_Teacher"
import View_Teacher from "./Components/Teacher/View_Teacher"
import Class_Page from "./Pages/Class_Page"
import Create_Class from "./Components/Class/Create_Class"
import Update_Class from "./Components/Class/Update_Class"
import Create_Section from "./Components/Section/Create_Section"
import Update_Section from "./Components/Section/Update_Section"
import Section_Page from "./Pages/Section_Page"
import View_Section from "./Components/Section/View_Section"
import Subject_Page from "./Pages/Subject_Page"
import Create_Subject from "./Components/Subject/Create_Subject"
import Update_Subject from "./Components/Subject/Update_Subject"
import View_Subject from "./Components/Subject/View_Subject"
import './App.css'

const App = () => {

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <Routes>
        <Route path="/" element={<Dashboard_Page />} />
        <Route path="/admission-table" element={<New_Admission />} />
        <Route path="/admission-create" element={<Create_New_Admission />} />
        <Route path="/admission-update/:id" element={<Update_New_Admission />} />
        <Route path="/admission-view/:id" element={<View_New_Admission />} />

        <Route path="/notice-table" element={<Notice_Page />} />
        <Route path="/notice-create" element={<Create_Notice />} />
        <Route path="/notice-update/:id" element={<Update_Notice />} />
        <Route path="/notice-view/:id" element={<View_Notice />} />

        <Route path="/teacher-table" element={<Teacher_Page />} />
        <Route path="/teacher-create" element={<Create_Teacher />} />
        <Route path="/teacher-view/:id" element={<View_Teacher />} />
        <Route path="/teacher-update/:id" element={<Update_Teacher />} />

        <Route path="/class-table" element={<Class_Page />} />
        <Route path="/class-create" element={<Create_Class />} />
        <Route path="/class-update/:id" element={<Update_Class />} />

        <Route path="/section-table" element={<Section_Page />} />
        <Route path="/section-create" element={<Create_Section />} />
        <Route path="/section-update/:id" element={<Update_Section />} />
        <Route path="/section-view/:id" element={<View_Section />} />

        <Route path="/subject-table" element={<Subject_Page />} />
        <Route path="/subject-create" element={<Create_Subject />} />
        <Route path="/subject-update/:id" element={<Update_Subject />} />
        <Route path="/subject-view/:id" element={<View_Subject />} />


        <Route path="/profile-settings" element={<Settings_Page />} />
      </Routes>
    </>
  )
}

export default App