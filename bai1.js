function reverseInPlace(str) {
    var words = [];
    words = str.split("\s+");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        return result += words[i].split('').reverse().join('');
    }
}
console.log(reverseInPlace("program"))