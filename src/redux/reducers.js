import {UPDATE_TOTAL, UPDATE_AMOUNT, UPDATE_FROM_CURRENCY, UPDATE_TO_CURRENCY} from "./actions.js";

export const reducer = (state, action) => {

    switch (action) {

        case UPDATE_TOTAL : {
            return {total: action.total};
        }

        case UPDATE_AMOUNT : {
            return {amount: action.amount};
        }

        case UPDATE_FROM_CURRENCY : {
            return {fromCurr: action.fromCurr};
        }

        case UPDATE_TO_CURRENCY: {
            return {toCurr: action.toCurr};
        }

        default:
            return state;
    }

};