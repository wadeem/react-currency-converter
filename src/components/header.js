import React from "react";

const Header = (props) => {

    return <div className="container">
            <div className="header"><h1>{props.children}</h1></div>
    </div>;
};

export default Header;