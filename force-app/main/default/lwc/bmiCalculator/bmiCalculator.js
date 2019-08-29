import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calc ';

    changePrivateProperty() {
        this.cardTitle = 'chaangedVaalue';
        console.log('this.cardTitle ', this.cardTitle);
    }
}
