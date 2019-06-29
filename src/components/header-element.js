import React from "react";
import {Header, Body, Left, Right, Title} from "native-base";

const HeaderElement = ({children}) => {

    return <Header>
        <Left style={{flex: 1}}/>
        <Body style={{flex: 2}}>
            <Title style={{alignSelf: "center"}}>{children}</Title>
        </Body>
        <Right style={{flex: 1}}/>
    </Header>
};

export default HeaderElement;