import { TransactionCreateOptions, TransactionAllOptions, TransactionCalculateInstallmentsAmountOptions, TransactionFindOptions, TransactionCaptureOptions, TransactionRefundOptions } from './options';
import { Transaction, CalculateInstallmentsAmount, CardHashKey } from './responses';
declare module 'pagarme' {
    namespace client {
        namespace transactions {
            function all(opts: any, body: TransactionAllOptions): Promise<Transaction[]>;
            function calculateInstallmentsAmount(opts: any, body: TransactionCalculateInstallmentsAmountOptions): Promise<CalculateInstallmentsAmount>;
            function capture(opts: TransactionCaptureOptions): Promise<Transaction>;
            function cardHashKey(opts: any): Promise<CardHashKey>;
            function collectPayment(opts: any, body: any): any;
            function create(opts: TransactionCreateOptions): Promise<Transaction>;
            function find<T extends TransactionFindOptions>(opts: any, body: T): Promise<T extends TransactionFindOptions ? Transaction[] : Transaction>;
            function refund(opts: any, body: TransactionRefundOptions): Promise<Transaction>;
            function reprocess(opts: any, body: any): any;
            function update(opts: any, body: any): any;
        }
    }
}
