const main = require('./main');

const data = [
  {
    data: {
      nb: 3, 
      tvs: [-6, 0, 35, -2, 4]
    },
    expectedResult: 8
  },
  {
    data: {
      nb: 2, 
      tvs: [7, 0, 0, -7]
    },
    expectedResult: 7
  },
];

describe.each(data)(`Test 34B`, (data) => {
  it(`Tests that result for ${data.data.nb} (${data.data.tvs}) is ${data.expectedResult}`, () => {
    const result = main(data.data.nb, data.data.tvs);
    expect(result).toEqual(data.expectedResult);
  });
})