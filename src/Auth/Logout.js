import Login from "./Login";
const Logout = () => {
    localStorage.removeItem("role");
    return (<><Login/></>
    );
}
export default Logout;