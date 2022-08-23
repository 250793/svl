import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { FormBook } from './page/FormBook';
import { Table } from './page/Table';


function App() {
  return (
    <div className="container">

      <Routes>
        <Route path='/' element={<NavBar/>} />
        <Route path='/table' element={<Table/>} />
        <Route path='/formbook' element={<FormBook/>} />

      </Routes>

    </div>
  );
}

export default App;
