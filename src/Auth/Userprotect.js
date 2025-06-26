import React from 'react';
const Userprotected =({ children })=>{
if(localStorage.getItem('role') === 'user'){
    return children;
}else{
    return (<><h1>your are not all to use this page</h1></>)
}
}

export default Userprotected;