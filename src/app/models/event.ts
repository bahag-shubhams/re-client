export class Event {
    constructor(
        public title: string,
        public id: string,
        public description: string,
        public location: string,
        public liked: number
    ) {}
}