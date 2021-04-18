//importing necessary files
//import Navbar from "./components/navbar";



//importing style
import "./App.css";

//font-awesome importing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (

    
  <div>

    
    
   
    
    <div className="container">
   
    
    <div className="row mt-5">

    <div className="col-1 pr-5">
     <div>
      <a className="btn text-dark" href="https://www.linkedin.com/in/omarboulbaze/" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faLinkedin} /></h1></a>
      <a className="btn text-dark" href="https://github.com/KruserG" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faGithub} /></h1></a>
      <a className="btn text-dark" href="https://twitter.com/omarboulbaze" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faTwitter} /></h1></a>
     </div>
    </div>

    <div className="col-6">
       <h1 className="bigText">Hi!</h1>
       <h1>I'm Omar Boulbaze</h1>
       <h6>I'm a Junior Full-Stack developer. I love bringing innovative ideas to the real world and helping the community by contributing to open-source projects.</h6>
      
      

    </div>

    <div>
      
    </div>

    

    </div>
     
    
     </div>

     <div className="wave">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path className="wave1" fill-opacity="0.6"></path>
  <path className="wave2" fill-opacity="0.3"></path>
  <path className="wave3" fill-opacity="0.1"></path>

</svg>
</div>

    </div>

  
    
    
  
 
  );
}

export default App;
