import { firstWeekdayInMonth } from './firstWeekdayInMonth';
import { isEqual } from 'date-fns';
import { Weekday } from '../types/Weekday';

it('should return the correct date', () => {
  const firstSaturday = firstWeekdayInMonth(
    new Date(2019, 5, 1),
    Weekday.Saturday,
  );
  expect(isEqual(firstSaturday, new Date(2019, 5, 1))).toBeTruthy();
  const firstSunday = firstWeekdayInMonth(new Date(2019, 5, 1), Weekday.Sunday);
  expect(isEqual(firstSunday, new Date(2019, 5, 2))).toBeTruthy();
  const firstMonday = firstWeekdayInMonth(new Date(2019, 5, 1), Weekday.Monday);
  expect(isEqual(firstMonday, new Date(2019, 5, 3))).toBeTruthy();
  const firstTuesday = firstWeekdayInMonth(
    new Date(2019, 5, 1),
    Weekday.Tuesday,
  );
  expect(isEqual(firstTuesday, new Date(2019, 5, 4))).toBeTruthy();
  const firstWednesday = firstWeekdayInMonth(
    new Date(2019, 5, 1),
    Weekday.Wednesday,
  );
  expect(isEqual(firstWednesday, new Date(2019, 5, 5))).toBeTruthy();
  const firstThursday = firstWeekdayInMonth(
    new Date(2019, 5, 1),
    Weekday.Thursday,
  );
  expect(isEqual(firstThursday, new Date(2019, 5, 6))).toBeTruthy();
  const firstFriday = firstWeekdayInMonth(new Date(2019, 5, 1), Weekday.Friday);
  expect(isEqual(firstFriday, new Date(2019, 5, 7))).toBeTruthy();
});

it('should return the correct date when initialized mid month', () => {
  const firstSaturday = firstWeekdayInMonth(
    new Date(2019, 5, 15),
    Weekday.Saturday,
  );
  expect(isEqual(firstSaturday, new Date(2019, 5, 1))).toBeTruthy();
  const firstSunday = firstWeekdayInMonth(
    new Date(2019, 5, 16),
    Weekday.Sunday,
  );
  expect(isEqual(firstSunday, new Date(2019, 5, 2))).toBeTruthy();
  const firstMonday = firstWeekdayInMonth(
    new Date(2019, 5, 17),
    Weekday.Monday,
  );
  expect(isEqual(firstMonday, new Date(2019, 5, 3))).toBeTruthy();
  const firstTuesday = firstWeekdayInMonth(
    new Date(2019, 5, 18),
    Weekday.Tuesday,
  );
  expect(isEqual(firstTuesday, new Date(2019, 5, 4))).toBeTruthy();
  const firstWednesday = firstWeekdayInMonth(
    new Date(2019, 5, 19),
    Weekday.Wednesday,
  );
  expect(isEqual(firstWednesday, new Date(2019, 5, 5))).toBeTruthy();
  const firstThursday = firstWeekdayInMonth(
    new Date(2019, 5, 20),
    Weekday.Thursday,
  );
  expect(isEqual(firstThursday, new Date(2019, 5, 6))).toBeTruthy();
  const firstFriday = firstWeekdayInMonth(
    new Date(2019, 5, 21),
    Weekday.Friday,
  );
  expect(isEqual(firstFriday, new Date(2019, 5, 7))).toBeTruthy();
});
