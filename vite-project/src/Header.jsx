import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCaretDown } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { TbRosetteDiscount } from "react-icons/tb";
import { IoIosHelpBuoy } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiGps } from "react-icons/ci";
import logo from '../public/logo/FoodFiestaLogo.png';

export default function Header() {
    const [style, setStyle] = useState({});
    const [toggle, setToggle] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const shadow = () => {
        const styles = {
            boxShadow: '0 4px 3px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0.06)',
        };
        setStyle(styles);
    };

    const links = [
        { icon: <FiSearch />, name: "Search", action: () => setSearchOpen(true) },
        { icon: <TbRosetteDiscount />, name: "Offers", sup: "NEW" },
        { icon: <IoIosHelpBuoy />, name: "Help" },
        { icon: <LuUser />, name: "Sign In", to: "/signin" },
        { icon: <PiShoppingCartSimpleThin />, name: "Cart" },
    ];

    const searchOptions = ["Pizza", "Burger", "Sandwiches", "Pasta", "Drinks"];

    return (
        <>
            {/* Search Bar Overlay */}
            {searchOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
                    <div className="bg-white w-[80%] max-w-[500px] p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Search for Food</h2>
                        <input
                            type="text"
                            placeholder="Type to search..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
                        />
                        <div className="flex flex-wrap gap-3">
                            {searchOptions.map((option, index) => (
                                <button
                                    key={index}
                                    className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setSearchOpen(false)}
                            className="mt-4 w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
                    toggle ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setToggle(false)}
                style={{ zIndex: 9999999999999 }}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`w-[500px] bg-white h-full absolute transition-transform duration-400 ${
                        toggle ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="w-full h-full px-[10%] flex justify-end">
                        <div className="h-[60vh] w-[80%] pt-20">
                            <div onClick={shadow} style={style} className="h-[60px] w-full border">
                                <input
                                    className="h-full w-full p-5 border-none outline-none"
                                    type="text"
                                    placeholder="Search for area, street name.."
                                />
                            </div>
                            <div className="h-[100px] w-full mt-12 border p-[5%]">
                                <div className="h-full w-full flex gap-2 items-center">
                                    <div className="h-[3.4vh] w-[3.4vh]">
                                        <CiGps className="w-full h-full" />
                                    </div>
                                    <div className="font-semibold hover:text-orange-400 cursor-pointer">
                                        Get Current Location
                                        <br />
                                        <span className="text-[2vh] font-normal text-slate-500">
                                            using GPS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Section */}
            <header className="shadow-xl text-[#686b78] sticky top-0 bg-white z-[999]">
                <div className="max-w-[1200px] mx-auto flex items-center">
                    <div className="w-[100px]">
                        <img src={logo} className="w-full h-full object-fill" alt="FoodFiesta Logo" />
                    </div>
                    <div className="ml-4">
                        <span className="font-bold border-b-[3px] border-black text-[#282c3f]">
                            Moodbidri
                        </span>
                        <span className="ml-2">Mangalore, Karnataka, India</span>
                        <RxCaretDown
                            onClick={() => setToggle(true)}
                            className="inline text-[#fc8019] cursor-pointer ml-1 text-2xl"
                        />
                    </div>
                    <nav className="flex list-none gap-10 ml-auto font-semibold text-[18px]">
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className="flex hover:text-orange-500 hover:underline transition duration-300 items-center gap-2 cursor-pointer"
                                onClick={link.action || null}
                            >
                                {link.to ? (
                                    <Link to={link.to} className="flex items-center gap-2">
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                ) : (
                                    <>
                                        {link.icon}
                                        {link.name}
                                    </>
                                )}
                                {link.sup && (
                                    <sup className="text-orange-500 text-[12px] font-bold">{link.sup}</sup>
                                )}
                            </li>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}
