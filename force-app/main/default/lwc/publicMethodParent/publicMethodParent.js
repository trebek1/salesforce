import { LightningElement, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track
    value;

    checkboxSelectHandler() {
        const childComponent = this.template.querySelector(
            'c-public-method-child'
        );
        const returnedMessage = childComponent.selectCheckBox(this.value);
        console.log('what is returned ', returnedMessage);
    }

    onInputChangeHandler(event) {
        this.value = event.target.value;
    }
}
