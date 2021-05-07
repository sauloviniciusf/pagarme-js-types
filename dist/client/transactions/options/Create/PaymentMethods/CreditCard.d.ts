import { CreditCardByData } from './CreditCard/CreditCardByData';
import { CreditCardByHash } from './CreditCard/CreditCardByHash';
import { CreditCardById } from './CreditCard/CreditCardById';
interface CreditCardBase {
    payment_method: 'credit_card';
}
export declare type CreditCard = CreditCardBase & (CreditCardByData | CreditCardByHash | CreditCardById);
export {};
