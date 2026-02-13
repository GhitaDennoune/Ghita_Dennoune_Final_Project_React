
import Footer from "../../components/Footer/Footer";
import { Image } from "../../constant/images";
import couress, { couress2 } from "../../constant/data";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import  { MoviesContext } from "../../context/context";

function Shop() {

const { search, setSearch } = useContext(MoviesContext);
const navigate = useNavigate();

const handleSearch = (e) => {
    if (e.key === "Enter") {
        if (search !== "") {
            navigate("/sale");
        }
    }
};




    const [page, setPage] = useState(1);



    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    let filteredProducts = couress2;

    if (selectedColor !== "") {
        filteredProducts = filteredProducts.filter(
            (item) => item.color === selectedColor
        );
    }

    if (selectedSize !== "") {
        filteredProducts = filteredProducts.filter(
            (item) => item.size === selectedSize
        );
    }




     if (selectedPrice === "0-20") {
        filteredProducts = filteredProducts.filter(
            (item) => item.price >= 0 && item.price <= 20
        );
    } else if (selectedPrice === "20-40") {
        filteredProducts = filteredProducts.filter(
            (item) => item.price > 20 && item.price <= 40
        );
    }

    let productsToShow = [];

    if (page === 1) {
        productsToShow = filteredProducts.slice(0, 6);
    } else {
        productsToShow = filteredProducts.slice(6, 8);
    }

   


    return (
        <>
            <section>

                <div className="relative w-full">
                    <img src={Image.About} alt="" className="w-[100%]    " />
                    <h1 className="absolute inset-0 flex items-center justify-center text-white text-[50px] font-bold">
                        PRODUCTS
                    </h1>
                </div>


                <div className="w-full min-h-screen flex gap-12 px-20 py-16 ">

                    <div className="w-[260px] flex flex-col gap-10 bg-red-100">

                        <div className="flex flex-col gap-4  ">
                            <h2 className="text-2xl font-bold">Categories</h2>
                            <div className="flex flex-col gap-3 text-gray-600 font-light">
                                <p className="hover:text-black cursor-pointer">Best Seller (8 items)</p>
                                <p className="hover:text-black cursor-pointer">Featured (8 items)</p>
                                <p className="hover:text-black cursor-pointer">Men (8 items)</p>
                                <p className="hover:text-black cursor-pointer">Women (8 items)</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold">Color</h2>
                            <div className="flex flex-col gap-3 text-gray-600 font-light">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedColor("Black")
                                                : setSelectedColor("")
                                        }
                                    />
                                    Black
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedColor("Gray")
                                                : setSelectedColor("")
                                        }
                                    />
                                    Gray
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedColor("Red")
                                                : setSelectedColor("")
                                        }
                                    />
                                    Red
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold">Price</h2>
                            <div className="flex flex-col gap-3 text-gray-600 font-light">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedPrice("0-20")
                                                : setSelectedPrice("")
                                        }
                                    /> 0 - 20
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedPrice("20-40")
                                                : setSelectedPrice("")
                                        }
                                    /> 20 - 40
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold">Size</h2>
                            <div className="flex flex-col gap-3 text-gray-600 font-light">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedSize("L")
                                                : setSelectedSize("")
                                        }
                                    />
                                    L
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedSize("M")
                                                : setSelectedSize("")
                                        }
                                    />
                                    M
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedSize("S")
                                                : setSelectedSize("")
                                        }
                                    />
                                    S
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedSize("XL")
                                                : setSelectedSize("")
                                        }
                                    />
                                    XL
                                </label>
                            </div>
                        </div>

                     <input
    type="text"
    placeholder="Search..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={handleSearch}
    className="border border-gray-300 p-3 rounded"
/>

                    </div>

                    <div className="flex-1 bg-blue-100 ">

                        <div className="flex justify-between items-center mb-12">

                            <div className="flex gap-5">

                                <select className="border border-gray-300 px-4 py-2 w-[200px] bg-white text-gray-600 ">
                                    <option>Featured</option>
                                    <option>Best Selling</option>
                                    <option>Alphabetically, A-Z</option>
                                    <option>Alphabetically, Z-A</option>
                                    <option>Price, low to high</option>
                                    <option>Price, high to low</option>
                                    <option>Date, new to old</option>
                                    <option>Date, old to new</option>
                                </select>

                                <select className="border border-gray-300 px-4 py-2 w-[200px]  bg-white text-gray-600 ">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>All</option>
                                </select>

                            </div>

                            <p className="text-gray-500 text-sm">
                                Showing 1 to 6 of 8 items
                            </p>

                        </div>





                        <div>

                            <div className="grid grid-cols-3 gap-10">

                                {productsToShow.map((item) => (
                                    <div key={item.id}>
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-full h-[400px] object-cover"
                                        />
                                        <h3>{item.title}</h3>
                                        <p>¥{item.price}</p>
                                    </div>
                                ))}

                            </div>

                            <div className="flex gap-4 mt-10">

                                <button
                                    onClick={() => setPage(1)}
                                    className={`w-10 h-10 rounded-full border ${page === 1 ? "bg-black text-white" : ""
                                        }`}
                                >
                                    1
                                </button>

                                <button
                                    onClick={() => setPage(2)}
                                    className={`w-10 h-10 rounded-full border ${page === 2 ? "bg-black text-white" : ""
                                        }`}
                                >
                                    2
                                </button>

                            </div>

                        </div>



                    </div>

                </div>






















            </section>

            <Footer />

        </>

































    )





}
export default Shop