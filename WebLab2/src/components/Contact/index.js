import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)
//   }, [])
const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a', 'c','t',' ','m', 'e']} idx={15}/>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate lacus ut ligula tincidunt tempor. Donec sit amet mattis ante, sit amet dictum nisl. Suspendisse luctus in tellus egestas facilisis. Maecenas tincidunt non diam ac sollicitudin. Aliquam mollis vitae mi vitae pulvinar. Vivamus commodo id nibh eget molestie. Sed imperdiet justo a commodo suscipit. Fusce dapibus, ipsum et facilisis tincidunt, lectus ipsum commodo urna, et interdum nisi felis a nulla. Proin erat elit, efficitur non felis dictum, pulvinar venenatis risus. Etiam interdum ex sed tortor accumsan tristique. Suspendisse et pretium elit. Suspendisse auctor convallis posuere. Nunc eleifend enim nec orci tincidunt, et imperdiet ante pellentesque. Aliquam tortor sem, sagittis sit amet ex vel, mattis facilisis felis.</p>
            </div>
            <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
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
        <Loader type="ball-grid-pulse" />
        </>
    )
}

export default Contact