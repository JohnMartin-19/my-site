import './footer.css'
import { Link } from 'react-router-dom'
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk ,FaPhone, FaTwitter} from 'react-icons/fa'

function Footer(){
    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color:"#fff", marginRight:"2rem" }} />
                        <div>
                            <p>Thika</p>
                            <p>Kenya</p>
                        </div>
                    </div>
                    
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem" }} />+254768171426</h4>
                    </div>

                    <div className='email'>
                       <Link to='johnnkonge2020@gmail.com'> <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem" }} />johnnkonge2020@gmail.com</h4></Link>
                    </div>

                </div>
                <div className='right'>
                    <h4>Who is Mburu?</h4>
                    <p>I am a Software Developer based in Thika,Kenya. I am passionate about solving problems and satisfying customer needs using technology and all of its available resources. </p>
                    <div className='social'>
                        <Link to='https://twitter.com/Mburuuuuuuu'><FaTwitter   size={30} style={{ color:'#fff', marginRight:'1rem'}}/></Link>
                        <Link to='https://www.linkedin.com/in/john-m-015922206/'><FaLinkedin  size={30} style={{ color:'#fff', marginRight:'1rem'}}/></Link>
                        <Link to='https://github.com/JohnMartin-19'> <FaGithub  size={30} style={{ color:'#fff', marginRight:'1rem'}}/></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer