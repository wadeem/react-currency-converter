import React from "react";
import HeaderElement from "./header-element.js";
import FooterElement from "./footer-element.js";
import {footerText} from "./constants.js";
import {Col, Container, Grid, Row} from "native-base";

const SimpleCurrencyConverter = () => {

    const {
        topRow, fromCol, toCol, amountCol,
        buttonCol, resultCol, bottomRow
    } = styles;

    return <Container>
        <HeaderElement>Currency Converter</HeaderElement>
        <Grid>
            <Row size={2} style={topRow}></Row>
            <Row size={1}>
                <Col style={fromCol}></Col>
                <Col style={toCol}></Col>
            </Row>
            <Row size={2}>
                <Col style={amountCol}></Col>
                <Col style={buttonCol}></Col>
            </Row>
            <Row size={1}>
                <Col style={resultCol}></Col>
            </Row>
            <Row size={2} style={bottomRow}></Row>
        </Grid>
        <FooterElement>{footerText}</FooterElement>
    </Container>
};

const styles = {
    topRow: {backgroundColor: "#06ffaf"},
    fromCol: {backgroundColor: "#fff16c"},
    toCol: {backgroundColor: "#a4a2ff"},
    amountCol: {backgroundColor: "#ffffff"},
    buttonCol: {backgroundColor: "#ff6776", width: 120},
    resultCol: {backgroundColor: "#db47ff"},
    bottomRow: {backgroundColor: "#06ffaf"}
};

export default SimpleCurrencyConverter;