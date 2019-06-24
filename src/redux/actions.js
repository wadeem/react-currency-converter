import {UPDATE_TOTAL, UPDATE_FROM_CURR, UPDATE_TO_CURR, UPDATE_AMOUNT, SET_CURRENCIES}
    from "./action-constants.js";

const upd_total = total => {
    return {
        type: UPDATE_TOTAL,
        total
    };
};

const upd_from_curr = fromCurr => {
    return {
        type: UPDATE_FROM_CURR,
        fromCurr
    };
};

const upd_to_curr = toCurr => {
    return {
        type: UPDATE_TO_CURR,
        toCurr
    };
};

const upd_amount = amount => {
    return {
        type: UPDATE_AMOUNT,
        amount
    };
};

const set_currencies = currencies => {
    return {
        type: SET_CURRENCIES,
        currencies
    };
};