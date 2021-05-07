import { Recipient } from './responses';
import { RecipientUpdateOptions, RecipientCreateOptions } from './options';
declare module 'pagarme' {
    namespace client {
        namespace recipients {
            function all(opts: any, body: any): any;
            function create(opts: RecipientCreateOptions): Promise<Recipient>;
            function update(opts: RecipientUpdateOptions): Promise<Recipient>;
            function find(opts: any): any;
        }
    }
}
