import { IBAN } from '../value-objects/IBAN';
import { Money } from '../value-objects/Money';

export enum AccountType {
    CHECKING = 'CHECKING',
    SAVING = 'SAVING'
}

export class Account {
    constructor(
        public id: string,
        public ownerId: string,
        public iban: IBAN,
        public name: string,
        public balance: Money,
        public type: AccountType
    ) {}
}
