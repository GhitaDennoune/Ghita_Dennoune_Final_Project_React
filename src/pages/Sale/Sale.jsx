import { useContext } from "react"; 
import { MoviesContext } from "../../context/context";






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


 <div className="p-20 min-h-screen">

      <h1 className="text-3xl mb-10">
        Search: {search}
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-3 gap-10">
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

)



}
export default Sale 