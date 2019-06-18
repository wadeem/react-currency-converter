import React from "react";
import axios from "axios";

export default class SimpleConverter extends React.Component {

    state = {
        amount: 1.0,
        fromCurr: "",
        toCurr: "",
        currencies: [],
        total: undefined,
    };

    url = "https://api.exchangeratesapi.io/latest";

    componentDidMount() {

        axios.get(this.url)
            .then((result) => {
                // console.log(result);
                const list = Object.keys(result.data.rates);
                const currencies = [...list, result.data.base];
                console.log("curr", currencies);
                this.setState({currencies: currencies})
            })
            .catch((e) => console.error(e));
    }

    calculate = (r) => {
        let from = 1, to = 1, total;

        Object.keys(r).map((k) => {
            if (k === this.state.fromCurr) {
                from = r[k];
            } else if (k === this.state.toCurr) {
                to = r[k];
            }
        });

        total = this.state.amount / from * to;
        this.setState({total: parseFloat(total).toFixed(2)})
    };

    getRate = () => {
        const promise = axios.get(this.url).then(result => {
            return result.data.rates;
        }).catch(e => console.error(e));

        promise.then((r) => this.calculate(r))
    };

    amountHandler = (event = 0) => {
        const amount = event.target.value;
        this.setState(() => {
            console.log(amount);
            return {
                amount: amount
            }
        })
    };

    getCurrenciesAsOption = () => {
        return this.state.currencies.map(currency => {
            return <option key={currency}>{currency}</option>
        });
    };

    render() {

        const options = this.getCurrenciesAsOption();
        // console.log(options)

        return <div>
            <select onChange={(event) => {
                this.setState({fromCurr: event.target.value})
                console.log("from", event.target.value);
            }}
                    value={this.state.fromCurr}>
                {options}
            </select>
            <input type="number"
                   id="fromAmount"
                   placeholder={0.0}
                   onChange={(event) => this.amountHandler(event)}
                   value={this.state.amount}
            />

            <select onChange={(event) => {
                this.setState({toCurr: event.target.value});
                console.log("to", event.target.value)
            }}
                    value={this.state.toCurr}>
                {options}
            </select>
            <button onClick={() => this.getRate()}>Calculate</button>
            <h2>{this.state.total} {this.state.toCurr}</h2>
        </div>
    }
}