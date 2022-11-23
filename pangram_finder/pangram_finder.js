const PangramFinder = function (phrase) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
    let phaseLetters = new Map(this.phrase.toLowerCase().split('').sort().map(c => [c, true]));
    return this.alphabet.every(letter => phaseLetters.get(letter));
}

module.exports = PangramFinder;
