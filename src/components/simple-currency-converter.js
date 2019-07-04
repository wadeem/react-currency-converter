import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import HeaderElement from "./ui-elements/header-element.js";
import FooterElement from "./ui-elements/footer-element.js";
import {footerText, url} from "./constants.js";
import {set_currencies, upd_amount, upd_from_curr, upd_to_curr, upd_total} from "../redux/actions.js"
import {Button, Col, Container, Content, Form, Grid, Input, Item, Picker, Row, Text} from "native-base";
import styles from "./ui-elements/styles.js";

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
            return <Picker.Item label={currency} value={currency} key={currency}/>
        });
    };

    calculate = (rates) => {
        let from = 1, to = 1, total;

        Object.keys(rates).map(key => {
            if (key === this.props.fromCurr) {
                from = rates[key];
            } else if (key === this.props.toCurr) {
                to = rates[key];
            }
        });
        total = this.props.amount / from * to;
        this.props.updateTotal(parseFloat(total).toFixed(2));
        console.log("total: ", this.props.total)
    };

    getRate = (calculate) => {
        console.log("get rate");
        const promise = axios.get(url).then(result => {
            return result.data.rates;
        }).catch(e => console.error(e));

        promise.then((r) => calculate(r))
    };

    renderTotal = () => {
        if (this.props.total) return <Text
            style={styles.text.result}>Result: {this.props.total} {this.props.toCurr} </Text>
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
                                    onValueChange={curr => this.props.updateFromCurr(curr)}
                                    selectedValue={this.props.fromCurr}
                                    style={styles.text.picker}>
                                {items}
                            </Picker>
                        </Form>
                    </Col>
                    <Col style={toCol}>
                        <Form>
                            <Picker placeholder={"TO"}
                                    onValueChange={curr => this.props.updateToCurr(curr)}
                                    selectedValue={this.props.toCurr}
                            >
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
                                       style={styles.text.amount}
                                />
                            </Item>
                        </Form>
                    </Col>
                    <Col style={buttonCol}>
                        <Content>
                            <Button full onPress={() => this.getRate(this.calculate)}>
                                <Text style={styles.text.button}>Convert!</Text>
                            </Button>
                        </Content>
                    </Col>
                </Row>
                <Row size={1}>
                    <Col style={resultCol}>{this.renderTotal()}</Col>
                </Row>
                <Row size={2} style={bottomRow}></Row>
            </Grid>
            <FooterElement>{footerText}</FooterElement>
        </Container>
    }
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
