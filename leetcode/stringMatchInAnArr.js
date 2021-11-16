var stringMatching = function (words) {
  const wordsHash = {};
  const ansSet = new Set();

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = i + 1; j <= words.length; j++) {
      let otherWord = words[j];
      if (word.includes(otherWord)) {
        if (word === otherWord) continue;
        ansSet.add(otherWord);
      }

      if (otherWord !== undefined)
        if (otherWord.includes(word)) {
          if (otherWord === word) continue;
          else ansSet.add(word);
        }
    }
  }
  const ansArr = [];
  for (const key of ansSet) {
    ansArr.push(key);
  }
  return ansArr;
};



/*
O(n^2) Time O(n) Space

I solved this using a nested for loop,

I essentially checked every single combination possible.
 i        j
['mass', 'as, 'hero', 'superhero']

this is how my loop would start.

Within each inner for loop I would check to see if words.includes otherWords
 and if it did I had to ensure that it wasn't the same exact word, if it was we just continue on with our loop else
I'm going to add it to our set.

I also had to ensure that my otherWord never went out of bounds either, and vice versa.

Once I had all the values within my set I simply looped through my set and created an array out of it'
*/
