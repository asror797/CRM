import Dashboard from "./Components/Dashboard";
import {Route , Routes} from 'react-router-dom';
import Add from "./Components/Add";
import EditUser from "./Components/EditUser";
import { useState } from "react";

function App() {

  return (
    <>

      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<EditUser/>}/>

      </Routes>
    </>
  );
}

export default App;
