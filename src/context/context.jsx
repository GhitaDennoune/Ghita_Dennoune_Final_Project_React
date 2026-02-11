
import { createContext } from "react";
import couress from '../constant/data';
export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  return (
    <MoviesContext.Provider value={couress}>
      {children}
    </MoviesContext.Provider>
    );
}