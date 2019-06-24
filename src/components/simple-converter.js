import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Header from "./header.js";
import Footer from "./footer.js";
import {
    UPDATE_AMOUNT, UPDATE_TOTAL, UPDATE_FROM_CURR, UPDATE_TO_CURR, SET_CURRENCIES
} from "../redux/action-constants.js";

class SimpleConverter extends React.Component {

    url = "https://api.exchangeratesapi.io/latest";

    componentDidMount() {
        axios.get(this.url)
            .then((result) => {
                const list = Object.keys(result.data.rates);
                const currencies = [...list, result.data.base];
                this.props.setCurrencies(currencies)
            })
            .catch((e) => console.error(e));
    }

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
    };

    getRate = (calculate) => {
        const promise = axios.get(this.url).then(result => {
            return result.data.rates;
        }).catch(e => console.error(e));

        promise.then((r) => calculate(r))
    };

    amountHandler = (event = 0) => {
        this.props.updateAmount(event.target.value);
    };

    getCurrenciesAsOption = () => {
        console.log(this.props.currencies)
        return this.props.currencies.map(currency => {
            return <option key={currency} className="to-curr">{currency}</option>
        });
    };

    renderTotal = () => {
        if (this.props.total) return <div className="input-group total-container
        d-flex justify-content-center">
            <h2>Total: {this.props.total} {this.props.toCurr}</h2>
        </div>
    };

    render() {
        const options = this.getCurrenciesAsOption();

        return <div className="container">
            <Header>Currency Exchange</Header>
            <div className="input-group converter d-flex justify-content-center">
                <select onChange={(event) => {
                    this.props.updateFromCurr(event.target.value);
                }}
                        value={this.props.fromCurr}
                        className="form-control selector">
                    {options}
                </select>
                <div className="input-group-prepend">
                    <span className="input-group-text">Amount:</span>
                </div>
                <input type="number"
                       id="fromAmount"
                       className="form-control amount-input"
                       placeholder={0.0}
                       onChange={(event) => this.amountHandler(event)}
                       value={this.props.amount}
                />

                <select onChange={(event) => {
                    console.log(event.target.value);
                    this.props.updateToCurr(event.target.value);
                }}
                        value={this.props.toCurr}
                        className="form-control selector">
                    {options}
                </select>
                <button onClick={() => this.getRate(this.calculate)}
                        className="btn btn-primary btn-sm">Calculate
                </button>
                <div/>
                {this.renderTotal()}
            </div>
            <Footer>Current exchange rate is based upon foreign currency exchange
                rate of European Central Bank</Footer>
        </div>
    }
}

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
        updateTotal: (total) => dispatch({type: UPDATE_TOTAL, total}),
        updateAmount: (amount) => dispatch({type: UPDATE_AMOUNT, amount}),
        updateFromCurr: (fromCurr) => dispatch({type: UPDATE_FROM_CURR, fromCurr}),
        updateToCurr: (toCurr) => dispatch({type: UPDATE_TO_CURR, toCurr}),
        setCurrencies: (currencies) => dispatch({type: SET_CURRENCIES, currencies})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleConverter);
