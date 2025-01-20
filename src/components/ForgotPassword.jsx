import React from 'react'

const ForgotPassword = ({ type }) => {

    switch (type) {
        case "email":
            return (
                <div className='flex flex-col py-8 md:flex-row items-center max-w-5xl mx-auto md:px-8'>
                    <div className='w-2/3 flex flex-col gap-4'>
                        <h2 className='font-bold capitalize text-sm'>reset your password</h2>
                        <p>Please enter your email or phone no with associated your account, we sent one time password to your (Email or phone).</p>
                        <form action="" className='flex flex-col gap-4 items-start'>
                            <input type="text" placeholder='Email/Phone no.' className='border outline-none rounded-full px-4 py-2 w-full md:w-[80%]' />
                            <div className='flex flex-col items-center md:flex-row md:gap-8 gap-4 max-md:w-full'>
                                <button className='px-8 bg-gray-700 text-white py-2 border max-md:w-full rounded-full'>Continue</button>
                                <div className='flex'>
                                    <p>Back to</p>
                                    <span className=''>Register</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-1/3 hidden md:block'>
                        <img src="/images/forgot-otp.png" alt="" />
                    </div>
                </div>
            )
        case "otp":
            return (
                <div className='flex flex-col py-8 md:flex-row items-center max-w-5xl mx-auto md:px-8'>
                    <div className='w-2/3 flex flex-col gap-4'>
                        <h2 className='font-bold capitalize text-sm'>Please check your email( reset password opt)</h2>
                        <p>Please check your email, 6-digit confirmation code to Tim.@example, please enter the confirmation code to verify your email.</p>
                        <form action="" className='flex flex-col gap-4 items-start'>
                            <input type="text" placeholder='OTP' className='border outline-none rounded-full px-4 py-2 w-full md:w-[80%]' />
                            <div className='flex flex-col items-center md:flex-row md:gap-8 gap-4 max-md:w-full'>
                                <button className='px-8 bg-gray-700 text-white py-2 border max-md:w-full rounded-full'>Verify</button>
                                <div className='flex'>
                                    <p>don't have code ?</p>
                                    <span className=''>resend code</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-1/3 hidden md:block'>
                        <img src="/images/forgot-otp.png" alt="" />
                    </div>
                </div>
            )
        case "new-password":
            return (
                <div className='flex flex-col max-md:py-8 md:flex-row items-center max-w-5xl mx-auto md:px-8'>
                    <div className='w-2/3 flex flex-col gap-4'>
                        <h2 className='font-bold capitalize max-md:text-sm'>Enter New Password</h2>
                        <p className='text-sm'>New Password Must Be Different From Previous Used Password.</p>
                        <form action="" className='flex flex-col gap-4 items-start'>
                            <input type="text" placeholder='Password' className='border outline-none rounded-full px-4 py-2 w-full md:w-[80%]' />
                            <p className='text-xs'>Password Must Be 8 Characters</p>
                            <input type="text" placeholder='Current Password' className='border outline-none rounded-full px-4 py-2 w-full md:w-[80%]' />
                            <div className='flex flex-col items-center md:flex-row md:gap-8 gap-4 max-md:w-full'>
                                <button className='px-8 bg-gray-700 text-white py-2 border max-md:w-full rounded-full'>Change password</button>
                            </div>
                        </form>
                    </div>
                    <div className='w-1/3 hidden md:block'>
                        <img src="/images/new-password.png" alt="" />
                    </div>
                </div>
            )
        default:
            return(
                <div className='flex items-center justify-center h-screen'>
                    plese define correct type
                </div>
            )
    }
}

export default ForgotPassword
