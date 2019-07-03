import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "../redux/reducers.js";
import HeaderElement from "./header-element.js";
import FooterElement from "./footer-element.js";
import {footerText} from "./constants.js";
import {
    Button, Col, Container, Content, Form, Grid, Input, Item, Row, Text
    , Picker
} from "native-base";

const SimpleCurrencyConverter = () => {

    const {
        topRow, fromCol, toCol, amountCol,
        buttonCol, resultCol, bottomRow, currenciesRow
    } = styles;

    return <Provider store={createStore(reducer)}><Container>
        <HeaderElement>Currency Converter</HeaderElement>
        <Grid>
            <Row size={2} style={topRow}></Row>
            <Row size={0.75} style={currenciesRow}>
                <Col style={fromCol}>
                    <Form>
                        <Picker mode={"dropdown"} placeholder={"FROM"}>
                            <Picker.Item label="EUR" value="key0"/>
                            <Picker.Item label="USD" value="key1"/>
                        </Picker>
                    </Form>
                </Col>
                <Col style={toCol}>
                    <Form>
                        <Picker placeholder={"TO"}>
                            <Picker.Item label={"USD"} value={"key1"}/>
                            <Picker.Item label={"EUR"} value={"key0"}/>
                        </Picker>
                    </Form>
                </Col>
            </Row>
            <Row size={1}>
                <Col style={amountCol}>
                    <Form>
                        <Item fixedLabel>
                            <Input placeholder={"Amount"} keyboardType='numeric'/>
                        </Item>
                    </Form>
                </Col>
                <Col style={buttonCol}>
                    <Content>
                        <Button full>
                            <Text>Convert!</Text>
                        </Button>
                    </Content>
                </Col>
            </Row>
            <Row size={1}>
                <Col style={resultCol}><Text>Result: </Text></Col>
            </Row>
            <Row size={2} style={bottomRow}></Row>
        </Grid>
        <FooterElement>{footerText}</FooterElement>
    </Container></Provider>
};

const styles = {
    topRow: {backgroundColor: "#06ffaf"},
    currenciesRow: {paddingBottom: 10},
    fromCol: {backgroundColor: "#fff16c"},
    toCol: {backgroundColor: "#a4a2ff"},
    amountCol: {backgroundColor: "#ffffff"},
    buttonCol: {backgroundColor: "#ff6776", width: 120},
    resultCol: {backgroundColor: "#db47ff"},
    bottomRow: {backgroundColor: "#06ffaf"}
};

export default SimpleCurrencyConverter;