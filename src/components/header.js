import React from "react";

const Header = ({children}) => {

    return <div className="row">
        <div className="col col-md header">
            <h2>{children}</h2>
        </div>
    </div>
};

export default Header;