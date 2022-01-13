import { ConditionFunction } from './conditions';

export type Operator = (...conditions: ConditionFunction[]) => ConditionFunction;

export const and: Operator = (...conditions: ConditionFunction[]) => {
    return (point, col, row) => {
        for (let condition of conditions) {
            if (!condition(point, col, row)) return false;
        }
        return true;
    };
};

export const or: Operator = (...conditions: ConditionFunction[]) => {
    return (point, col, row) => {
        for (let condition of conditions) {
            if (condition(point, col, row)) return true;
        }
        return false;
    };
};
