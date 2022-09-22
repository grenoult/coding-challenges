const main = require('./main');

const data = [
  { // Case 1 from instructions
    data: {
      nb: 3, 
      tvs: [-6, 0, 35, -2, 4]
    },
    expectedResult: 8
  },
  { // Case 2 from instructions
    data: {
      nb: 2, 
      tvs: [7, 0, 0, -7]
    },
    expectedResult: 7
  },
  { // Case where it's not profitable
    data: {
      nb: 3, 
      tvs: [2, 3, 4, 5]
    },
    expectedResult: 0
  },
  { // Case where it's always profitable
    data: {
      nb: 3, 
      tvs: [-2, -3, -4, -5]
    },
    expectedResult: 12
  },
  { // Case where it's not losing nor making money
    data: {
      nb: 2, 
      tvs: [0, 0, 0, 0]
    },
    expectedResult: 0
  },
  { // Case where there's no TVs
    data: {
      nb: 2, 
      tvs: []
    },
    expectedResult: 0
  },
];

describe.each(data)(`Test 34B`, (data) => {
  it(`Tests that result for ${data.data.nb} (${data.data.tvs}) is ${data.expectedResult}`, () => {
    const result = main(data.data.nb, data.data.tvs);
    expect(result).toEqual(data.expectedResult);
  });
})