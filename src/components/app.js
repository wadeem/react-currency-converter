import React from "react";
import PropTypes from "prop-types";

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

            <FeesTable conversionRate={1}
                       destinationCurrency={"EUR"}
                       fee={0.1}
                       originCurrency={"USD"}
                       total={1}
            />
        </div>

    }
}

const ErrorMsg = ({msg}) => {
    if (msg) return <div>{msg}</div>
    return null;
};

const FeesTable = ({originCurrency, fee, total, conversionRate, destinationCurrency}) => {

    return <div>
        <table>
            <tbody>
            <tr>
                <td>Conversion rate</td>
                <td>1 {originCurrency} -> {conversionRate.toFixed(2)} {destinationCurrency}}</td>
            </tr>
            <tr>
                <td>Fee</td>
                <td>{fee.toFixed(2)} {originCurrency}}</td>
            </tr>
            <tr>
                <td className="total-label">Total cost</td>
                <td>{total.toFixed(2)} {originCurrency}</td>
            </tr>
            </tbody>
        </table>
    </div>
};

FeesTable.propTypes = {
    conversionRate: PropTypes.number.isRequired,
    originCurrency: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    destinationCurrency: PropTypes.string.isRequired
};