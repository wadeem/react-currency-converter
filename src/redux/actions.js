export const UPDATE_TOTAL = total => {
    return {
        type: UPDATE_TOTAL,
        total
    };
};

export const UPDATE_FROM_CURRENCY = fromCurr => {
    return {
        type: UPDATE_FROM_CURRENCY,
        fromCurr
    };
};

export const UPDATE_TO_CURRENCY = toCurr => {
    return {
        type: UPDATE_TO_CURRENCY,
        toCurr
    };
};

export const UPDATE_AMOUNT = amount => {
    return {
        type: UPDATE_AMOUNT,
        amount
    };
};