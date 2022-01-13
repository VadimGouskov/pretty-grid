import { ConditionFunction } from './conditions';
export declare type Operator = (...conditions: ConditionFunction[]) => ConditionFunction;
export declare const and: Operator;
export declare const or: Operator;
