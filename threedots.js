const ages = [12, 14, 15, 74];
const ages2 = [25, 26, 27, 28, 41];
const ages3 = [34, 36, 66, 35, 53];
const allAges = ages.concat(ages2).concat(ages3);

const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges);

const taka = [560, 589, 1000, 6987, 215];

const maximum = Math.max(...taka);

console.log(maximum);
