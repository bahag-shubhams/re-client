export class Event {
    constructor(
        public title: string,
        public event_description: string,
        public loc: string,
        public dat: string,
        public eventid: number,
        public liked : number,
        public imageUrl: string
    ) {}
}