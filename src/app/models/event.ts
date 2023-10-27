export class Event {
    constructor(
        public title: string,
        public id: string,
        public description: string,
        public location: string,
        public imageUrl: string,
        public liked: number,
        public date: string
    ) {}
}