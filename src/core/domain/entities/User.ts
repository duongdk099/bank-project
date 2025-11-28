export enum UserRole {
    CLIENT = 'CLIENT',
    DIRECTOR = 'DIRECTOR',
    ADVISOR = 'ADVISOR'
}

export class User {
    constructor(
        public id: string,
        public email: string,
        public password: string,
        public fullName: string,
        public role: UserRole,
        public isVerified: boolean = false,
        public isBanned: boolean = false
    ) {}
}
