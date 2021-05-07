import { Refund } from './responses';
import { RefundFindOptions } from './options';
declare module 'pagarme' {
    namespace client {
        namespace refunds {
            function find(opts: any, body: RefundFindOptions): Promise<Refund[]>;
            function cancel(opts: any, body: any): any;
        }
    }
}
