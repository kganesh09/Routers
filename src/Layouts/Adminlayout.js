import Navbar from '../Components/Navbar.js';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (<>
        <Navbar />
        <div className="content">
            <Outlet />
        </div>
    </>)
}
export default Layout;