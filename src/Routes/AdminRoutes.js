// src/Routes/AdminRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Protected from '../Auth/Protected';
import Adminprotected from '../Auth/Adminprotect';
import Adminlayout from '../Layouts/Adminlayout';
import Admin from '../pages/Admin';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={
                    <Protected>
                        <Adminprotected>
                            <Adminlayout />
                        </Adminprotected>
                    </Protected>
                }
            >
                <Route index element={<Admin />} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;
