import "./App.css";
<<<<<<< HEAD
import Account from "./components/Account/Account";

function App() {
  return <Account />;
=======
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
>>>>>>> 9ddeba27ed7026dc0bdbe880c91aab03a405ea83
}

export default App;
