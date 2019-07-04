import axios from "axios";
import {url} from "./constants";

const getRate = async (props) => {
    console.log("get rate");
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.rates);
    calculate(result.rates,props);
};

const calculate = (rates,props) => {
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
    console.log("total: ", props.total)
};

export default getRate;
