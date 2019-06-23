import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Header from "./header.js";
import Footer from "./footer.js";

class SimpleConverter extends React.Component {

    state = {
        // amount: 1.0,
        // fromCurr: "EUR",
        // toCurr: "USD",
        // total: undefined,
        currencies: []
    };

    url = "https://api.exchangeratesapi.io/latest";

    componentDidMount() {
        axios.get(this.url)
            .then((result) => {
                const list = Object.keys(result.data.rates);
                const currencies = [...list, result.data.base];
                this.setState({currencies: currencies})
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
        this.setState({total: parseFloat(total).toFixed(2)})
    };

    getRate = (calculate) => {
        const promise = axios.get(this.url).then(result => {
            return result.data.rates;
        }).catch(e => console.error(e));

        promise.then((r) => calculate(r))
    };

    amountHandler = (event = 0) => {
        this.setState({amount: event.target.value});
    };

    getCurrenciesAsOption = () => {
        return this.state.currencies.map(currency => {
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
                    this.setState({fromCurr: event.target.value, total: null})
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
                    this.setState({toCurr: event.target.value, total: null});
                }}
                        value={this.props.toCurr}
                        className="form-control selector"
                >
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
        amount: state.amount
    }
};

export default connect(mapStateToProps)(SimpleConverter);
