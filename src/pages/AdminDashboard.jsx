import React from 'react'
import Header from '../components/Admin/Header'
import Sidebar from '../components/Admin/Sidebar'
import AllProducts from '../components/Admin/AllProducts'
import AddNewProduct from '../components/Admin/AddNewProduct'

const AdminDashboard = () => {
    return (
        <div>
            <Header />
            <div className='flex w-full'>
                <div className=' overscroll-auto h-screen'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <AddNewProduct />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
