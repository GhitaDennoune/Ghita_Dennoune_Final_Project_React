import React from "react";


function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 pt-16 pb-8 px-6 md:px-12 h-[400px]">
            <div className="max-w-7xl mx-auto">

                <div className="flex  items-start justify-between ">

                    <div >
                        <h3 className="font-semibold text-black mb-6 tracking-wide">
                            GET IN TOUCH
                        </h3>
                        <p className="text-sm text-gray-600 leading-6 mb-6">
                            Any questions? Let us know in store at 8th floor,379 Hudson St, <br />
                            New York, NY 10018 or call us on  96 716 6879
                        </p>


                    </div>

                    <div>
                        <h3 className="font-semibold text-black mb-6 tracking-wide">
                            CATEGORIES
                        </h3>
                        <ul className="space-y-3 text-sm flex flex-col">
                           
                                <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                    Men                 
                                </a>
                                <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                    Women
                                </a>
                                <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                    Accessories
                                </a>
                                <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                    Beauty
                                </a>

                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-black mb-6 tracking-wide">
                            LINKS
                        </h3>
                        <ul className="space-y-3 text-sm flex flex-col">
                            <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                Search
                            </a>
                            <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                About Us
                            </a>
                            <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                Contact Us
                            </a>
                            <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                Returns
                            </a>
                        </ul>
                    </div>

                    <div >
                        <h3 className="font-semibold text-black mb-6 tracking-wide">
                            HELP
                        </h3>
                        <ul className="space-y-3 text-sm flex flex-col">
                            <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                Track Order
                            </a>
                            <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                Returns
                            </a>
                            <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                Shipping
                            </a>
                            <a href="#" className="hover:text-[#e65540]  transition  font-extralight  text-[15px]">
                                FAQs
                            </a>

                        </ul>

                    </div>

                    <div>
                        <h3 className="font-semibold text-black mb-6 tracking-wide">
                            NEWSLETTER
                        </h3>

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border-b border-gray-400 bg-transparent py-2 text-sm focus:outline-none focus:border-black"
                        />

                        <button className="mt-6 bg-black text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-gray-800 transition">
                            SUBSCRIBE
                        </button>
                    </div>

                </div>

                <div className="mt-16 pt-6 text-center text-sm text-gray-500">
                    Copyright © 2022 Shopify Theme Developed by MassTechnologist
                    All rights reserved.
                </div>

            </div>
        </footer>












    )
}

export default Footer;










