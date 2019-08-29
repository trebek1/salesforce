import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
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
}
