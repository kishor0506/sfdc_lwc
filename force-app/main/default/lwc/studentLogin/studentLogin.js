
import { LightningElement, track } from 'lwc';
import checkUsernameAvailability from '@salesforce/apex/UsernameChecker.checkUsernameAvailability';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LoginPage extends LightningElement {
    @track username = '';
    @track password = '';
    @track errorMessage = '';

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant // possible values: 'success', 'warning', 'error', 'info'
        });
        this.dispatchEvent(evt);
    }

    handleUsernameChange(event) {
        this.username = event.target.value;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
    }

    async handleLogin() {
    

        // Validate username before proceeding with login
        try {
            const isValid = await checkUsernameAvailability({ username: this.username });
            if (isValid) {
                this.showToast('Success', 'Username is valid!', 'success');
                
            } else {
                this.showToast('Error', 'Username is invalid.', 'error');
                
               

            }
        } catch (error) {
            this.errorMessage = 'Error occurred while checking username validity';
            console.error('Error: ', error);
        }
    }
}

