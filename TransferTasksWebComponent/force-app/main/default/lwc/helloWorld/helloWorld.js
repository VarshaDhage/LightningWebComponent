import { LightningElement, track } from 'lwc';
import findUsers from '@salesforce/apex/Users.findUsers';
export default class HelloWorld extends LightningElement {
    @track greeting = 'World';
    @track searchKey;
    @track users;
    @track error;

    changeHandler(event) {
        this.greeting = event.target.value;
    }

    handleSearch(event) {
        this.searchKey = event.target.value;
        findUsers({ searchKey: this.searchKey })
            .then(result => {
                this.users = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.users = undefined;
            });
    }
}