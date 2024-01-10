//  import { LightningElement, track } from 'lwc';
//     export default class razorpay extends LightningElement {
//     renderedCallback() {
//         if (!this.paymentScriptLoaded) {
//             this.loadRazorpayScript();
//         }
//     }

//     @track paymentScriptLoaded = false;

//     loadRazorpayScript() {
//         const script = document.createElement('script');
//         script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
//         script.setAttribute('data-payment_button_id', 'pl_NDknEUrpqkgLou');
//         script.async = true;

//         script.onload = () => {
          
//             this.paymentScriptLoaded = true;
//         };

//         document.body.appendChild(script);
//     }
// // }

// import { LightningElement } from 'lwc';
// import { loadScript } from 'lightning/platformResourceLoader';
// import razorpayScript from '@salesforce/resourceUrl/Moment';

// export default class razorpay extends LightningElement {
//     // renderedCallback() {
//     //     // Load the Razorpay script
//     //     if (!this.paymentScriptLoaded) {
//     //         this.loadRazorpayScript();
//     //     }
//     // }

//     // paymentScriptLoaded = false;

//     // loadRazorpayScript() {
//     //     loadScript(this, razorpayScript)
//     //         .then(() => {
//     //             console.log(razorpayScript)
//     //             // Script loaded successfully
//     //             this.paymentScriptLoaded = true;
//     //             // Now you can initialize Razorpay or perform other actions
//     //         })
//     //         .catch(error => {
//     //             // Handle errors if the script fails to load
//     //             console.error('Error loading Razorpay script:', error);
//     //         });
//     // }

//     currentDate =''
//     isLoaded = false
//     renderedCallback(){
//         if(this.isLoaded){
//             return
//         }
//         else
//         {
// loadScript(this,razorpayScript+ '/moment.js').then(()=>{
//     this.setDateOnScreen()
// }).catch(error=>{
//     console.error(error)
// })
// this.isLoaded= true 
//         }
//     }
//     setDateOnScreen(){
//         this.currentDate= moment().format('LLLL');
//     }
// }
// YourLWC.js (Lightning Web Component)

import { LightningElement } from 'lwc';

export default class YourLWC extends LightningElement {
    iframeSrc = '';

    // Other methods or variables you might have...
}
