import React from "react";
import FeesTable from "./fees-table.js";
import ErrorMsg from "./error-msg.js";

export default class App extends React.Component {

    state = {
        originAmount: "0.00",
        originCurrency: "USD",
        destinationCurrency: "EUR",
        destinationAmount: "0.00",
        feeAmount: 0.00,
        conversionRate: 1.5,
        totalCost: 0.00,
        errorMsg: ""
    };

    handleOriginAmountChange = () => {
    }
    handleDestAmountChange = () => {
    }
    handleOriginCurrencyChange = (origin) => {
    }
    handleDestCurrencyChange = (destination) => {
    }
    handleAjaxFailure = () => {
    }

    render() {

        return <div>

            <ErrorMsg msg={this.state.errorMsg}/>
            <CurrencyInput/>

            <FeesTable conversionRate={1}
                       destinationCurrency={"EUR"}
                       fee={0.1}
                       originCurrency={"USD"}
                       total={1}
            />
        </div>

    }
}

const CurrencyInput = ({originAmount, destAmount, originCurrency, destCurrency}) => {

    return <div>
        <label>Convert</label>
        <input type="number"
               id="originAmount"
               placeholder={0.0} onChange={(event) => console.log(event.target.value)}/>
        <select onChange={(event) => console.log(event.target.value)}>
            <option>USD</option>
            <option>EUR</option>
            <option>JPY</option>
        </select>
        <input type="number"
               id="dstAmount"
               placeholder={0.0} onChange={(event) => console.log(event.target.value)}/>
        <select onChange={(event) => console.log(event.target.value)}>
            <option>USD</option>
            <option selected>EUR</option>
            <option>JPY</option>
        </select>
    </div>


};

