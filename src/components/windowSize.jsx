import { useEffect, useState } from "react";


const windowSize = () => {
 
    let [windowSize, setWindowSize] = useState({
        width: undefined,
      });
      useEffect(() => {
        let handleResize = () => {
          setWindowSize({ width: window.innerWidth });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.addEventListener("resize", handleResize);
      }, []);
      return windowSize;
    }; 


export default windowSize