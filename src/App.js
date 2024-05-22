import logo from "./logo.svg";
import "./App.css";
import AddEmployee from "./Comp/AddEmployee";
import FooterComponent from "./Comp/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./Comp/HeaderComponent";
import ListEmployeeComponent from "./Comp/ListEmployeeComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/add-employee/:id" element={<AddEmployee />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
