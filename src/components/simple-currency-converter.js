import React from "react";
import HeaderElement from "./header-element.js";
import FooterElement from "./footer-element.js";
import {footerText} from "./constants.js";
import {Container, Content, Text} from "native-base";

const SimpleCurrencyConverter = () => {

    return <Container>
        <HeaderElement>Currency Converter</HeaderElement>
        <Content>
            <Text>Hello React!</Text>
        </Content>
        <FooterElement>{footerText}</FooterElement>
    </Container>
};

export default SimpleCurrencyConverter;