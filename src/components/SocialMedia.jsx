import React from 'react';
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://www.linkedin.com/in/suryapradipta/">
                <div><BsLinkedin/></div>
            </a>

            <a href="https://github.com/suryapradipta">
                <div><BsGithub/></div>
            </a>


            <a href="https://instagram.com/suryapradpta?igshid=MzRlODBiNWFlZA==">
                <div><BsInstagram/></div>
            </a>

        </div>
    )
}

export default SocialMedia