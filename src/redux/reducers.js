import {UPDATE_TOTAL, UPDATE_AMOUNT, UPDATE_FROM_CURRENCY, UPDATE_TO_CURRENCY} from "./actions.js";

export const reducer = (state, action) => {

    if (state === undefined) state = {fromCurr: "EUR", toCurr: "USD", amount: 1.0}

    switch (action) {

        case UPDATE_TOTAL : {
            return {...state, total: action.total};
        }

        case UPDATE_AMOUNT : {
            return {...state, amount: action.amount};
        }

        case UPDATE_FROM_CURRENCY : {
            return {...state, fromCurr: action.fromCurr};
        }

        case UPDATE_TO_CURRENCY: {
            return {...state, toCurr: action.toCurr};
        }

        default:
            return state;
    }

};