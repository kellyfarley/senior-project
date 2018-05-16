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
//var text = <%@userInput%>
var text = "you'll be back soon you'll see it's all page however page good I swear isn't it lovely very lovely"

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

// vague nouns
for (i=0; i<textArray.length; i++) {
	var weakNouns = ["stuff", "thing", "things", "everyone", "everybody"];
	for (x=0; x<weakNouns.length; x++) {
  	 if (textArray[i] == weakNouns[x]) {
    	textArray[i]= '<span class="purple">'+textArray[i]+'</span>';
  	}
  }
}

// overused words (WHY IS THIS BEING PURPLE)
for (i=0; i<textArray.length; i++) {
	var weakWords = ["good", "like", "just", "evilness", "there", "large", "like"];
	for (x=0; x<weakWords.length; x++) {
  	 if (textArray[i] == weakWords[x]) {
    	textArray[i]= '<span class="green">'+textArray[i]+'</span>';
  	}
  }
}
// replace "like" with "such as"?

// passive voice
for (i=0; i<textArray.length; i++) {
	var passiveVoice = ["is", "am", "are"];
	for (x=0; x<passiveVoice.length; x++) {
  	 if (textArray[i] == passiveVoice[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// naked this
for (i=0; i<textArray.length; i++) {
	if (textArray[i] == "this") {
    	textArray[i]= '<span class="yellow">'+textArray[i]+'</span>';
  	}
}

// 2nd person
for (i=0; i<textArray.length; i++) {
	var secondPerson = ["you", "you're", "you'll", "you'd"];
	for (x=0; x<secondPerson.length; x++) {
  	 if (textArray[i] == secondPerson[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// first person
for (i=0; i<textArray.length; i++) {
	var firstPerson = ["I", "me", "we", "our", "I'm", "I'll", "I'd", "we're", "we'd", "we'll"];
	for (x=0; x<firstPerson.length; x++) {
  	 if (textArray[i] == firstPerson[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// adverbs
for (i=0; i<textArray.length; i++) {
	var adverbs = ["carefully", "very", "happily", "quickly", "really", "finally", "seriously", "always", "badly", "exactly", "basically", "actually", "literally", "clearly", "totally", "obviously", "truly", "constantly","specifically"];
	for (x=0; x<adverbs.length; x++) {
  	 if (textArray[i] == adverbs[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// past tense - check for words ending in ED? not applicable for history
for (i=0; i<textArray.length; i++) {
	var pastTense = ["said", "made", "went", "took", "came", "saw", "knew", "got", "gave", "found", "thought", "told", "became", "showed", "left", "put", "brought", "began", "kept", "held", "wrote", "stood", "heard", "let", "meant", "set", "met", "run", "paid", "said", "understood", "bought", "worn", "died", "was", "were", "did"];
	for (x=0; x<adverbs.length; x++) {
  	 if (textArray[i] == adverbs[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// page
for (i=0; i<textArray.length; i++) {
	if (textArray[i] == "page") {
		textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
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
for (i=0; i<textArray.length; i++) {
	var transitions = ["conclusion", "next", "however", "additionally", "moreover", "therefore", "overall", "even"];
	for (x=0; x<transitions.length; x++) {
  	 if (textArray[i] == transitions[x]) {
    	textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	}
  }
}

// FIND PHRASES

// weak quote intro

// bad phrases

// FIND AND REPLACE

// numbers

// contractions

// wrong words

$('h3').html(textArray.join(" "));

$(".orange").click(function() {
  $("#weakwordexplanation").toggleClass("hidden");
});

// repetition (FIX LATER)
