import { startOfMonth, addDays } from 'date-fns';
import { Weekday } from '../types/Weekday';

/**
 * @param date
 * @param weekday
 */
export const firstWeekdayInMonth = (date: Date, weekday: Weekday) => {
  let current = startOfMonth(date);
  if (current.getDay() !== weekday) {
    let diff = weekday - current.getDay();
    if (diff < 0) diff += 7;
    current = addDays(current, diff);
  }
  return current;
};
