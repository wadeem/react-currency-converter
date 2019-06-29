import React from "react";
import {Footer, Text} from "native-base";

const FooterElement = ({children}) => {

    return <Footer style={style.viewStyle}>
        <Text style={style.textStyle}>{children}</Text>
    </Footer>
};

export default FooterElement;

const style = {

    textStyle: {
        color: "#fff",
        fontSize: 14,
        marginLeft: 15,
        marginRight: 15,
        textAlign: "center"
    },
    viewStyle: {}

};
