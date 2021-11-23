import React from 'react'
import SocialLinks from './SocialLinks'

const Footer = (props) =>{

    return (
        <footer id="footer">
        <div className="container">
          <SocialLinks />
          <div className="copyright">
            &copy; Copyright <strong><span>Talifhani Profile</span></strong>. All Rights Reserved
          </div>

        </div>
      </footer>
    )
}

export default Footer