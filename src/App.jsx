import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { ToastContainer } from "react-toastify"
import { Route, Routes } from "react-router-dom"
import Dashboard_Page from "./Pages/Dashboard_Page"
import Settings_Page from "./Pages/Settings_Page"
import New_Admission from "./Pages/New_Admission"
import Create_New_Admission from "./Components/New_Admission/Create_New_Admission"
import Update_New_Admission from "./Components/New_Admission/Update_New_Admission"
import Notice_Page from "./Pages/Notice_Page"
import Create_Notice from "./Components/Notices/Create_Notice"
import Update_Notice from "./Components/Notices/Update_Notice"
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
        <Route path="/notice-table" element={<Notice_Page />} />
        <Route path="/notice-create" element={<Create_Notice />} />
        <Route path="/notice-update/:id" element={<Update_Notice />} />
        <Route path="/profile-settings" element={<Settings_Page />} />
      </Routes>
    </>
  )
}

export default App