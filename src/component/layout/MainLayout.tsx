import { Outlet } from "react-router-dom"
import Footer from "../ui/HomePage/Footer"
import Navbar from "../ui/HomePage/Navbar"

const MainLayout = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                {/* Navbar */}
                <main className="flex-grow">
                <Navbar></Navbar>
                <Outlet />
                </main>
                {/* Navbar */}
                <Footer></Footer>
            </div>
        </>
    )
}

export default MainLayout