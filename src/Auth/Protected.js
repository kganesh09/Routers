import { Navigate } from "react-router-dom";

const Protected =({ children })=>{
if(localStorage.getItem('role') === null){
    return <Navigate to="/login"/>; 
}else{
    return children;
}
}

export default Protected;