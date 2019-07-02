import React from "react";
import HeaderElement from "./header-element.js";
import FooterElement from "./footer-element.js";
import {footerText} from "./constants.js";
import {Body, Card, CardItem, Container, Content, Text} from "native-base";

const SimpleCurrencyConverter = () => {

    return <Container>
        <HeaderElement>Currency Converter</HeaderElement>
        <Content>
            <Card>
                <CardItem>
                    <Body>
                        <Text>Hello React!</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
        <FooterElement>{footerText}</FooterElement>
    </Container>
};

export default SimpleCurrencyConverter;