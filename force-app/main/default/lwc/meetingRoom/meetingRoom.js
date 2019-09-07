import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    // can only update api values from paraent.
    // can't update from template
    // Replaced with a slot
    @api
    meetingRoomInfo;

    @wire(CurrentPageReference)
    pageReference;

    tileClickHandler() {
        const tileClicked = new CustomEvent('tileclick', {
            detail: this.meetingRoomInfo,
            bubbles: true
        });
        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }
}
