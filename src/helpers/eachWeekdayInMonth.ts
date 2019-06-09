import { isSameMonth, addWeeks } from 'date-fns';
import { Weekday } from '../types/Weekday';
import { firstWeekdayInMonth } from './firstWeekdayInMonth';

/**
 * @param date
 * @param weekday
 */
export const eachWeekdayInMonth = function*(date: Date, weekday: Weekday) {
  let current = firstWeekdayInMonth(date, weekday);
  while (isSameMonth(date, current)) {
    yield current;
    current = addWeeks(current, 1);
  }
};
