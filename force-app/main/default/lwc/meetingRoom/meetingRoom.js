import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    // can only update api values from paraent.
    // can't update from template
    @api
    meetingRoomInfo;
}
