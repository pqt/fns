import { weightedRandom } from './weighted-random';

test('it should return without error', () => {
  const random = jest.fn(weightedRandom);

  random([
    ['Audi', 3],
    ['BMW', 1],
    ['Ferrari', 7],
    ['Lamborghini', 7],
    ['RAM', 4],
    ['Tesla', 6],
  ]);

  expect(random).toHaveReturnedTimes(1);
});
