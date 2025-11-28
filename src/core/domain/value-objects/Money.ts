export class Money {
    // Storing as integer (cents) to avoid floating point issues
    constructor(private readonly amountInCents: number, private readonly currency: string = 'EUR') {}

    static fromDecimal(amount: number, currency: string = 'EUR'): Money {
        return new Money(Math.round(amount * 100), currency);
    }

    getAmount(): number {
        return this.amountInCents / 100;
    }

    getCurrency(): string {
        return this.currency;
    }
    
    add(other: Money): Money {
        if (this.currency !== other.currency) throw new Error("Currency mismatch");
        return new Money(this.amountInCents + other.amountInCents, this.currency);
    }

    subtract(other: Money): Money {
        if (this.currency !== other.currency) throw new Error("Currency mismatch");
        return new Money(this.amountInCents - other.amountInCents, this.currency);
    }
}
