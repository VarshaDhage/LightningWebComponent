import { LightningElement, api } from 'lwc';

export default class TransferTasks extends LightningElement {


    @api objectapiname = 'Account';
    @api iconname = 'standard:account';
    @api label = 'Account name';

}