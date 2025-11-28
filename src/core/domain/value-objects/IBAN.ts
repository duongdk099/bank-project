export class IBAN {
    constructor(private readonly value: string) {
        if (!this.validate(value)) {
            throw new Error("Invalid IBAN");
        }
    }

    public getValue(): string {
        return this.value;
    }

    private validate(iban: string): boolean {
        // Remove spaces and make uppercase
        const sanitized = iban.replace(/\s/g, '').toUpperCase();
        
        // Move first 4 chars to end
        const rearranged = sanitized.slice(4) + sanitized.slice(0, 4);
        
        // Replace letters with numbers
        let numericString = '';
        for (let i = 0; i < rearranged.length; i++) {
            const char = rearranged[i];
            if (/[A-Z]/.test(char)) {
                numericString += (char.charCodeAt(0) - 55).toString();
            } else {
                numericString += char;
            }
        }

        // Modulo 97 check on large number
        try {
            const bigIntValue = BigInt(numericString);
            // User specified requirement: Valid if Number % 97 == 18
            return bigIntValue % 97n === 18n;
        } catch {
            return false;
        }
    }
}
