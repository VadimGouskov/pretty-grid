import { Condition } from './conditions';
export declare type Operator = (...conditions: Condition[]) => Condition;
export declare const and: Operator;
export declare const or: Operator;
export declare const not: Operator;
