const filterRange = require('./002.filter-range.js');

test('특정 범위에 속하는 요소 찾기', () => {
  expect(filterRange([5, 3, 8, 1], 1, 4)).toStrictEqual([3, 1]);
});
