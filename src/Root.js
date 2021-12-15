import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//importing components
import App from "./pages/Main/Main";
import Project from "./pages/Project/Project";
//languages
import english from './translations/english.json';
import french from './translations/french.json';

function Root() {

  const [selectedLanguage, setSelectedLanguage] = useState(()=> localStorage.getItem("language") === "french" ? french : english );

return(
<>
  <Router>
    <Routes>
      <Route path="/" element={<App selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>}/>
      <Route path="/easynps" element={<Project selectedLanguage={selectedLanguage}/>}/>
    </Routes>
  </Router>
</>
)
}

export default Root;