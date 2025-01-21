import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full text-center p-2 z-10 font-bold">
      <p className="shadowWhite">
        &copy; {new Date().getFullYear()} Jeison Ortiz. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
