const sortLetters = str => str.toLowerCase().split('').sort().join('');

const PangramFinder = function (phrase) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
    // let phaseLetters = new Map(this.phrase.toLowerCase().split('').map(c => [c, true]));
    // return this.alphabet.split('').every(letter => phaseLetters.has(letter));

    // const phaseSortedLetters = sortLetters(this.phrase);
    //  /* remove duplicates and symbols */
    // const cleanedLetters = phaseSortedLetters.replaceAll(/([a-z])\1+|[^a-z]/g, '$1');
    // return cleanedLetters === this.alphabet;

    const phaseLetters = this.phrase.toLowerCase().split('');
    const bitmap = phaseLetters
        .map(letter => letter.charCodeAt(0) - 97)
        .filter(code => 0 <= code && code < 26)
        .reduce((bitmap, code) => bitmap | (1 << code), 0);
    return bitmap == (1 << 26) - 1;
}

module.exports = PangramFinder;
