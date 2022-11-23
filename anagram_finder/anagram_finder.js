const sortLetters = str => str.toLowerCase().split('').sort().join('');

let primeNumbersAndOne = [1, 2, 3, 5];
TRIAL:
for (let n = primeNumbersAndOne.slice(-1)[0] + 2;
        primeNumbersAndOne.length < 27;
        n += 2) {
    for (p of primeNumbersAndOne.slice(1))
        if (n % p == 0)
            continue TRIAL;
    primeNumbersAndOne.push(n); /* n is prime */
}
// console.log(primeNumbersAndOne);

const AnagramFinder = function (word) {
    this.word = word;
    this.sortedLetters = sortLetters(word);
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    // return otherWords.filter(word => {
    //     return sortLetters(word) === this.sortedLetters && word !== this.word;
    // })

    const wordToGodelCode = (word) => {
        const code = word.split('')
            .map(letter => primeNumbersAndOne[parseInt(letter, 36) - 9 || 0])
            .reduce((acc, code) => acc * code, 1);
        // console.log(word, code);
        return code;
    };

    const wordGodel = wordToGodelCode(this.word);
    return otherWords.filter(word => {
        return wordGodel === wordToGodelCode(word) && this.word !== word
    })
}

module.exports = AnagramFinder;
