const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    let letters = this.word.toLowerCase().split('').sort();
    return letters.slice(1).every((letter, idx) => letters[idx] != letter);
}

module.exports = IsogramFinder;
