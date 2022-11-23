const sortLetters = str => str.toLowerCase().split('').sort().join('');

const PangramFinder = function (phrase) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
    // let phaseLetters = new Map(this.phrase.toLowerCase().split('').map(c => [c, true]));
    // return this.alphabet.split('').every(letter => phaseLetters.has(letter));

    const phaseSortedLetters = sortLetters(this.phrase);
     /* remove duplicates and symbols */
    const cleanedLetters = phaseSortedLetters.replaceAll(/([a-z])\1+|[^a-z]/g, '$1');
    return cleanedLetters === this.alphabet;
}

module.exports = PangramFinder;
