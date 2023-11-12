import "./App.css";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account/Account";
import Main from "./pages/Main/Main";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home";
import AddTool from "./components/AddTool/AddTool";
import AddDatabase from "./components/AddDatabase/AddDatabase";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addtool" element={<AddTool />} />
        <Route path="/adddb" element={<AddDatabase />} />
      </Routes>
    </>
  );
}

export default App;
