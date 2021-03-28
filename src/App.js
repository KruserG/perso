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
       <h1 className="bigText">Hi.</h1>
       <h1>I'm Omar Boulbaze</h1>
       <h6>I'm a Junior Full-Stack developer. I love bringing innovative ideas to the real world and helping the community by contributing to open-source projects.</h6>
    </div>

    

    </div>
     
    <div className="custom-shape-divider-bottom-1616587874">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
         className="shape-fill"></path>
    </svg>
</div>
     
     </div>

    
    </div>

  
    
    
  
 
  );
}

export default App;
