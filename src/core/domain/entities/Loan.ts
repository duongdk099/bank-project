import { Money } from '../value-objects/Money';

export class Loan {
    constructor(
        public id: string,
        public userId: string,
        public principalAmount: Money,
        public interestRate: number,
        public insuranceRate: number,
        public durationMonths: number,
        public monthlyPayment: Money
    ) {}
}
