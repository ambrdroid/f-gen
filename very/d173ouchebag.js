var NumberOfWords = 10
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://gestyy.com/erM0Ow" 
words[2] = "http://gestyy.com/erM0Dr" 
words[3] = "http://gestyy.com/erM0J9" 
words[4] = "http://gestyy.com/erM0Vr" 
words[5] = "http://gestyy.com/erM04t" 
words[6] = "http://gestyy.com/erMqtU" 
words[7] = "http://gestyy.com/erMqg6" 
words[8] = "http://gestyy.com/erMqcl" 
words[9] = "http://gestyy.com/erMqmZ" 
words[10] = "http://gestyy.com/erMqEn" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
