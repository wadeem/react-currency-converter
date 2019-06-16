import React from "react";

const ErrorMsg = ({msg}) => {
    if (msg) return <div>{msg}</div>
    return null;
};

export default ErrorMsg;