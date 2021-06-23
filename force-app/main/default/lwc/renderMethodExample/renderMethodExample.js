import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethodExample.html'

export default class RenderMethodExample extends LightningElement {
    selectedBtn = '';
    render(){
        return this.selectedBtn === 'Signin' ? signinTemplate :
                this.selectedBtn === 'Signup' ? signupTemplate :
                renderTemplate
    }

    handleClick(event) {
        this.selectedBtn = event.target.label
    }
    singupHandler(event){
        console.log(`${event.target.label} succesful!!`)
    }
}