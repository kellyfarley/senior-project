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
// var text = <%@userInput%>
// var text = "you'll be can't like back 1 2 3 makes the decision get can't soon you'll see; it's all; page. however page get. good I swear isn't it lovely very lovely";
var text = $('#userTextResult').html();
console.log(text);

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
/*for (i=0; i<sentenceArray.length; i++) {
	if (sentenceArray[i] > 10) {

	}
}
*/
// find the first word in the sentence array [i]
// find the last word - highlight everything in between?
// maybe knowing how to find phrases will help

// paragraph count (FIX LATER)

// highlight bad punctuation, exclamation marks and question marks (FIX LATER)

// text array but without the puncuation or caps
var cleanText = text.toLowerCase();
var cleanText = cleanText.replace(/\./g, '');
var cleanText = cleanText.replace(/\,/g, '');
var cleanText = cleanText.replace(/\;/g, '');
var cleanTextArray = cleanText.split(" ")
console.log(cleanTextArray);

// weak verbs
for (i=0; i<cleanTextArray.length; i++) {
  var weakVerbs = ["get", "gets", "say", "says", "proves", "prove", "seem", "seems", "begin", "begins"];
  for (x=0; x<weakVerbs.length; x++) {
  	 if (cleanTextArray[i] == weakVerbs[x]) {
    	textArray[i]= '<span class="red">'+textArray[i]+'</span>';
  	}
  }
}

// vague nouns
for (i=0; i<cleanTextArray.length; i++) {
	var weakNouns = ["stuff", "thing", "things", "everyone", "everybody"];
	for (x=0; x<weakNouns.length; x++) {
  	 if (cleanTextArray[i] == weakNouns[x]) {
    	textArray[i]= '<span class="purple">'+textArray[i]+'</span>';
  	}
  }
}

// overused words
for (i=0; i<cleanTextArray.length; i++) {
	var weakWords = ["good", "like", "just", "evilness", "there", "large", "like"];
	for (x=0; x<weakWords.length; x++) {
  	 if (cleanTextArray[i] == weakWords[x]) {
    	textArray[i]= '<span class="green">'+textArray[i]+'</span>';
  	}
  }
}
// replace "like" with "such as"?

// passive voice
for (i=0; i<cleanTextArray.length; i++) {
	var passiveVoice = ["is", "am", "are"];
	for (x=0; x<passiveVoice.length; x++) {
  	 if (cleanTextArray[i] == passiveVoice[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// naked this - maybe only highlight if follwed by "shows"?
for (i=0; i<cleanTextArray.length; i++) {
	if (cleanTextArray[i] == "this") {
    	textArray[i]= '<span class="yellow">'+textArray[i]+'</span>';
  	}
}

// 2nd person
for (i=0; i<cleanTextArray.length; i++) {
	var secondPerson = ["you", "you're", "you'll", "you'd"];
	for (x=0; x<secondPerson.length; x++) {
  	 if (cleanTextArray[i] == secondPerson[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// first person
for (i=0; i<cleanTextArray.length; i++) {
	var firstPerson = ["I", "me", "we", "our", "I'm", "I'll", "I'd", "we're", "we'd", "we'll"];
	for (x=0; x<firstPerson.length; x++) {
  	 if (cleanTextArray[i] == firstPerson[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// adverbs
for (i=0; i<cleanTextArray.length; i++) {
	var adverbs = ["carefully", "very", "happily", "quickly", "really", "finally", "seriously", "always", "badly", "exactly", "basically", "actually", "literally", "clearly", "totally", "obviously", "truly", "constantly","specifically"];
	for (x=0; x<adverbs.length; x++) {
  	 if (cleanTextArray[i] == adverbs[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// past tense - check for words ending in ED? not applicable for history
for (i=0; i<cleanTextArray.length; i++) {
	var pastTense = ["said", "made", "went", "took", "came", "saw", "knew", "got", "gave", "found", "thought", "told", "became", "showed", "left", "put", "brought", "began", "kept", "held", "wrote", "stood", "heard", "let", "meant", "set", "met", "run", "paid", "said", "understood", "bought", "worn", "died", "was", "were", "did"];
	for (x=0; x<adverbs.length; x++) {
  	 if (cleanTextArray[i] == adverbs[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// page
for (i=0; i<cleanTextArray.length; i++) {
	if (cleanTextArray[i] == "page") {
		textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
	}
}

// wrong word
for (i=0; i<cleanTextArray.length; i++) {
	if (cleanTextArray[i] == "loose") {
		textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
	}
	if (cleanTextArray[i] == "irregardless") {
		textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
	}
	if (cleanTextArray[i] == "noone") {
		textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
	}
	if (cleanTextArray[i] == "like") {
		textArray[i]= '<span class="orange">'+"such as"+'</span>';
	}
}

// author's name - get from the input
/*
for (i=0; i<textArray.length; i++) {
	if (textArray[i] == <%@authorName%>) {
		textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
	}
} */

// transitions
for (i=0; i<cleanTextArray.length; i++) {
	var transitions = ["conclusion", "next", "however", "additionally", "moreover", "therefore", "overall", "even"];
	for (x=0; x<transitions.length; x++) {
  	 if (cleanTextArray[i] == transitions[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// FIND AND REPLACE

// numbers

function replaceContractions(contraction, replacement) {
	for (i=0; i<cleanTextArray.length; i++) {
		if (cleanTextArray[i] == contraction) {
			textArray[i] = '<span class="red">'+replacement+'</span>';
		}
	}
}

replaceContractions("can't", "cannot");
replaceContractions("aren't", "are not");
replaceContractions("could've", "could have");
replaceContractions("couldn't", "could not");
replaceContractions("didn't", "did not");
replaceContractions("doesn't", "does not");
replaceContractions("hasn't", "has not");
replaceContractions("haven't", "have not");
replaceContractions("how'd", "how did");
replaceContractions("how'll", "how will");
replaceContractions("it'd", "it would");
replaceContractions("it's", "it is");
replaceContractions("she's", "she is");
replaceContractions("he's", "he is");
replaceContractions("she'll", "she will");
replaceContractions("he'll", "he will");
replaceContractions("she'd", "she would");
replaceContractions("he'd", "he would");
replaceContractions("that'll", "that will");
replaceContractions("that's", "that is");
replaceContractions("they'd", "they would");
replaceContractions("they'll", "they will");
replaceContractions("they're", "they are");
replaceContractions("they've", "they have");
replaceContractions("wasn't", "was not");
replaceContractions("weren't", "were not");
replaceContractions("won't", "will not");
replaceContractions("would've", "would have");
replaceContractions("wouldn't", "would not");
replaceContractions("who'd", "who would");
replaceContractions("who'll", "who will");
replaceContractions("why'd", "why would");

function replaceNumbers(short, long) {
	for (i=0; i<cleanTextArray.length; i++) {
		if (cleanTextArray[i] == short) {
			textArray[i] = '<span class="red">'+long+'</span>';
		}
	}
}

replaceNumbers("1", "one");
replaceNumbers("2", "two");
replaceNumbers("3", "three");
replaceNumbers("4", "four");
replaceNumbers("5", "five");
replaceNumbers("6", "six");
replaceNumbers("7", "seven");
replaceNumbers("8", "eight");
replaceNumbers("9", "nine");
replaceNumbers("10", "ten");

// contractions

// wrong words

// var joinedTextArray = textArray.join(" ");
// console.log(joinedTextArray);

$('h3').html(textArray.join(" "));

// maybe after we have it joined we can do some shit w sentences and replacing words?
// jk there will be span tags

// use original string? or find words next to each other

// FIND PHRASES

// makes a decision --> decides
// comes to the conclusion --> concludes
// gives the warning --> warns
// there is/are
// chooses to
// decides to
// goes so far as to say
// throughout history
// this shows
/*for (i=0; i<cleanTextArray.length; i++){
	var badPhrases = [["makes", "the", "decision"], ["comes", "to", "the", "conclusion"], ["gives", "the", "warning"], ["there", "is"], ["there", "are"], ["chooses", "to"], ["decides", "to"], ["goes", "so", "far", "as", "to", "say"], ["throughout", "history"], ["this", "shows"]];
	for (x=0; x<badPhrases.length; x++) {
		if (cleanTextArray[i] = badPhrases[x][0]) {
			for (k=0; k<badPhrases[x].length; k++){
				if cleanTextArray
			}
		}
		//if (textArray[i] = badPhrases[0][x]) {

		//}
  	 //if (cleanTextArray[i] == badPhrases[x][1]) {
    	//textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	//}
  }
 } */

// if matches first thing in array
// use for loop to see if it matches the other things in the array
// if it does, put span tag around all of those values (another for loop?)


$(".orange").click(function() {
  $("#weakwordexplanation").toggleClass("hidden");
});

// repetition (FIX LATER)

// remove last stuff
function removeLastChar(str) {
  if (str.slice(-1) == ';') {
    var str = str.slice(0, -1);  
  }
  if (str.slice(-1) == ',') {
    var str = str.slice(0, -1);  
  }
  if (str.slice(-1) == '.') {
    var str = str.slice(0, -1);  
  }
  //console.log(str);
}
