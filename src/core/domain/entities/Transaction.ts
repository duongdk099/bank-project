import { Money } from '../value-objects/Money';

export enum TransactionType {
    TRANSFER = 'TRANSFER',
    DEPOSIT = 'DEPOSIT',
    WITHDRAWAL = 'WITHDRAWAL'
}

export class Transaction {
    constructor(
        public id: string,
        public sourceAccountId: string | null,
        public destinationAccountId: string | null,
        public amount: Money,
        public type: TransactionType,
        public timestamp: Date
    ) {}
}
