import { LightningElement, track } from 'lwc';

export default class SampleCalculator extends LightningElement {
    firstNumber;
    secondNumber;

    @track
    currentResult;

    numberChangeHandler(event) {
        const { name, value } = event.target;
        if (name === 'firstNumber') {
            this.firstNumber = value;
        } else {
            this.secondNumber = value;
        }
    }

    addHandler() {
        const firstNumber = parseInt(this.firstNumber, 10);
        const secondNumber = parseInt(this.secondNumber, 10);
        this.currentResult = `Result of ${firstNumber} + ${secondNumber} is ${firstNumber +
            secondNumber};`;
    }

    subtractHandler() {
        const firstNumber = parseInt(this.firstNumber, 10);
        const secondNumber = parseInt(this.secondNumber, 10);
        this.currentResult = `Result of ${firstNumber} - ${secondNumber} is ${firstNumber -
            secondNumber};`;
    }

    multiplyHandler() {
        const firstNumber = parseInt(this.firstNumber, 10);
        const secondNumber = parseInt(this.secondNumber, 10);
        this.currentResult = `Result of ${firstNumber} * ${secondNumber} is ${firstNumber *
            secondNumber};`;
    }

    divideHandler() {
        const firstNumber = parseInt(this.firstNumber, 10);
        const secondNumber = parseInt(this.secondNumber, 10);
        this.currentResult = `Result of ${firstNumber} % ${secondNumber} is ${firstNumber /
            secondNumber};`;
    }
}
