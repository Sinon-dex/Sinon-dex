import { useEffect, useState } from 'react'
import {faAngular,faCss3,faMicrosoft,faHtml5,faJsSquare,faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 3000)
    //   }, [])
    return (
        <>
		
		<div className='about-me-head'>
			<h1>
				<AnimatedLetters letterClass={letterClass} strArray={['A','b','o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
			</h1>
		</div>
		<div className='about-me-text'>
			<p>Hello! My name is Edgar! I am a student of TSI currently finishing my 4th year of CS. Over the years I have gained a lot of experience in many different areas of CS. I have learnt to use many different programming languages, such as, C++, C#, Java, Python, JavaScript and others. I have also learnt how to use many different tools such as databases, debuggers and IDE’s. I am currently aspiring to become a C# developer using the .NET platform. I have made multiple C# applications as well as an C# game in Unity.</p>
		</div>
		
		    <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a', 'c','t',' ','m', 'e']} idx={15}/>
                </h1>
            </div>
			
        <div className='container contact-page'>
            <div className='contact-form'>
                    <form >
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
        </div>
		
        <div className='container about-page'>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#DD0031"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#DD0031"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#DD0031"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faMicrosoft} color="#DD0031"/>
                    </div>
                </div>
            </div>

        </div>
        <Loader type="ball-grid-pulse"/>
        </>
    )
}

export default About