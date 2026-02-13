
import { createContext,useState } from "react";
import couress, {couress2} from '../constant/data';
export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [search, setSearch] = useState("");
  return (
    <MoviesContext.Provider value={{couress,couress2,search,setSearch}}>
      {children}
    </MoviesContext.Provider>
    );
}