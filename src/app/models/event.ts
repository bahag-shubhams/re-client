export class Event {
    constructor(
        public title: string,
        public event_description: string,
        public loc: string,
        public dat: string,
        public eventid: number,
        public liked : number,
        public image_url: string,
        public position: google.maps.LatLngLiteral,
    ) {}
}

export class PaginatedEventResponse {
    constructor(
        public data: Event[],
        public total_pages: number,
        public current_page: number,
    ) {}
}