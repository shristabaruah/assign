import "./App.css";
import { Navbar } from "./Components";
import { Favourite } from "./Page";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Page/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-container"> 
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
