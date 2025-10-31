console.log("Reto 01: La posesion del codigo");
function translatePossessed(message) {
    if (message.trim() === '')
        return '';
    var words = message.split(' ');
    var translatedWords = words.map(function (word) { return word.split('').reverse().join(''); });
    return translatedWords.join(' ');
}
var message = 'i yojne gnihctaw uoy';
console.log(translatePossessed(message));
console.log(translatePossessed(message).length);
