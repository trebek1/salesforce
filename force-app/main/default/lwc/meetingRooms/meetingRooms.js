import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    @track
    selectedMeetingRoomInfo;

    meetingRooms = [
        {
            roomName: 'AA-01',
            roomCapacity: 12
        },
        {
            roomName: 'AA-02',
            roomCapacity: 2
        },
        {
            roomName: 'AA-03',
            roomCapacity: 4
        },
        {
            roomName: 'AA-04',
            roomCapacity: 8
        },
        {
            roomName: 'AA-05',
            roomCapacity: 10
        },
        {
            roomName: 'AA-06',
            roomCapacity: 113
        }
    ];
    onTileSelectHandler = event => {
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoomInfo = meetingRoomInfo.roomName;
    };
    constructor() {
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler);
    }
}
