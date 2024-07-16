import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
   <>
   <div className="row w-100 p-5">
    <div className="col-md-4">
      <h4 className='text-warning mb-4'><FontAwesomeIcon icon={faVideo} className='me-3' />Media Player</h4>
      <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis distinctio enim quidem quibusdam in porro quisquam, quod provident. Libero, ut numquam voluptatem veritatis quas nemo! Quibusdam omnis!</p>
    </div>
    <div className="col-md-2 d-md-flex justify-content-center">
      <div>
        <h4 className='mb-4'>Links</h4>
        <div>
          <Link to={'/'}><p>Landing Page</p></Link>
          <Link to={'/home'}><p>Home</p></Link>
         <Link to={'/watchhistory'}> <p>Watch History</p></Link>
        </div>
      </div>
    </div>
    <div className="col-md-2 d-md-flex justify-content-center">
    <div>
      <h4 className='mb-4'>Guides</h4>
        <div>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>
    </div>
    </div>
    <div className="col-md-4 d-md-flex justify-content-center">
      <div>
        <h4>Contact Us</h4>
        <div className="d-flex mt-4">
          <input type="text"  className='form-control me-4' placeholder='Email Id'/>
          <button className='btn btn-warning'>Subscribe</button>
        </div>
        <div className="d-flex justify-content-between mt-4">
        <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
        <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
        <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
        <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
        <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Footer