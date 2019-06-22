export const UPDATE_TOTAL = (total) => {
    return {
        type: UPDATE_TOTAL,
        payload: total
    };
};

export const UPDATE_FROM_CURRENCY = (fromCurr) => {
    return {
        type: UPDATE_FROM_CURRENCY,
        payload: fromCurr
    }
};

export const UPDATE_TO_CURRENCY = (toCurr) => {
    return {
        type: UPDATE_TO_CURRENCY,
        payload: toCurr
    };
};

export const UPDATE_FROM_AMOUNT = (amount) => {
    return {
        type: UPDATE_FROM_AMOUNT,
        payload: amount
    };
};