/*
===========================================
; Title:  berryhill-future-value.js
; Author: Nolan Berryhill
; Date:   02 July 2023
; Description: Applying strings to list in html
;==========================================
*/

import { FinanceCalculator } from './finance-calculator.js';
import { Validator } from './validator.js';

document.addEventListener('DOMContentLoaded', () => {
    const todayElement = document.getElementById('today');
    todayElement.innerHTML = new Date().toLocaleDateString('en-US');

    const calculateButton = document.getElementById('btnCalculate');
    calculateButton.addEventListener('click', () => {
        const monthlyPayment = parseFloat(document.getElementById('txtMonthlyPayment').value);
        const rate = parseFloat(document.getElementById('txtYearlyRate').value);
        const years = parseInt(document.getElementById('listNumOfYears').value);
        const errorLogE1 = document.getElementById('errorLog');
        const errorLog = [];

        const monthlyPaymentValidator = new Validator('Monthly Payment', monthlyPayment);
        monthlyPaymentValidator.addRequiredField();
        monthlyPaymentValidator.addRequiredFloatField();
        monthlyPaymentValidator.addFloatMaxField(100);

        if (!monthlyPaymentValidator.validate()) {
            for (const message of monthlyPaymentValidator.messages) {
                errorLog.push(message);
            }
        }

        if (!rateValidator.validate()) {
            for (const message of rateValidator.messages) {
                errorLog.push(message);
            }
        }

        if (monthlyPaymentValidator.validate() && rateValidator.validate()) {
            errorLogE1.innerHTML = '';
            const futureValue = FinanceCalculator.calculateFutureValue(monthlyPayment, rate, years);
            document.getElementById('futureValue').innerHTML = `Future Value: ${futureValue}`;           
        } else {
            errorLogE1.innerHTML = errorLog.map(message => `<li>${message}</li>`).join('');
        }
    });
});