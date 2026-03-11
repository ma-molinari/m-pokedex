import { createContext, useState, useContext, ReactNode } from "react";

interface SearchContextType {
  currentId: number;
  next: () => void;
  prev: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [currentId, setCurrentId] = useState(1);

  const next = () => {
    setCurrentId((id) => id + 1);
  };

  const prev = () => {
    setCurrentId((id) => (id > 1 ? id - 1 : 1));
  };

  return (
    <SearchContext.Provider value={{ currentId, next, prev }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
