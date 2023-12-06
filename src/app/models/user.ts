export class User {
    constructor(
        public full_name: string,
        public email: string,
        public phone_number: string,
        public userid: number,
    ) {}
}

export class UserFavoriteEvent {
    constructor(
        public event_id: number,
        public user_id: number,
    ) {}
}
