import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Jeison Ortiz. All rights reserved.</p>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: '#222',
    textAlign: 'center',
    padding: '10px 0',
};

export default Footer;