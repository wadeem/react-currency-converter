import PropTypes from "prop-types";
import React from "react";

const FeesTable = ({originCurrency, fee, total, conversionRate, destinationCurrency}) => {

    return <div>
        <table>
            <tbody>
            <tr>
                <td>Conversion rate</td>
                <td>1 {originCurrency} -> {conversionRate.toFixed(2)} {destinationCurrency}</td>
            </tr>
            <tr>
                <td>Fee</td>
                <td>{fee.toFixed(2)} {originCurrency}</td>
            </tr>
            <tr>
                <td className="total-label">Total cost</td>
                <td>{total.toFixed(2)} {originCurrency}</td>
            </tr>
            </tbody>
        </table>
    </div>
};

FeesTable.propTypes = {
    conversionRate: PropTypes.number.isRequired,
    originCurrency: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    destinationCurrency: PropTypes.string.isRequired
};

export default FeesTable;