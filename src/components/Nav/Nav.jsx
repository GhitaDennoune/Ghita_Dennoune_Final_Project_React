
import { FaUserCircle } from "react-icons/fa";
import { MoviesContext } from "../../context/context";
import { Image } from "../../constant/images";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Nav() {
  return (

    // mini navbare
    <>
      <section className="w-full flex items-center justify-between px-6 py-2 bg-gray-100 text-sm">

        <div className="flex items-center gap-4 text-gray-600">
          <FaFacebookF className="cursor-pointer hover:text-[#e65540]" />
          <FaTwitter className="cursor-pointer hover:text-[#e65540]" />
          <FaPinterest className="cursor-pointer hover:text-[#e65540]" />
        </div>

        <div className="text-center text-gray-600">
          <p>Free shipping for standard order over $100</p>
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <p>fashe@example.com</p>
          <select
            className="bg-transparent cursor-pointer
             focus:ring-0 focus:outline-none
             focus:border-[#e65540]"
          >
            <option className=" hover:bg-[#e65540] ">USD</option>
            <option className=" hover:bg-[#e65540] ">EUR</option>
            <option className=" hover:bg-[#e65540] ">GPP</option>
            <option className=" hover:bg-[#e65540] ">PKR</option>
            <option className=" hover:bg-[#e65540] ">CAD</option>
            <option className=" hover:bg-[#e65540] ">JPY</option>
          </select>
        </div>

      </section>


      <nav className="flex top-0 w-full z-50 bg-white border-b border-black/10  ">
        <div className="max-w-7xl  gap-90 px-4 h-20 flex items-center justify-between ">

          <img src={Image.logo} alt="" />



          <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">


            <li className="relative group list-none  ">
              <a href="#" className="hover:text-black transition    font-extralight  text-[15px]">
                Home
              </a>

              <ul className="absolute w-[225px]  left-0  py-2   bg-[#222] border border-gray-200  shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                <li>
                  <a
                    href="#"
                    className="block  text-white px-4 py-2  font-extralight  text-[15px]  hover:text-[#e65540]"
                  >
                    Home 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 text-white py-2  hover:text-[#e65540]   font-extralight  text-[15px]"
                  >
                    Home 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 text-white py-2  hover:text-[#e65540]    font-extralight  text-[15px]"
                  >
                    Home 3
                  </a>
                </li>

              </ul>
            </li>
            <a href="#" className="hover:text-black transition  font-extralight  text-[15px]">
              Shop
            </a>


            <a href="#" className="hover:text-black transition  font-extralight  text-[15px]">
              Sale
            </a>


            <a href="#" className="hover:text-black transition  font-extralight  text-[15px]">
              Features
            </a>

            <a href="#" className="hover:text-black transition  font-extralight  text-[15px]">
              Blog
            </a>



            <a href="#" className="hover:text-black transition  font-extralight  text-[15px]">
              About
            </a>

            <a href="#" className="hover:text-black transition  font-extralight  text-[15px]">
              Contact
            </a>


          </div>





          <div className="flex items-center gap-6 text-gray-600">

            <FaUserCircle />

            <HiOutlineShoppingBag />
          </div>


        </div>
      </nav>





















    </>






  )
}
export default Nav