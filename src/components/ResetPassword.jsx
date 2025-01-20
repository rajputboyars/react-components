import React from 'react'

const ResetPassword = () => {
    return (
        <div className='flex flex-col py-8 md:flex-row items-center max-w-5xl mx-auto md:px-8'>
            <div className='w-2/3 flex flex-col gap-4'>
                <h2 className='font-bold capitalize'>reset your password</h2>
                <p>Please enter your email or phone no with associated your account, we sent one time password to your (Email or phone).</p>
                <form action="" className='flex flex-col gap-4 items-start'>
                    <input type="text" placeholder='Email/Phone no.' className='border outline-none rounded-full md:px-4 py-2 w-full md:w-[80%]' />
                    <div className='flex flex-col md:flex-row md:gap-8 gap-4 max-md:w-full'>
                        <button className='px-8 bg-gray-700 text-white py-2 border max-md:w-full rounded-full'>Continue</button>
                        <button className='rounded-full border px-8 py-2'>Back to Register</button>
                    </div>
                </form>
            </div>
            <div className='w-1/3 hidden md:block'>
                <img src="/images/reset-password.png" alt="" />
            </div>
        </div>
    )
}

export default ResetPassword
