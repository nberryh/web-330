/*
===========================================
; Title:  finance-calculator.js
; Author: Nolan Berryhill
; Date:   02 July 2023
; Description: Applying strings to list in html
;==========================================
*/

//Define the FinanceCalculator class and allows for export
export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years) {
        const months = years * this.MONTHS_IN_YEAR;
        const interestRate = 1 + rate / 100;
        const presentValue = monthlyPayment * months;
        const futureValue = presentValue * Math.pow(interestRate, months);
        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        const currencyFormatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        
        return currencyFormatter.format(field);
    }
}