const UpperCaser = function (words) {
    this.words = words;
 };

UpperCaser.prototype.toUpperCase = function () {
    const wordToUpperCase = (word) => word.toUpperCase();
    return this.words.map(wordToUpperCase);
}
// UpperCaser.prototype.toUpperCase = function () {
//     /* wtf */
//     const wordToUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);
//     return this.words.map(wordToUpperCase);
// }

module.exports = UpperCaser;
