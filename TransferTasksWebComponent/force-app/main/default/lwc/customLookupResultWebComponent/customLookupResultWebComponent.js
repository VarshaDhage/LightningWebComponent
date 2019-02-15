import { LightningElement, api } from 'lwc';

export default class CustomLookupResultWebComponent extends LightningElement {

    @api orecord;
    @api iconname;
    
    selectRecord(event) {
        // Prevents the anchor element from navigating to a URL.
        event.preventDefault();

        // Creates the event with the record ID data.
        const selectedEvent = new CustomEvent('selected', { detail: this.orecord.Id });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }

   

}