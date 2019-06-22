import React from "react";

const Footer = ({children}) => {
    return <div className="row fixed-bottom">
        <div className="footer-text col col-md">{children}</div>
    </div>
};

export default Footer;