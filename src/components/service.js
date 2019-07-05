import {Alert} from "react-native";
import {url} from "./constants";


export const getListOfCurrencies = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    const list = Object.keys(result.rates);
    const currencies = [...list, result.base];

    if (response.status !== 200) throw Error(result.message);
    return currencies;
};

export const convert = (props) => {
    getRate()
        .then(rates => calculate(rates, props))
        .catch(e => Alert.alert(e));
};

const getRate = async () => {
    console.log("get rate");
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.rates);
    if (response.status !== 200) throw Error(result.message);

    return result.rates;
    // calculate(result.rates, props);
};

const calculate = (rates, props) => {
    console.log("calculate")
    let from = 1, to = 1, total;
    Object.keys(rates).map(key => {
        if (key === props.fromCurr) {
            from = rates[key];
        } else if (key === props.toCurr) {
            to = rates[key];
        }
    });
    total = props.amount / from * to;
    props.updateTotal(parseFloat(total).toFixed(2));
    console.log("total: ", total)
};
