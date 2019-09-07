import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    // can only update api values from paraent.
    // can't update from template
    // Replaced with a slot
    @api
    meetingRoomInfo;

    tileClickHandler() {
        const tileClicked = new CustomEvent('tileclick', {
            detail: this.meetingRoomInfo
        });
        this.dispatchEvent(tileClicked);
    }
}
