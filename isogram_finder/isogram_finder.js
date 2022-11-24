const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    // const letters = this.word.toLowerCase().split('').sort();
    // return letters.slice(1).every((letter, idx) => letters[idx] != letter);

    const set = new Set(this.word.toLowerCase().split(''));
    return set.size == this.word.length;

    // return !this.word.toLowerCase().match(/([a-z]).*\1/);
}

module.exports = IsogramFinder;
