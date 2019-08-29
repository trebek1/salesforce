import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track
    value = 'blu';

    options = [
        { label: 'red marker', value: 'red' },
        { label: 'yellow marker', value: 'yellow' },
        { label: 'green marker', value: 'green' },
        { label: 'blue marker', value: 'blu' }
    ];

    @api
    selectCheckBox(checkboxValue) {
        const selectedCheckbox = this.options.find(
            checkbox => checkboxValue === checkbox.value
        );
        if (selectedCheckbox) {
            this.value = selectedCheckbox.value;
            return 'success!';
        }
        return 'no checkbox found';
    }
}
