import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favId, setfavId] = useState([]);
  function addFavorite(id) {
    setfavId((prev) => [...prev, id]);
  }

  function removeFavorite(id) {
    setfavId((prev) => prev.filter((mealId) => mealId !== id));
  }

  const value = {
    id: favId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
