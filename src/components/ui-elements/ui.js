import React from "react";
import {Button, Col, Content, Form, Grid, Input,
    Item, Picker, Row, Text} from "native-base";

import {getRate,calculate} from "../service.js";

const getCurrenciesAsPickerItems = (props) => {
    return props.currencies.map(currency => {
        return <Picker.Item label={currency} value={currency} key={currency}/>
    });
};


const renderTotal = (props) => {
    if (props.total) return <Text
        style={styles.text.result}>Result: {props.total} {props.toCurr} </Text>
};
const UI = ({props}) => {

    const {
        topRow, fromCol, toCol, amountCol,
        buttonCol, resultCol, bottomRow, currenciesRow, text
    } = styles;

    const items = getCurrenciesAsPickerItems(props);

    return <Grid>
        <Row size={2} style={topRow}></Row>
        <Row size={0.75} style={currenciesRow}>
            <Col style={fromCol}>
                <Form>
                    <Picker mode={"dropdown"} placeholder={"FROM"}
                            onValueChange={curr => props.updateFromCurr(curr)}
                            selectedValue={props.fromCurr}
                            style={text.picker}>
                        {items}
                    </Picker>
                </Form>
            </Col>
            <Col style={toCol}>
                <Form>
                    <Picker placeholder={"TO"}
                            onValueChange={curr => props.updateToCurr(curr)}
                            selectedValue={props.toCurr}
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
                               onChangeText={(amount = 0.0) => props.updateAmount(amount)}
                               value={props.amount.toString()}
                               style={text.amount}
                        />
                    </Item>
                </Form>
            </Col>
            <Col style={buttonCol}>
                <Content>
                    <Button full onPress={() => getRate(calculate)}>
                        <Text style={text.button}>Convert!</Text>
                    </Button>
                </Content>
            </Col>
        </Row>
        <Row size={1}>
            <Col style={resultCol}>{renderTotal(props)}</Col>
        </Row>
        <Row size={2} style={bottomRow}></Row>
    </Grid>

};

export default UI;

// const styles = {
//     topRow: {backgroundColor: "#06ffaf"},
//     currenciesRow: {paddingBottom: 0},
//     fromCol: {backgroundColor: "#fff16c"},
//     toCol: {backgroundColor: "#a4a2ff"},
//     amountCol: {backgroundColor: "#ffffff", marginLeft: -12},
//     buttonCol: {backgroundColor: "#ff6776", width: 120},
//     resultCol: {backgroundColor: "#db47ff", paddingTop: 10, paddingLeft: 10},
//     bottomRow: {backgroundColor: "#06ffaf"},
//     text: {
//         result: {fontSize: 25},
//         button: {fontSize: 17},
//         picker: {fontSize: 25},
//         amount: {fontSize: 22}
//     }
// };
