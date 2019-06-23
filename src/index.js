import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./redux/reducers.js";
import SimpleConverter from "./components/simple-converter.js";


const el = document.getElementById("root");
ReactDOM.render(<Provider store={createStore(reducer)}>
    <SimpleConverter/>
</Provider>, el);