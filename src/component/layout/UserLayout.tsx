import { Outlet } from "react-router-dom"
import Footer from "../ui/HomePage/Footer"
import UserNavbar from "../ui/HomePage/UserNavbar"

const UserLayout = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                {/* Navbar */}
                <main className="flex-grow">
                <UserNavbar></UserNavbar>
                <Outlet />
                </main>
                {/* Navbar */}
                <Footer></Footer>
            </div>
        </>
    )
}

export default UserLayout