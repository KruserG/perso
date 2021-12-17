//react
import { useEffect, useState } from 'react';
//style
import './Project.css';
//importing images
import easynpsLogo from '../../images/logos/easynpsLogo.jpg'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faCode, faChevronLeft, faChevronRight, faCircle, faCaretLeft, faLightbulb, faUserTie, faCogs, faCheckCircle, faImages, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
//screenshots
import screenshot from '../../images/screenshots/phone_preview.jpg'
import screenshot1 from '../../images/screenshots/phone_preview1.jpg'
import screenshot2 from '../../images/screenshots/phone_preview2.jpg'
import screenshot3 from '../../images/screenshots/phone_preview3.jpg'
//technologies used
import reactLogo from '../../images/logos/react.png'
import nodeLogo from '../../images/logos/nodejs.png'
import mongoLogo from '../../images/logos/mongodb.png'

function Project(props){

    document.title = "Omar Boulbaze | Easy NPS";
    
// #region Slideshow
    const [slide, setSlide] = useState(0);

    const [slideImages] = useState([
        {id:0,src:screenshot},
        {id:1,src:screenshot2},
        {id:2,src:screenshot3},
        {id:3,src:screenshot1}
    ]);

    function slideLeft(){
        if(slide===0){
            setSlide(slideImages.length-1)
        }else{
            setSlide(slide-1)
        }  
    }
    function slideRight(){
        if(slide === slideImages.length-1){
            setSlide(0)
        }else{
            setSlide(slide+1)
        }  
    }

    useEffect(()=>{
        const rs = document.querySelector(':root').style;
          rs.setProperty('--slide',slide);
        }, [slide]);
// #endregion Slideshow



    return(
        <>
        <div className='navigation-container'>
            <a href="/#exp" className='home-button'>
                <FontAwesomeIcon icon={faCaretLeft} />
            </a>
        </div>
        <div className='project-head-container'>
            <div className='project-image-container'>
                <img className='project-image' src={easynpsLogo} alt=""/>
                <button className='project-button like-button'><FontAwesomeIcon icon={faHeart} className='like-icon'/> 2 {props.selectedLanguage.easynps.Likes}</button>
            </div>
            <div className='project-info'>
                <h1 className='project-title'>{props.selectedLanguage.easynps.title}</h1>
                <h6 className='project-description'>{props.selectedLanguage.easynps.description}</h6>
            </div>
            <div className='project-button-container'>
                <div className='project-button-container'>
                    <a href="https://www.easynps.ca/" target="_blank" rel='noreferrer'><button className='project-button'><FontAwesomeIcon icon={faSearch} className='like-icon'/> {props.selectedLanguage.easynps.Live_Preview}</button></a>
                    <a href="https://github.com/omarboulbaze/easynps" target="_blank" rel='noreferrer'><button className='project-button'><FontAwesomeIcon icon={faCode} className='like-icon'/> {props.selectedLanguage.easynps.Source_Code}</button></a>
                </div>
            </div>
        </div>
        <div className='project-body-container'>
            <div  className='project-section-title'>
                 <h2><FontAwesomeIcon icon={faImages} style={{fontSize:"2rem", marginRight:"1rem", opacity:"0.6"}}/>{props.selectedLanguage.easynps.Preview}</h2>
            </div>
            <div className='project-slide'>
                <button className='project-slide-button-left hover-opacity-1' onClick={()=>slideLeft()}><FontAwesomeIcon icon={faChevronLeft}/></button>
                {
                    slideImages.map(img => {
                        return <img key={img.id} className='project-slide-image' src={img.src} alt=""/>
                    })
                }
                <button className='project-slide-button-right hover-opacity-1' onClick={()=>slideRight()}><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
            <div className='slide-points'>
                {
                    slideImages.map((img)=>{
                        if(slide===img.id){
                            return <button key={img.id} className='slide-points-button hover-opacity-1 active-slide-button' onClick={()=> setSlide(img.id)}><FontAwesomeIcon icon={faCircle}/></button>
                        }else{
                            return <button key={img.id} className='slide-points-button hover-opacity-1' onClick={()=> setSlide(img.id)}><FontAwesomeIcon icon={faCircle}/></button>
                        }
                        
                    })
                }
            </div>
        </div>
        <div className='general-container'>
        <div className='tech-container'>
        <div  className='project-section-title'>
                 <h2><FontAwesomeIcon icon={faCogs} style={{fontSize:"2rem", marginRight:"1rem", opacity:"0.6"}}/>{props.selectedLanguage.easynps.Technologies_Used}</h2>
                    <div className='tech-used-container'>
                        <div className='tech-used-item'>
                            <img src={reactLogo} alt=''/>
                            <span>React.js</span>
                        </div>
                        <div className='tech-used-item'>
                            <img src={nodeLogo} alt=''/>
                            <span>Node.js</span>
                        </div>
                        <div className='tech-used-item'>
                            <img src={mongoLogo} alt=''/>
                            <span>MongoDB</span>
                        </div>
                    </div>
                    
            </div>
        </div>
        <div className='role-container'>
        <div  className='project-section-title'>
                 <h2><FontAwesomeIcon icon={faUserTie} style={{fontSize:"2rem", marginRight:"1rem", opacity:"0.6"}}/>{props.selectedLanguage.easynps.My_Role}</h2>
                    <p>
                    {props.selectedLanguage.easynps.html.My_Role}
                    </p>  
            </div>
        </div>
        </div>
        <div className='features-container'>
        <div  className='feature-section'>
                 <h2 style={{fontWeight:"bold"}}><FontAwesomeIcon icon={faLightbulb} style={{fontSize:"2rem", marginRight:"1rem", color:"#ffcb3d", opacity:"0.6"}}/>{props.selectedLanguage.easynps.Notable_Features}</h2>
                        <ul>
                        <li>{props.selectedLanguage.easynps.html.Notable_Features[0]}</li>
                        <li>{props.selectedLanguage.easynps.html.Notable_Features[1]}</li>
                        <li>{props.selectedLanguage.easynps.html.Notable_Features[2]}</li>
                        <li>{props.selectedLanguage.easynps.html.Notable_Features[3]}</li>
                        </ul> 
        </div>
        </div>
        <div className='difficulty-solution-container'>
        <div className='role-container'>
            <div  className='project-section-title'>
                    <h2><FontAwesomeIcon icon={faPuzzlePiece} style={{fontSize:"2rem", marginRight:"1rem", color:"#ff2b2b", opacity:"0.6"}}/>{props.selectedLanguage.easynps.Project_Challenges}</h2>
                        <ul>
                        <li>{props.selectedLanguage.easynps.html.Project_Challenges[0]}</li>
                        <li>{props.selectedLanguage.easynps.html.Project_Challenges[1]}</li>
                        </ul>
            </div>
        </div>
        <div className='role-container'>
        <div  className='project-section-title'>
                 <h2><FontAwesomeIcon icon={faCheckCircle} style={{fontSize:"2rem", marginRight:"1rem", color:"#60de49", opacity:"0.6"}}/>{props.selectedLanguage.easynps.My_Solutions}</h2>
                    <ul>
                    <li>{props.selectedLanguage.easynps.html.My_Solutions[0]}</li>
                    <li>{props.selectedLanguage.easynps.html.My_Solutions[1]}</li>
                    </ul>  
            </div>
        </div>
        </div>
        
        
        </>
    )
}

export default Project; 