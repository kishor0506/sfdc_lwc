import { LightningElement } from 'lwc';




import { NavigationMixin } from 'lightning/navigation';

export default class Digilocker extends NavigationMixin(LightningElement) {
    handleButtonClick() {
        // Define the URL you want to redirect to
        const url = 'https://www.digilocker.gov.in/'; // Replace with your desired URL
        
        // Navigate to the URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url
            }
        });
    }
}