import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import HeaderElement from "./header-element.js";
import FooterElement from "./footer-element.js";
import {footerText, url} from "./constants.js";
import {set_currencies, upd_amount} from "../redux/actions.js"
import {Button, Col, Container, Content, Form, Grid, Input, Item, Picker, Row, Text} from "native-base";


class SimpleCurrencyConverter extends React.Component {

    componentDidMount() {
        console.log("component did mount!");
        axios.get(url).then(result => {
            const list = Object.keys(result.data.rates);
            const currencies = [...list, result.data.base];
            this.props.setCurrencies(currencies);
            console.log(list, this.props.currencies);
        }).catch(e => console.error(e))
    }

    getCurrenciesAsPickerItems = () => {
        return this.props.currencies.map(currency => {
            return <Picker.Item label={currency} value={currency}/>
        });
    };

    render() {
        const {
            topRow, fromCol, toCol, amountCol,
            buttonCol, resultCol, bottomRow, currenciesRow
        } = styles;

        let items = this.getCurrenciesAsPickerItems();
        console.log(items);

        return <Container>
            <HeaderElement>Currency Converter</HeaderElement>
            <Grid>
                <Row size={2} style={topRow}></Row>
                <Row size={0.75} style={currenciesRow}>
                    <Col style={fromCol}>
                        <Form>
                            <Picker mode={"dropdown"} placeholder={"FROM"}
                                    onValueChange={e => console.log(e)}>
                                {items}
                            </Picker>
                        </Form>
                    </Col>
                    <Col style={toCol}>
                        <Form>
                            <Picker placeholder={"TO"} onValueChange={e => console.log(e)}>
                                {items}
                            </Picker>
                        </Form>
                    </Col>
                </Row>
                <Row size={1}>
                    <Col style={amountCol}>
                        <Form>
                            <Item fixedLabel>
                                <Input placeholder={"0.0"} keyboardType='numeric'
                                       onChangeText={(amount = 0.0) => this.props.updateAmount(amount)}
                                       value={this.props.amount.toString()}
                                />
                            </Item>
                        </Form>
                    </Col>
                    <Col style={buttonCol}>
                        <Content>
                            <Button full onPress={e => console.log("you pressed the button")}>
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

const mapStateToProps = (state) => {
    return {
        total: state.total,
        toCurr: state.toCurr,
        fromCurr: state.fromCurr,
        amount: state.amount,
        currencies: state.currencies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTotal: (total) => dispatch(upd_total(total)),
        updateAmount: (amount) => dispatch(upd_amount(amount)),
        updateFromCurr: (fromCurr) => dispatch(upd_from_curr(fromCurr)),
        updateToCurr: (toCurr) => dispatch(upd_to_curr(toCurr)),
        setCurrencies: (currencies) => dispatch(set_currencies(currencies))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SimpleCurrencyConverter);
