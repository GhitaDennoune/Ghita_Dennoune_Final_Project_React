
import { createContext,useState } from "react";
import couress, {couress2} from '../constant/data';
export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [search, setSearch] = useState("");
    const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState("");



  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setModalProduct(product.title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <MoviesContext.Provider value={{couress,couress2,search,setSearch,cartItems,
        addToCart,
        modalOpen,
        modalProduct,
        closeModal,  }}>
      {children}
    </MoviesContext.Provider>
    );
}