"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(false);
    const formRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia()
        if (isLogin) {
            mm.add("(min-width: 768px)", () => {
                gsap.to(formRef.current, { x: "-100%", duration: 0.5, });
                gsap.to(imageRef.current, { x: "100%", duration: 0.5 });
            })
        } else {
            mm.add("(min-width: 768px)", () => {
                gsap.to(formRef.current, { x: "0%", duration: 0.5,});
                gsap.to(imageRef.current, { x: "0%", duration: 0.5 });
            })
        }
    }, [isLogin]);

    return (
        <div className="flex h-screen flex-col md:flex-row p-8">
            {/* Left Image Section */}
            <div
                ref={imageRef}
                className="flex-1 hidden md:flex bg-cover bg-center justify-center items-center transition-all duration-500"
            >
                <img src="/images/register.png" alt=""  className=""/>
            </div>

            {/* Right Form Section */}
            <div
                ref={formRef}
                className="flex-1 flex items-center justify-center bg-gray-50 px-6 md:px-12"
            >
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                        {isLogin ? "Login" : "Create an Account"}
                    </h2>
                    <form className="space-y-3">
                        {!isLogin && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                            </>
                        )}

                        {isLogin && (
                            <>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                            </>
                        )}

                        <button
                            type="button"
                            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg shadow-md"
                        >
                            {isLogin ? "Login" : "Create Account"}
                        </button>
                    </form>

                    <p className="text-sm text-gray-600 mt-6 text-center">
                        {isLogin
                            ? "Don’t have an account? "
                            : "Already have an account? "}
                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-600 cursor-pointer hover:underline"
                        >
                            {isLogin ? "Create New Account" : "Login"}
                        </span>
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                        <button className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm shadow-md flex items-center justify-center">
                            <img
                                src="/icons/google.svg"
                                alt="Google"
                                className="w-5 h-5 mr-2"
                            />
                            Login with Google
                        </button>
                        <button className="flex-1 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-md text-sm shadow-md flex items-center justify-center">
                            <img
                                src="/icons/facebook.svg"
                                alt="Facebook"
                                className="w-5 h-5 mr-2"
                            />
                            Login with Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
