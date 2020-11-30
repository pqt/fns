import { foreground } from './foreground';

test('it should return a dark foreground for white', () => {
  expect(foreground('fff')).toBe('dark');
});

test('it should return a light foreground for black', () => {
  expect(foreground('000')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of gray', () => {
  expect(foreground('F7FAFC')).toBe('dark');
  expect(foreground('EDF2F7')).toBe('dark');
  expect(foreground('E2E8F0')).toBe('dark');
  expect(foreground('CBD5E0')).toBe('dark');
  expect(foreground('A0AEC0')).toBe('dark');

  expect(foreground('718096')).toBe('light');
  expect(foreground('4A5568')).toBe('light');
  expect(foreground('2D3748')).toBe('light');
  expect(foreground('1A202C')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of red', () => {
  expect(foreground('FFF5F5')).toBe('dark');
  expect(foreground('FED7D7')).toBe('dark');
  expect(foreground('FEB2B2')).toBe('dark');
  expect(foreground('FC8181')).toBe('dark');
  expect(foreground('F56565')).toBe('dark');

  expect(foreground('E53E3E')).toBe('light');
  expect(foreground('C53030')).toBe('light');
  expect(foreground('9B2C2C')).toBe('light');
  expect(foreground('742A2A')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of orange', () => {
  expect(foreground('FFFAF0')).toBe('dark');
  expect(foreground('FEEBC8')).toBe('dark');
  expect(foreground('FBD38D')).toBe('dark');

  expect(foreground('F6AD55')).toBe('light');
  expect(foreground('ED8936')).toBe('light');
  expect(foreground('DD6B20')).toBe('light');
  expect(foreground('C05621')).toBe('light');
  expect(foreground('9C4221')).toBe('light');
  expect(foreground('7B341E')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of yellow', () => {
  expect(foreground('FFFFF0')).toBe('dark');
  expect(foreground('FEFCBF')).toBe('dark');
  expect(foreground('FAF089')).toBe('dark');
  expect(foreground('F6E05E')).toBe('dark');

  expect(foreground('ECC94B')).toBe('light');
  expect(foreground('D69E2E')).toBe('light');
  expect(foreground('B7791F')).toBe('light');
  expect(foreground('975A16')).toBe('light');
  expect(foreground('744210')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of green', () => {
  expect(foreground('F0FFF4')).toBe('dark');
  expect(foreground('C6F6D5')).toBe('dark');
  expect(foreground('9AE6B4')).toBe('dark');

  expect(foreground('68D391')).toBe('light');
  expect(foreground('48BB78')).toBe('light');
  expect(foreground('38A169')).toBe('light');
  expect(foreground('2F855A')).toBe('light');
  expect(foreground('276749')).toBe('light');
  expect(foreground('22543D')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of teal', () => {
  expect(foreground('E6FFFA')).toBe('dark');
  expect(foreground('B2F5EA')).toBe('dark');
  expect(foreground('81E6D9')).toBe('dark');

  expect(foreground('4FD1C5')).toBe('light');
  expect(foreground('38B2AC')).toBe('light');
  expect(foreground('319795')).toBe('light');
  expect(foreground('2C7A7B')).toBe('light');
  expect(foreground('285E61')).toBe('light');
  expect(foreground('234E52')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of blue', () => {
  expect(foreground('EBF8FF')).toBe('dark');
  expect(foreground('BEE3F8')).toBe('dark');
  expect(foreground('90CDF4')).toBe('dark');
  expect(foreground('63B3ED')).toBe('dark');

  expect(foreground('4299E1')).toBe('light');
  expect(foreground('3182CE')).toBe('light');
  expect(foreground('2B6CB0')).toBe('light');
  expect(foreground('2C5282')).toBe('light');
  expect(foreground('2A4365')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of indigo', () => {
  expect(foreground('EBF4FF')).toBe('dark');
  expect(foreground('C3DAFE')).toBe('dark');
  expect(foreground('A3BFFA')).toBe('dark');
  expect(foreground('7F9CF5')).toBe('dark');
  expect(foreground('667EEA')).toBe('dark');

  expect(foreground('5A67D8')).toBe('light');
  expect(foreground('4C51BF')).toBe('light');
  expect(foreground('434190')).toBe('light');
  expect(foreground('3C366B')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of purple', () => {
  expect(foreground('FAF5FF')).toBe('dark');
  expect(foreground('E9D8FD')).toBe('dark');
  expect(foreground('D6BCFA')).toBe('dark');
  expect(foreground('B794F4')).toBe('dark');
  expect(foreground('9F7AEA')).toBe('dark');

  expect(foreground('805AD5')).toBe('light');
  expect(foreground('6B46C1')).toBe('light');
  expect(foreground('553C9A')).toBe('light');
  expect(foreground('44337A')).toBe('light');
});

test('it should return the appropriate foregrounds for shades of pink', () => {
  expect(foreground('FFF5F7')).toBe('dark');
  expect(foreground('FED7E2')).toBe('dark');
  expect(foreground('FBB6CE')).toBe('dark');
  expect(foreground('F687B3')).toBe('dark');
  expect(foreground('ED64A6')).toBe('dark');

  expect(foreground('D53F8C')).toBe('light');
  expect(foreground('B83280')).toBe('light');
  expect(foreground('97266D')).toBe('light');
  expect(foreground('702459')).toBe('light');
});
