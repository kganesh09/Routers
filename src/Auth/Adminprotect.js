import React from 'react';
const Adminprotected =({ children })=>{
if(localStorage.getItem('role') === 'admin'){
    return children;
}else{
    return (<><h1>your are not all to use this page</h1></>)
}
}

export default Adminprotected;