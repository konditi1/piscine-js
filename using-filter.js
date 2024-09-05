
const filterShortStateName = (arr) => arr.filter(x => x.length < 7);

const filterStartVowel = (arr) => arr.filter(x => /^[aeiou]/i.test(x));

const filter5Vowels = (arr) => arr.filter(x => (x.match(/[aeiou]/gi) || []).length >= 5);

const filter1DistinctVowel = (arr) => arr.filter(x => {
    let vowels = [...new Set(x.toLowerCase().match(/[aeiou]/g))];
    return vowels.length === 1;
});

const multiFilter = (arr) => arr.filter(x => 
    characters(x.capital) &&
    notVowel(x.name) &&
    hasVowel(x.tag) &&
    notSouth(x.region)
);


const characters = (str) => str.length >= 8;

const notVowel = (str) => !/^[aeiou]/i.test(str);

const hasVowel = (str) => /[aeiou]/i.test(str);

const notSouth = (str) => str !== 'South';
