
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


function App() {

const logoNode = "https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png";
const logoPhp = "https://sujanbyanjankar.com.np/wp-content/uploads/2019/03/php.png";
const logoJquery = "https://habrastorage.org/getpro/habr/post_images/99b/37e/278/99b37e278226b136bac04f85ab8e238c.png";
const logoPhotoshop = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png";
const logoIllustrator = "https://cudichis.ro/wp-content/uploads/2021/03/1051px-Adobe_Illustrator_CC_icon.svg.png";
const logoDiscordJs = "https://discord.js.org/static/logo-square.png";
  return (

  <div>

    <div className="container">
   
      <div className="d-flex justify-content-center">

        <div className="col-6">
            <h1 className="bigText">Allo!</h1>
            <h1>Moi c'est Omar Boulbaze.</h1>
            <h6>Je suis développeur WEB. J'aime suivre et participer à l'évolution de projets, en partant de la conception jusqu'à la publication. Tout en supportant la communauté des développeurs en contribuant à des projets open source.</h6>
        </div>

      </div>

      <div className="d-flex justify-content-center">
        
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
        >
          <span className="scroll_down"><FontAwesomeIcon icon={faAngleDoubleDown} /></span>
        </Link>
      </div>

    </div>

     <div className="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 1440 320">
         <path className="wave1" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,218.7C672,203,768,117,864,112C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         <path className="wave2" fillOpacity="0.6" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,218.7C672,203,768,117,864,112C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         <path className="wave3" fillOpacity="0.3" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,218.7C672,203,768,117,864,112C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
    
    <Element name="experiences" className="experiences">
      <div className="head">
        <h1 className="title">Expériences</h1>
      </div>
      <div className="body">
        <a className="link" href="https://sunsetradio.me" target="_blank" rel="noreferrer">
          <div className="item">
          <img className="logo" src="https://imgur.com/wBUzy2f.jpg" alt="sunsetradio-logo"/>
          <h2 className="title">Sunset Radio</h2>
          <div className="description">
          <p>Sunset Radio est une radio francophone communautaire basé sur le web. J'ai travaillé sur le développement du site internet ainsi que la conception d'un bot musical sur une plateforme de communication nommée Discord.</p>
          </div>
          <div className="tools">
            <img className="tool-logo" src={logoPhp} alt="tool"/>
            <img className="tool-logo" src={logoNode} alt="tool"/>
            <img className="tool-logo" src={logoJquery} alt="tool"/>
            <img className="tool-logo" src={logoDiscordJs} alt="tool"/>
            <img className="tool-logo" src={logoPhotoshop} alt="tool"/>
            <img className="tool-logo" src={logoIllustrator} alt="tool"/>
          </div>
        </div>
        </a>
        <a className="link" href="https://tcorner.net" target="_blank" rel="noreferrer">
        <div className="item">
          <img className="logo" src="https://st3.depositphotos.com/3096625/18861/v/600/depositphotos_188612498-stock-illustration-monogram-tc-logo-hipster-initials.jpg" alt="sunsetradio-logo"/>
          <h2 className="title">Technological Corner</h2>
          <div className="description">
          <p>TCorner est un projet scolaire en équipe dans lequel j'étais en charge du développement d'un site web statique pour des raisons de présentation.</p>
          </div>
          <div className="tools">
            <img className="tool-logo" src={logoPhp} alt="tool"/>
            <img className="tool-logo" src={logoJquery} alt="tool"/>
          </div>
        </div>
        </a>
        
      </div>

      <div className="quote">
        <h4>
        “A commitment to lifelong learning is a natural expression of the practice of living consciously.”
        <br/>
— Nathaniel Branden
        </h4>

        <h1 className="bigText">...</h1>
      </div>
    
    </Element>
    


 
  </div>
  );

}

export default App;
