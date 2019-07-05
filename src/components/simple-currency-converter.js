import React from "react";
import {connect} from "react-redux";
import {Alert} from "react-native";
import HeaderElement from "./ui-elements/header-element.js";
import FooterElement from "./ui-elements/footer-element.js";
import {footerText, url} from "./constants.js";
import {set_currencies, upd_amount, upd_from_curr, upd_to_curr, upd_total} from "../redux/actions.js"
import {Button, Col, Container, Content, Form, Grid, Input, Item, Picker, Row, Text} from "native-base";
import styles from "./ui-elements/styles.js";
import getRate from "./service.js";

class SimpleCurrencyConverter extends React.Component {

    componentDidMount() {
        console.log("component did mount!");
        this.getListOfCurrencies(url)
            .then(currencies => this.props.setCurrencies(currencies))
            .catch(e => Alert.alert(e.message));
        console.log(this.props.currencies);
    }

    async getListOfCurrencies(url) {
        const response = await fetch(url);
        const result = await response.json();
        const list = Object.keys(result.rates);
        const currencies = [...list, result.base];

        if (response.status !== 200) throw Error(result.message);
        return currencies;
    }

    getCurrenciesAsPickerItems = () => {
        return this.props.currencies.map(currency => {
            return <Picker.Item label={currency} value={currency} key={currency} itemStyle={styles.picker}/>
        });
    };


    renderTotal = () => {
        if (this.props.total) return <Text
            style={styles.result}>Result: {this.props.total} {this.props.toCurr} </Text>
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
                                    itemStyle={styles.picker}>
                                {items}
                            </Picker>
                        </Form>
                    </Col>
                    <Col style={toCol}>
                        <Form>
                            <Picker placeholder={"TO"}
                                    onValueChange={curr => this.props.updateToCurr(curr)}
                                    selectedValue={this.props.toCurr}
                                    style={styles.picker}
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
                                       style={styles.amount}
                                />
                            </Item>
                        </Form>
                    </Col>
                    <Col style={buttonCol}>
                        <Content>
                            <Button full onPress={() => getRate(this.props)}>
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
}
;


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
