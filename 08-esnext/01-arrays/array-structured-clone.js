const superHeroes = [
    {
        id:1,
        name:'Batman'
    },{
        id:2,
        name:'Superman'
    },{
        id:3,
        name:'Flash'
    },{
        id:1,
        name:'Aquaman'
    }
];

// const superHeroesCopy = [...superHeroes.map(h => ({...h}))]
const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'GreenLanter';

console.table(superHeroes);
console.table(superHeroesCopy);