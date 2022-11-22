import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./fontawesome-free/css/all.css";
import "./fontawesome-free/js/all.js";
import "./css/sb-admin-2.min.css";
import Searchbar from './Searchbar';
import Sidebar from './Sidebar';
import Createdata from './Createdata';
import Dashboard from './Dashboard';

function App() {
  return <>
 
  <BrowserRouter>
  <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">

        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/search" element={<Searchbar/>}/>
          <Route path="/create" element={<Createdata/>}/>
          {/* <Route path="/createUser" element={<Usercreate/>}/>
          <Route path="/view/:id" element={<Viewuser/>}/>
          <Route path="/edit/:id" element={<Edituser/>}/>
          <Route path="/delete/:id" element={<Deleteuser/>}/> */}
        </Routes>
      </div>
    </div>
  </div>
</BrowserRouter>
</>;
}

export default App;
