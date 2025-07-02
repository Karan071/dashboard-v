import { Route, Routes } from "react-router-dom"
import Signin from "@/auth/Signin"
import MainLayout from "./layout/Layout"
import AppRoutes from "./routes/routes"
export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Signin/>} />
      <Route
      path="/*"
      element={
        <MainLayout>
          <AppRoutes/>
        </MainLayout>
      }
      />
    </Routes>
  )
}