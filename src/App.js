
//importing style
import "./App.css";
//font-awesome importing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//solid svg icons
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
//brands svg icons
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {

  return (

  <div>

    <div className="container">
   
      <div className="d-flex justify-content-center">

        <div className="col-6">
            <h1 className="bigText">Hi!</h1>
            <h1>I'm Omar Boulbaze</h1>
            <h6>I'm a Junior Developer. I love bringing innovative ideas to the real world and helping the community by contributing to open-source projects.</h6>
        </div>

      </div>

      <div className="d-flex justify-content-center">
        
          <a className="btn text-dark" href="https://www.linkedin.com/in/omarboulbaze/" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faLinkedin} /></h1></a>
          <a className="btn text-dark" href="https://github.com/KruserG" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faGithub} /></h1></a>
          <a className="btn text-dark" href="https://twitter.com/omarboulbaze" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faTwitter} /></h1></a> 
      
      </div>

      <div className="d-flex justify-content-center m-5">
        <a className="btn text-dark" target="_blank" href="https://boulbaze.com" rel="noreferrer">
          <h1><FontAwesomeIcon opacity="0.55" size="2x" icon={faAngleDoubleDown} /></h1>
        </a>
      </div>

    </div>

     <div className="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
         <path className="wave1" fillOpacity="0.6" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,218.7C672,203,768,117,864,112C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         <path className="wave2" fillOpacity="0.3"></path>
         <path className="wave3" fillOpacity="0.1"></path>
      </svg>
    </div>

  </div>
  
  );

}

export default App;
