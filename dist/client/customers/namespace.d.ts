import { CustomerCreateOptions } from './options';
import { Customer } from './responses';
declare module 'pagarme' {
    namespace client {
        namespace customers {
            function all(opts: any, body: any): Promise<Customer[]>;
            function create(body: CustomerCreateOptions): Promise<Customer>;
            function find(opts: any, body: any): Promise<Customer>;
        }
    }
}
