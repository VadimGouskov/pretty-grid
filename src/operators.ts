import { Condition } from './conditions';

export type Operator = (...conditions: Condition[]) => Condition;

export const and: Operator = (...conditions: Condition[]) => {
    return (point, col, row) => {
        for (let condition of conditions) {
            if (!condition(point, col, row)) return false;
        }
        return true;
    };
};

export const or: Operator = (...conditions: Condition[]) => {
    return (point, col, row) => {
        for (let condition of conditions) {
            if (condition(point, col, row)) return true;
        }
        return false;
    };
};

export const not: Operator = (condition: Condition) => {
    return (point, col, row) => !condition(point, col, row);
};
