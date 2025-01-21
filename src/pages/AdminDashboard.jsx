import React from 'react'
import Header from '../components/Admin/Header'
import Sidebar from '../components/Admin/Sidebar'
import { Outlet } from 'react-router'

const AdminDashboard = () => {
    return (
        <div>
            <Header />
            <div className='flex w-full bg-zinc-100 min-h-[85vh]'>
                <div className='fixed left-0 h-screen'>
                    <Sidebar />
                </div>
                <div className='w-full max-w-[83%]  block m-[0_0_0_auto] p-8'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
