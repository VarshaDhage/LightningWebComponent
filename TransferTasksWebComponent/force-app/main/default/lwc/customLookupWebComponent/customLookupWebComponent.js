import { LightningElement, track, api } from 'lwc';
import findUsers from '@salesforce/apex/Users.findUsers';

export default class CustomLookupWebComponent extends LightningElement {


    @track searchKey = '';
    @track selectedRecord;
    @api objectapiname;
    @api iconname;
    @api label;
    @track listOfRecords;


    handleSearch(event) {
        this.searchKey = event.target.value;
        findUsers({ searchKey: this.searchKey, objectapiname: this.objectapiname })
            .then(result => {
                this.listOfRecords = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.listOfRecords = undefined;
            });

    }
    recordSelected(event) {
        const recordId = event.detail;
        this.selectedRecord = this.listOfRecords.find(record => record.Id === recordId);

    }

    clearpill(event) {
        event.preventDefault();
        this.selectedRecord = null;
        this.listOfRecords = null;
        this.searchKey = '';

    }

    onfocus(event) {
        this.handleSearch(event);
    }
    onblur(event) {
        event.preventDefault();

        this.listOfRecords = null;

    }

}