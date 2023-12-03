import { Route, Routes, useNavigate } from "react-router-dom";

import { useContext } from "react";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Loggedin from "./components/Loggedin";
import Forgotpage from "./components/Forgotpage";
import Createdacc from "./components/Createdacc";
import Password from "./components/Password";
import Resetpassword from "./components/Resetpassword";
import Accconfirm from "./components/Accconfirm";
import Logout from "./components/Logout";
import DataContext from "./components/context/DataContext";


function App() {
 const {loggedUser}=useContext(DataContext);
  return (
    <div className="app">

        <Routes>
          <Route path="/" element={<Signin />} />
           
          <Route
            path="/signup"
            element={
              <Signup />} />
               
            
          {loggedUser ? (
            <Route
              path="/user"
              element={
                <Loggedin />} />
                  
               
          ) : (
            <Route path="/user" element={<Logout />} />
          )}
          <Route
            path="/forgot"
            element={
              <Forgotpage />} />
               
             
          <Route path="/created" element={<Createdacc />} />
          <Route path="/password" element={<Password />} />
          <Route
            path="user/reset/:id"
            element={
              <Resetpassword />} />
                
          <Route
            path="/user/confirm/:id"
            element={
              <Accconfirm />} />
                
        </Routes>

    </div>
  );
  };

export default App;