//importing style
import "./Main.css";
//font-awesome importing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//solid svg icons
import { faAngleDoubleDown, faSun, faMoon, faCode } from '@fortawesome/free-solid-svg-icons'
//brands svg icons
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
//react-scroll
import { Link, Element } from 'react-scroll'
//react-bootstrap
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
//react-div-100vh
import Div100vh from 'react-div-100vh'
//react
import {useEffect, useState} from 'react';
//languages
import english from '../../translations/english.json';
import french from '../../translations/french.json';
//projects logos
import easynpsLogo from '../../images/logos/easynpsLogo.jpg'
import sunsetradioLogo from '../../images/logos/sunsetradioLogo.jpg'
import tcornerLogo from '../../images/logos/tcornerLogo.jpg'
//technologies logos
import nodejsLogo from '../../images/logos/nodejs.png';
import reactLogo from '../../images/logos/react.png';
import phpLogo from '../../images/logos/php.png';
import jqueryLogo from '../../images/logos/jquery.png';
import discordjsLogo from '../../images/logos/discordjs.png';
import bootstrapLogo from '../../images/logos/bootstrap.png';
import photoshopLogo from '../../images/logos/photoshop.png';
import illustratorLogo from '../../images/logos/illustrator.png';
import mongoLogo from '../../images/logos/mongodb.png';
//image
import circuit from '../../images/logos/circuit.png'


function App() {

const sunsetradioTools = [{name:"PHP",image:phpLogo},
                        {name:"jQuery",image: jqueryLogo},
                        {name:"Discord.js",image:discordjsLogo},
                        {name:"Bootstrap",image:bootstrapLogo},
                        {name:"Adobe Photoshop",image:photoshopLogo}
                      ];

const tcornerTools = [{name:"PHP",image:phpLogo},
                        {name:"jQuery",image:jqueryLogo},
                        {name:"Bootstrap",image:bootstrapLogo},
                        {name:"Adobe Illustrator",image:illustratorLogo}
                      ];

const easynpsTools = [{name:"Node.js",image:nodejsLogo},
                        {name:"React.js",image:reactLogo},
                        {name:"MongoDB",image:mongoLogo}
                      ];

if(!localStorage.getItem("theme")){
  localStorage.setItem("theme","light")
}

if(!localStorage.getItem("language")){
  localStorage.setItem("language","english")
}

const [selectedLanguage, setSelectedLanguage] = useState(()=> localStorage.getItem("language") === "french" ? french : english );
const [theme, setTheme] = useState(localStorage.getItem("theme"));
const [themeIcon, setThemeIcon] = useState(()=> theme === "light" ? faMoon : faSun);

const switchLanguage = ()=>{
  if(selectedLanguage === french){
    setSelectedLanguage(english)
    localStorage.setItem("language","english")
  }else{
    setSelectedLanguage(french)
    localStorage.setItem("language","french")
  }
}

const switchTheme = ()=>{
if(theme === "light"){
  localStorage.setItem("theme","dark")
  setTheme("dark")
  setThemeIcon(faSun)
}else{
  localStorage.setItem("theme","light")
  setTheme("light")
  setThemeIcon(faMoon)
}
}

useEffect(()=>{
  const rs = document.querySelector(':root').style;
  if(theme === "light"){
    rs.setProperty('--primary-color','#343a40');
    rs.setProperty('--secondary-color','#828486');
    rs.setProperty('--background-color','#f5f5f5');
  } 
  else{
    rs.setProperty('--primary-color','#f5f5f5');
    rs.setProperty('--secondary-color','#828486');
    rs.setProperty('--background-color','#343a40');
  }
}, [theme])

  return (

  <>

  <div className="header-container">
      <button className="theme-switch" onClick={switchTheme}><FontAwesomeIcon icon={themeIcon} /></button>
      <button className="language-switch" onClick={switchLanguage} >{selectedLanguage.changeButtonLanguage}</button>
  </div>
 

    <Div100vh className="main-page">

      <div className="aboutMe-container">
          <h1 className="reveal-animation" style={{fontSize:"5rem"}}>{selectedLanguage.mainPage.welcome}</h1>
          <h4 className="reveal-animation delay-1s" style={{fontSize:"1.5rem"}}>{selectedLanguage.mainPage.introduction}</h4>
          <h6 className="reveal-animation delay-2s" style={{fontSize:"1rem"}}>{selectedLanguage.mainPage.description}</h6>
      </div>

      <div className="social-container social-links reveal-animation delay-3s">
          <a className="btn text-dark" href="https://www.linkedin.com/in/omarboulbaze/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="btn text-dark" href="https://github.com/omarboulbaze" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a className="btn text-dark" href="https://twitter.com/omarboulbaze" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a> 
      </div>

      <Link className="scroll_down" activeClass="active" to="experiences" smooth={true} duration={500}>
        <span><FontAwesomeIcon icon={faAngleDoubleDown} /></span>
      </Link>
      
      <img className="circuit-image" src={circuit} alt=""/>
      
    </Div100vh>

    
    <Element name="experiences">
      <div  className="experiences" id="exp">
      <div className="head">
        <h1 className="title"><FontAwesomeIcon icon={faCode}/> {selectedLanguage.experiences.title}</h1>
      </div>

      <div className="body">
        <Project 
        logo={easynpsLogo}
        text={selectedLanguage.experiences.easynps}
        projectTools={easynpsTools}
        language={selectedLanguage}
        link={"/project"}
        />

        <Project 
        logo={sunsetradioLogo}
        text={selectedLanguage.experiences.sunsetradio}
        projectTools={sunsetradioTools}
        language={selectedLanguage}
        link={"https://github.com/omarboulbaze/sunsetradio-website"}
        />

        <Project 
        logo={tcornerLogo}
        text={selectedLanguage.experiences.tcorner}
        projectTools={tcornerTools}
        language={selectedLanguage}
        link={"https://github.com/omarboulbaze/tcorner-website"}
        />
      </div>

      <div className="quote">
        <h4>
        {selectedLanguage.quote.quote0.content}
        <br/>
        {selectedLanguage.quote.quote0.author}
        </h4>
        <h1 className="bigText">...</h1>
      </div>
      </div>
    </Element> 
    
 
  </>

  );

}

function Project(props){
  return(
      <div className="item">
        <img className="logo" src={props.logo} alt="logo"/>
        <div className="project_description">
          <h2 style={{fontWeight:"bold"}}>{props.text.title}</h2>
          <p>{props.text.description}</p>
        </div>
        <div className="tools">
          {   props.projectTools.map((skill)=>{ 
            return(
              <OverlayTrigger key={skill.name} placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>{skill.name}</Tooltip>}>
              <img className="tool-logo"  src={skill.image} alt={skill.name}/>
              </OverlayTrigger>
              );
            })
          }           
        </div> 
        <div className="learnMore-container">
        <a href={props.link}><button className="learnMore-button">{props.language.experiences.learnMore}</button></a>
        </div>
      </div>
  )
}

export default App;
