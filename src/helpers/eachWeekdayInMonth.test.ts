import { eachWeekdayInMonth } from './eachWeekdayInMonth';
import { Weekday } from '../types/Weekday';

it('should yield all mondays in june 2019', () => {
  const itMondays = eachWeekdayInMonth(new Date(2019, 5, 1), Weekday.Monday);
  const mondays = [...itMondays];
  expect(mondays).toEqual([
    new Date(2019, 5, 3),
    new Date(2019, 5, 10),
    new Date(2019, 5, 17),
    new Date(2019, 5, 24),
  ]);
});

it('should yield all wednesdays in june 2019', () => {
  const itWednesdays = eachWeekdayInMonth(
    new Date(2019, 5, 15),
    Weekday.Wednesday,
  );
  const wednesdays = [...itWednesdays];
  expect(wednesdays).toEqual([
    new Date(2019, 5, 5),
    new Date(2019, 5, 12),
    new Date(2019, 5, 19),
    new Date(2019, 5, 26),
  ]);
});
