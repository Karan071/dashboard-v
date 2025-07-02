import Coaches from "@/pages/SidebarItems/Coaches";
import { Routes, Route } from "react-router-dom";
export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/coaches" element={<Coaches/>} />
        </Routes>
    )
}