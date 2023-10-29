import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className='text-center mt-5'>
                <p><small>Copyright &copy; {(new Date().getFullYear())} Volunteer Network. All rights reserved.</small></p>
            </footer>
        </div>
    );
};

export default Footer;