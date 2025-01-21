import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className={`${footerStyle} z-10 font-bold`}>
            <p className='shadowWhite'>&copy; {new Date().getFullYear()} Jeison Ortiz. All rights reserved.</p>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: '#222',
    textAlign: 'center',
    padding: '10px 0'
};

export default Footer;