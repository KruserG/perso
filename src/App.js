
//importing style
import "./App.css";
//font-awesome importing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//solid svg icons
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
//brands svg icons
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
//react-scroll
import { Link, Element } from 'react-scroll'
//react-bootstrap
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
//react-div-100vh
import Div100vh from 'react-div-100vh'
//react
import {useState} from 'react';
//languages
import english from './translations/english.json';
import french from './translations/french.json';

function App() {

const logoNode = "https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png";
const logoPhp = "https://sujanbyanjankar.com.np/wp-content/uploads/2019/03/php.png";
const logoJquery = "https://habrastorage.org/getpro/habr/post_images/99b/37e/278/99b37e278226b136bac04f85ab8e238c.png";
const logoPhotoshop = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png";
const logoIllustrator = "https://cudichis.ro/wp-content/uploads/2021/03/1051px-Adobe_Illustrator_CC_icon.svg.png";
const logoDiscordJs = "https://discord.js.org/static/logo-square.png";

const projectSkills1 = [{name:"PHP",image:logoPhp},
                        {name:"Node.js",image:logoNode},
                        {name:"jQuery",image:logoJquery},
                        {name:"Discord.js",image:logoDiscordJs},
                        {name:"Adobe Photoshop",image:logoPhotoshop},
                        {name:"Adobe Illustrator",image:logoIllustrator}
                      ];

const projectSkills2 = [{name:"PHP",image:logoPhp},
                        {name:"jQuery",image:logoJquery},
                        {name:"Adobe Illustrator",image:logoIllustrator}
                      ];

const [selectedLanguage, setSelectedLanguage] = useState(french);

const switchLanguage = ()=>{
selectedLanguage === french ?  setSelectedLanguage(english) : setSelectedLanguage(french)
}

  return (

  <div>

    <div className="language-switch" onClick={()=>switchLanguage()}>
      <button className="button">{selectedLanguage.changeButtonLanguage}</button>
    </div>

    <Div100vh className="main-page">
   
      <div className="d-flex justify-content-center">

        <div className="aboutme">
            <h1 className="bigText">{selectedLanguage.mainPage.welcome}</h1>
            <h1 className="myNameIs">{selectedLanguage.mainPage.introduction}</h1>
            <br/>
            <h6>{selectedLanguage.mainPage.description}</h6>
        </div>

      </div>

      <div className="d-flex justify-content-center social-links">
        
          <a className="btn text-dark" href="https://www.linkedin.com/in/omarboulbaze/" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faLinkedin} /></h1></a>
          <a className="btn text-dark" href="https://github.com/KruserG" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faGithub} /></h1></a>
          <a className="btn text-dark" href="https://twitter.com/omarboulbaze" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faTwitter} /></h1></a> 
      
      </div>

      <div className="d-flex justify-content-center">
        <Link
        activeClass="active" 
        to="experiences" 
        smooth={true}
        duration={1000}
        className="scroll_down"
        >
          <span><FontAwesomeIcon icon={faAngleDoubleDown} /></span>
        </Link>
      </div>
      <div className="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 1440 320">
         <path className="wave1" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,218.7C672,203,768,117,864,112C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         <path className="wave2" fillOpacity="0.6" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,218.7C672,203,768,117,864,112C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         <path className="wave3" fillOpacity="0.3" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,218.7C672,203,768,117,864,112C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    </Div100vh>

    
    <Element name="experiences" className="experiences">
      
      <div className="head">
        <h1 className="title">{selectedLanguage.experiences.title}</h1>
      </div>

      <div className="body">

        <a className="link" href="https://sunsetradio.me" target="_blank" rel="noreferrer">
          <div className="item">
          <img className="logo" src="https://imgur.com/wBUzy2f.jpg" alt="sunsetradio-logo"/>
          <h2 className="title">{selectedLanguage.experiences.project0.title}</h2>
          <div className="description">
          <p>{selectedLanguage.experiences.project0.description}</p>
          </div>
          <div className="tools">
           
           {
             projectSkills1.map((skill)=>{
              return(
              <OverlayTrigger key={skill.name} placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>{skill.name}</Tooltip>}>
              <img className="tool-logo"  src={skill.image} alt={skill.name}/>
              </OverlayTrigger>
              );
             })
           }           
          </div>
        </div>
        </a>
        <a className="link" href="https://tcorner.net" target="_blank" rel="noreferrer">
        <div className="item">
          <img className="logo" src="https://st3.depositphotos.com/3096625/18861/v/600/depositphotos_188612498-stock-illustration-monogram-tc-logo-hipster-initials.jpg" alt="sunsetradio-logo"/>
          <h2 className="title">{selectedLanguage.experiences.project1.title}</h2>
          <div className="description">
          <p>{selectedLanguage.experiences.project1.description}</p>
          </div>
          <div className="tools">
          {
             projectSkills2.map((skill)=>{
              return(
              <OverlayTrigger key={skill.name} placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>{skill.name}</Tooltip>}>
              <img className="tool-logo" src={skill.image} alt={skill.name}/>
              </OverlayTrigger>
              );
             })
           }  
          </div>
        </div>
        </a>
        
      </div>

      <div className="quote">
        <h4>
        {selectedLanguage.quote.quote0.content}
        <br/>
        {selectedLanguage.quote.quote0.author}
        </h4>

        <h1 className="bigText">...</h1>
      </div>
    
    </Element> 
 
 
  </div>

  );

}

export default App;
