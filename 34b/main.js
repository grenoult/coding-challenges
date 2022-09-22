// https://codeforces.com/problemset/problem/34/B


function main(nb, tvs) {
  const cheapest_tvs = tvs.sort((a,b) => a-b).slice(0, nb);
  const sum = cheapest_tvs.reduce(
    // only add TVs with negatives prices to be profitable
    (partialSum, a) => a < 0 ? partialSum - a : partialSum, 
    0
  );

  return sum;
}
module.exports = main;