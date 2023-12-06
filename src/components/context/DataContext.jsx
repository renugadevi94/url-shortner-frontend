
import { createContext } from "react";
import windowSize from "../windowSize";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let { width } = windowSize();
  return (
    <DataContext.Provider value={{ width }}>{children}</DataContext.Provider>
  );
};

export default DataContext;

