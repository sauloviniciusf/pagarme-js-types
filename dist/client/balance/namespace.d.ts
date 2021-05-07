import { BalanceFindOptions } from './options';
import { BalanceResponse } from './responses';
declare module 'pagarme' {
    namespace client {
        namespace balance {
            function find(opts: BalanceFindOptions): Promise<BalanceResponse>;
            function primary(opts: any): any;
        }
    }
}
