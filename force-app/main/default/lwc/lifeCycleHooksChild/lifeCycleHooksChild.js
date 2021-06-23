import { LightningElement } from 'lwc';

export default class LifeCycleHooksChild extends LightningElement {

    constructor() {
        super()
        console.log('Child constructor called')
    }
    connectedCallback(){
        console.log('Child connectedCallback called')
        throw new Error('Child component loding failed')
    }
    renderedCallback(){
        console.log('Child renderedCallback called')
    }
    disconnectedCallback(){
        alert('disconnectedCallback child')
    }
}