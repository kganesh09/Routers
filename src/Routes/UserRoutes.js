import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Protected from '../Auth/Protected'
import Userprotected from '../Auth/Userprotect'
import Userlayout from '../Layouts/GeneralLayout'
import UserProfile from '../pages/UserProfile'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={
                <Protected>
                    <Userprotected>
                        <Userlayout/>
                    </Userprotected>
                </Protected>} >
                <Route index element={<UserProfile/>}/>
            </Route>
        </Routes>
    )
}

export default UserRoutes