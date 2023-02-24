import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Layout/Header";
import Home from './pages/Home';
import ViewAllLearners from './components/ViewAllLearners';
import AddLearner from "./components/AddLearner";
import EditLearner from "./components/EditLearner";
import ViewLearner from "./components/ViewLearner";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="App text-light">
      <Router>
      <Header/>
        <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/apprenants" element ={<ViewAllLearners/>}/>
        <Route exact path="/ajoutapprenant" element ={<AddLearner/>}/>
        <Route exact path="/modificationapprenant/:id" element={<EditLearner />} />
        <Route exact path="/consultationapprenant/:id" element={<ViewLearner />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
