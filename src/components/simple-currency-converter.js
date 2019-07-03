import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import HeaderElement from "./header-element.js";
import FooterElement from "./footer-element.js";
import {footerText, url} from "./constants.js";
import {Button, Col, Container, Content, Form, Grid, Input, Item, Picker, Row, Text} from "native-base";


class SimpleCurrencyConverter extends React.Component {

    componentDidMount() {
        console.log("component did mount!");
        axios.get(url).then(result => {
            const list = Object.keys(result.data.rates);
            const currencies = [...list, result.data.base];
            console.log(list, currencies);
        }).catch(e => console.error(e))
    }

    render() {
        const {
            topRow, fromCol, toCol, amountCol,
            buttonCol, resultCol, bottomRow, currenciesRow
        } = styles;

        return <Container>
            <HeaderElement>Currency Converter</HeaderElement>
            <Grid>
                <Row size={2} style={topRow}></Row>
                <Row size={0.75} style={currenciesRow}>
                    <Col style={fromCol}>
                        <Form>
                            <Picker mode={"dropdown"} placeholder={"FROM"} onValueChange={e => console.log(e)}>
                                <Picker.Item label="EUR" value="key0"/>
                                <Picker.Item label="USD" value="key1"/>
                            </Picker>
                        </Form>
                    </Col>
                    <Col style={toCol}>
                        <Form>
                            <Picker placeholder={"TO"} onValueChange={e => console.log(e)}>
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
                                <Input placeholder={"Amount"} keyboardType='numeric' onChange={e => console.log(e)}/>
                            </Item>
                        </Form>
                    </Col>
                    <Col style={buttonCol}>
                        <Content>
                            <Button full onPress={e => console.log(e)}>
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
        </Container>
    }
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

export default connect()(SimpleCurrencyConverter);
