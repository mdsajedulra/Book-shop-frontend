import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hook";
import { logout } from "../../../redux/features/api/endpoints/authSlice";


const UserNavbar = () => {
    // const user = useAppSelector((state) => state.auth.user);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (

        <nav className="navbar bg-base-100 shadow-md">
            <div className="flex-1">
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">
                    📚 BookShop
                </NavLink>
            </div>

            <div className="flex-none">
                {/* Mobile Menu Button */}
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/all-products'}>Books</NavLink></li>
                        <li><NavLink to="/user/orders">Orders</NavLink></li>
                        <li><NavLink to="/user/edit-profile">Profile</NavLink></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>

                {/* Desktop Menu */}
                <ul className="menu menu-horizontal px-1 hidden md:flex items-center">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/all-products'}>Books</NavLink></li>
                    <li><NavLink to="/user/orders">Orders</NavLink></li>
                    <li><NavLink to="/user/edit-profile">Profile</NavLink></li>
                    <button className="btn btn-outline btn-sm" onClick={handleLogout}>Logout</button>
                </ul>
            </div>
        </nav>
    )
}

export default UserNavbar;