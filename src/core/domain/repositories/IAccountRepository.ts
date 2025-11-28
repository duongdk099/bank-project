import { Account } from '../entities/Account';

export interface IAccountRepository {
    save(account: Account): Promise<void>;
    findById(id: string): Promise<Account | null>;
    findByOwnerId(ownerId: string): Promise<Account[]>;
    findByIban(iban: string): Promise<Account | null>;
}
