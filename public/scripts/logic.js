// find stuff
/*
"How are you?".indexOf("o");
"How are you?".charAt(5);

// replace stuff
const newString = originalString.replace(/javascript/gi, "JavaScript");

function replace(){
	text = $(@text).html().replace(/e/g, '<span class="red">e</span>');
}

// highlight stuff
for (var i = 0; i < str.length; i++) {
     if (str[i] == 'e') {
     newText+= str.charAt(i).fontcolor("red");
     }
     else {
        newText += str[i];
    }
}
s1.innerHTML = newText;

function color_word(text_id, word, color) {
    words = $('#' + text_id).text().split(' ');
    words = words.map(function(item) { return item == word ? "<span style='color: " + color + "'>" + word + '</span>' : item });
    new_words = words.join(' ');
    $('#' + text_id).html(new_words);
    }

// puts the entire thing in a span tag so that's an issue
function checkInput(){
	var input = $('textarea').val();
	if(input=="hello"){
		$('p').append('<span>'+input+'</span>')
	}
};
*/

// maybe look into set interval

// take the input
var text = "Hello. She says her name is Kelly. She really hope her good stuff begins to work.";

// word count
var textArray = text.split(" ");
var wordCount = textArray.length;
console.log(wordCount);

// sentence count
var sentenceArray = text.split(".");
var sentenceCount = sentenceArray.length;
console.log(sentenceCount);

// average word length
var characterCount = text.length;
var letterCount = characterCount - wordCount + 1;
var avgWord = letterCount / wordCount;
console.log(avgWord);

// average sentence length
var avgSentence = wordCount / sentenceCount;
console.log(avgSentence);

// sentence length variation (FIX LATER)

// highlight very long or very short sentence (FIX LATER)

// paragraph count (FIX LATER)

// highlight bad punctuation, exclamation marks and question marks (FIX LATER)

// weak verbs
for (i=0; i<textArray.length; i++) {
  var weakVerbs = ["get", "gets", "say", "says", "proves", "prove", "seem", "seems", "begin", "begins"];
  for (x=0; x<weakVerbs.length; x++) {
  	 if (textArray[i] == weakVerbs[x]) {
    	textArray[i]= '<span class="red">'+textArray[i]+'</span>';
  	}
  }
}

// overused words
for (i=0; i<textArray.length; i++) {
	var weakWords = ["good", "like", "just", "evilness", "there", "large", "like"];
	for (x=0; x<weakWords.length; x++) {
  	 if (textArray[i] == weakWords[x]) {
    	textArray[i]= '<span class="green">'+textArray[i]+'</span>';
  	}
  }
}

// vague nouns
for (i=0; i<textArray.length; i++) {
	var weakNouns = ["stuff", "thing", "things", "everyone", "everybody"];
	for (x=0; x<weakNouns.length; x++) {
  	 if (textArray[i] == weakNouns[x]) {
    	textArray[i]= '<span class="purple">'+textArray[i]+'</span>';
  	}
  }
}

$('h3').html(textArray.join(" "));

// repetition (FIX LATER)
