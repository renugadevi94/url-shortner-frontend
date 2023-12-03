import React, { useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";


const Accconfirm = () => {
    const { handleConfirm, setResetToken } = useContext(DataContext);
    let { id } = useParams();
    useEffect(() => {
      setResetToken(id);
    }, [id, setResetToken]);
  
    return (
      <form
        onSubmit={handleConfirm}
        className="signIn container d-flex flex-column gap-1 p-3"
      >
        <h2 className="display-6 text-center">Confirm account</h2>
  
        <button type="submit" className="btn mt-3 btn-primary">
          Click here to confim account
        </button>
      </form>
    );
};
export default Accconfirm