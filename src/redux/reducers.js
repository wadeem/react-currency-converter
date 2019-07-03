import {SET_CURRENCIES, UPDATE_AMOUNT, UPDATE_FROM_CURR, UPDATE_TO_CURR, UPDATE_TOTAL} from "./action-constants.js";

const reducer = (state, action) => {
    if (state === undefined) state =
        {fromCurr: "EUR", toCurr: "USD", amount: 1.0, currencies: []};

    switch (action.type) {

        case UPDATE_TOTAL : {
            return {...state, total: action.total};
        }

        case UPDATE_AMOUNT : {
            return {...state, amount: action.amount};
        }

        case UPDATE_FROM_CURR : {
            return {...state, fromCurr: action.fromCurr, total: null};
        }

        case UPDATE_TO_CURR: {
            return {...state, toCurr: action.toCurr, total: null};
        }

        case SET_CURRENCIES: {
            return {...state, currencies: action.currencies};
        }

        default:
            return state;
    }
};

export default reducer;
