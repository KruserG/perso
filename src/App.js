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
  <path  fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,240C672,235,768,149,864,106.7C960,64,1056,64,1152,96C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
</div>

    </div>

  
    
    
  
 
  );
}

export default App;
