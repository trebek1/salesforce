import { LightningElement } from 'lwc';

export default class LifecycleDemo extends LightningElement {
    constructor() {
        super();
        console.log('phase1: constructor');
    }

    connectedCallback() {
        console.log('phase2: connected callback');
    }

    renderedCallback() {
        console.log('phase3: rendered callback');
    }

    disconnectedCallback() {
        console.log('phase4: disconnected callback');
    }
}
