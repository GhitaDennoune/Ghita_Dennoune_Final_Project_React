import { useContext } from "react"; 
import { MoviesContext } from "../../context/context";
import Footer from "../../components/Footer/Footer";

import {Link} from "react-router-dom"





function Sale (){


 const { couress, couress2, search } = useContext(MoviesContext);

  let allProducts = [...couress, ...couress2]; 
  let filteredProducts = [];

  if (search === "") {
    filteredProducts = [];
  } else {
    filteredProducts = allProducts.filter((item) => {
      if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  }



return(

<>
<Link to="/" className="hover:text-black transition    font-extralight  text-[15px]">
                Home
              </Link> /  <Link to="/sale" className="hover:text-black transition  font-extralight  text-[15px]">
              Sale
            </Link>
 <div className="p-20 min-h-screen">

      <h1 className="text-3xl mb-10">
        Search: {search}
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt=""
                className="w-full h-[400px] object-cover"
              />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}

    </div>
    <Footer/>









</>


)



}
export default Sale 