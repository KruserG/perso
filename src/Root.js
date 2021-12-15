import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//importing components
import App from "./pages/Main/Main";
import Project from "./pages/Project/Project";

function Root() {
return(

<>


<Router>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/project" element={<Project/>}/>
  </Routes>
</Router>
</>

)
}

export default Root;