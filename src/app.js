import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import SimpleCurrencyConverter from "./components/simple-currency-converter.js";
import reducer from "./redux/reducers.js";

const store = createStore(reducer);

const App = () => {
    return <Provider store={store}>
        <SimpleCurrencyConverter/>
    </Provider>
};

export default App;
