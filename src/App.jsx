import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2562997708587!2d72.66792997509852!3d23.233758679026327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0cdd2469bb%3A0x4d7fe05c17db90e4!2sSector%2021%2C30%20Cir%2C%20Gujarat%20Housing%20Board%2C%20Sector%2030%2C%20Gandhinagar%2C%20Gujarat%20382021!5e0!3m2!1sen!2sin!4v1712421932521!5m2!1sen!2sin" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <form action="https://formspree.io/f/xoqgpvlp" method='POST'>
        <input type="text" name='name' placeholder='Enter your name' />
        <input type="email" name='email' placeholder='Enter your email' />
        <textarea name="textarea" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="submit"/>
      </form>
    </>
  )
}

export default App
