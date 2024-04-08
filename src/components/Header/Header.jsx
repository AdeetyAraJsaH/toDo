import React from "react";
import ThemeSwitch from "../ThemeSwitch";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-[#f2e7d8] dark:bg-[#c994ea] border-gray-200 px-4 lg:px-6 py-2">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl text-lg text-[#d9c184]">
                    ToDo
                    <div
                        className=" hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {/* for futher use */}
                        </ul> 
                    </div>
                    <ThemeSwitch />
                </div>
            </nav>
        </header>
    );
}

