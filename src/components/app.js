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
    handleDestinationAmountChange = () => {
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
            <label>Convert</label>&nbsp;


            <FeesTable conversionRate={1}
                       destinationCurrency={"EUR"}
                       fee={0.1}
                       originCurrency={"USD"}
                       total={1}
            />
        </div>

    }
}

