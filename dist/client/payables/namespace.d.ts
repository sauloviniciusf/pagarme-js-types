import { Payable } from './responses';
import { PayableFindOptions, PayableAllOptions } from './options';
declare module 'pagarme' {
    namespace client {
        namespace payables {
            function all(args: PayableAllOptions): Promise<Payable[]>;
            function find(opts: PayableFindOptions): Promise<Payable[]>;
            function days(opts: any, body: any): any;
        }
    }
}
