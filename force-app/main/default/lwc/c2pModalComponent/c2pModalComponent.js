import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    okHandler(){
        const closeEvnt = new CustomEvent('close', {
            bubbles: true,
            detail: {
                msg:"Modal Closed Successfully!!"
            }
        })
        this.dispatchEvent(closeEvnt)
    }
    footerHandler(){
        console.log("footerHandler called")
    }
}