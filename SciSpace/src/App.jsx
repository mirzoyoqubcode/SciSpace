import "./App.css";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account/Account";
import Main from "./pages/Main/Main";
import Login from "./components/Login/Login";
import Registeration from "./components/Registeration/Registeration";
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Registeration />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
