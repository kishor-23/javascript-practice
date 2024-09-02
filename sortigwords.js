const string = "hello how are you doing today";

const words = string.split(' ');

words.sort();

console.log('The sorted words are:');

for (const word of words) {
  console.log(word);
}