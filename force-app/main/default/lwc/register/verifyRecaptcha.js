import { LightningElement, wire } from 'lwc';

import verifyRecaptcha from '@salesforce/apex/RecaptchaDemo.insertRecord';

export default class V2InvisibleDemoLWC extends LightningElement {
    connectedCallback() {
        document.addEventListener("grecaptchaVerified", function(e) {
            verifyRecaptcha({ record: null, //TODO: map UI fields to sobject
                recaptchaResponse: e.detail.response})
                .then(result => {
                    document.dispatchEvent(new Event("grecaptchaReset"));
                    alert(result);
                })
                .catch(error => {
                    console.log(this.error);
                });
        });
    }

    renderedCallback() {
        var divElement = this.template.querySelector('div.recaptchaInvisible');
        //valide values for badge: bottomright bottomleft inline
        var payload = {element: divElement, badge: 'bottomright'};
        document.dispatchEvent(new CustomEvent("grecaptchaRender", {"detail": payload}));
    }

    doSubmit(evt){
        document.dispatchEvent(new Event("grecaptchaExecute"));
    }
}