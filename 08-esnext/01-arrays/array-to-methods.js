const heroes = [
    "Batman",
    "Superman",
    "Flash",
    "Aquaman"
];

//const deleteHero = heroes.splice(0,2,'Green Lantern');

const deleteHero = heroes.toSpliced(0,2,'Green Lantern');

// heroes.sort();

// heroes.reverse();

// const heroesCopy = heroes;

//  const sortedHeroes = heroes.toSorted();

// const reversedHeroes = heroes.toReversed();



console.table(heroes);
console.table(deleteHero);
// console.table(reversedHeroes);
