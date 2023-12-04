import { createContext, useState,useEffect } from "react";
import windowSize from "../windowSize";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let { width } = windowSize();
  const [loggedUser, setLoggedUser] = useState("");
  const [token, setToken] = useState("");
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUserJson = localStorage.getItem("loggedInUser");
    if (loggedInUserJson) {
      const user = JSON.parse(loggedInUserJson);
      setLoggedUser(user.username);
      setToken(user.token);
    }
  }, []);

  // handle sign in

  const handleSignIn = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    try {
      const response = await api.post("/login", userData);
      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      setLoggedUser(response.data.username);
      setToken(response.data.token);
      setPassword("");
      setEmail("");
      navigate("/user");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleURL = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        authorization: `bearer ${token}`,
      },
    };
    const data = {
      longurl: url,
    };
    try {
      await api.post("user/url", data, config);
      setUrl("");
      toast.success("URL shortened Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setLoggedUser(null);
    setCount(0);
    navigate("/");
    localStorage.clear();
  };

  // handle signup

  const handleSignUp = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      username,
      password,
    };
    if (password === cPassword) {
      try {
        await api.post("/user/signup", userData);
        setEmail("");
        setUsername("");
        setPassword("");
        setcPassword("");
        navigate("/created");
      } catch (error) {
        toast.error(error.response.data.Err);
      }
    } else {
      toast.error("password mismatch");
    }
  };

  // handle forgot password

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      await api.put("/user/forgot", { email: email });
      toast.success("Reset link send to your mail");
      setTimeout(() => {
        setEmail("");
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.Err);
    }
  };

  // handle passwordreset

  const handleReset = async (e) => {
    e.preventDefault();
    if (password === cPassword) {
        try{
    await api.patch(`/user/reset/${resetToken}`, { password: password });
      setPassword("");
      setcPassword("");
      navigate("/");
      toast.success("Password Changed Successfully");
    } catch (error) {
        console.error(error);

        toast.error("Failed to reset password. Please try again.");
      }
    } else {
      alert("password not matching");
    }
}


  // handle account confirming
  const handleConfirm = (e) => {
    e.preventDefault();
    try {
      api.patch(`/user/confirm/${resetToken}`);
      navigate("/");
      toast.success("Account confirmed Successfully");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <DataContext.Provider value={{ 
        width,
        loggedUser, 
        setLoggedUser,
        token, 
        setToken,
        count,
         setCount,
         email, 
        setEmail,
       username, 
    setUsername,
     password, 
     setPassword,
     cPassword, setcPassword,
       resetToken, setResetToken,
      url, setUrl,
        handleSignIn,
        handleURL,
        handleLogout,
        handleSignUp,
        handleForgot,
        handleReset,
        handleConfirm
    }}
    >{children}
    </DataContext.Provider>
  );
};

export default DataContext;