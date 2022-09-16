// https://codeforces.com/problemset/problem/34/B


function main(nb, tvs) {
  const cheapest_tvs = tvs.sort().slice(0, nb);
  const sum = cheapest_tvs.reduce((partialSum, a) => partialSum + a, 0);

  return sum < 0 ? sum * (-1) : 0;
}
module.exports = main;