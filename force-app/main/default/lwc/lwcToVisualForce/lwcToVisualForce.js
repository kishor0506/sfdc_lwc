import { LightningElement } from "lwc";
export default class LwcToVisualForce extends LightningElement {
    siteURL;
 
    connectedCallback() {
       
        this.siteURL = '/apex/RazorTestVF';
 
    }
   
}