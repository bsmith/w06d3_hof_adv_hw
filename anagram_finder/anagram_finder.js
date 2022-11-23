const sortLetters = str => str.toLowerCase().split('').sort().join('');

const AnagramFinder = function (word) {
    this.word = word;
    this.sortedLetters = sortLetters(word);
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word => {
        return sortLetters(word) === this.sortedLetters && word !== this.word;
    })
}

module.exports = AnagramFinder;
