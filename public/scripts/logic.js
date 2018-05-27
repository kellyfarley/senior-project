// take in user input
var text = $('#originalUserText').html();

// convert into sentence array & take out blank spaces
var textArray = text.split(" ");
var textArrayLength = textArray.length;
var textArray = textArray.slice(1, textArrayLength-1);

// text array but without punctuation or caps
// first as string
var cleanText = text.toLowerCase();
var cleanText = cleanText.replace(/\./g, '');
var cleanText = cleanText.replace(/\,/g, '');
var cleanText = cleanText.replace(/\;/g, '');
//convert to array & take out blank spaces
var cleanTextArray = cleanText.split(" ");
var cleanTextArrayLength = cleanTextArray.length;
var cleanTextArray = cleanTextArray.slice(1, cleanTextArrayLength-1);

// weak
for (i=0; i<cleanTextArray.length; i++) {
  var weak = ["almost", "slightly", "seem", "seems", "seemed", "perhaps", "maybe"];
  for (x=0; x<weak.length; x++) {
  	 if (cleanTextArray[i] == weak[x]) {
    	textArray[i] = '<span class="magentaText">'+textArray[i]+'</span>';
  	}
  }
}

// vague nouns
for (i=0; i<cleanTextArray.length; i++) {
	var weakNouns = ["stuff", "thing", "things", "everyone", "everybody"];
	for (x=0; x<weakNouns.length; x++) {
  	 if (cleanTextArray[i] == weakNouns[x]) {
    	textArray[i]= '<span class="aquaText">'+textArray[i]+'</span>';
  	}
  }
}

// adverbs
for (i=0; i<cleanTextArray.length; i++) {
	var adverbs = ["carefully", "absolutely", "very", "happily", "quickly", "really", "finally", "seriously", "always", "badly", "exactly", "basically", "actually", "literally", "clearly", "totally", "obviously", "truly", "constantly","specifically"];
	for (x=0; x<adverbs.length; x++) {
  	 if (cleanTextArray[i] == adverbs[x]) {
    	textArray[i]= '<span class="orangeText">'+textArray[i]+'</span>';
  	}
  }
}

// fillers
for (i=0; i<cleanTextArray.length; i++){
	var fillers = ["that", "just", "only", "simply"];
	for (x=0; x<adverbs.length; x++) {
		if (cleanTextArray[i] == fillers[x]) {
    	textArray[i]= '<span class="darkRedText">'+textArray[i]+'</span>';
  		}
  	}
}

// wrong word
for (i=0; i<cleanTextArray.length; i++) {
	if (cleanTextArray[i] == "loose") {
		textArray[i]= '<span class="lightBlueText">'+lose+'</span>';
	}
	if (cleanTextArray[i] == "irregardless") {
		textArray[i]= '<span class="lightBlueText">'+"regardless"+'</span>';
	}
	if (cleanTextArray[i] == "noone") {
		textArray[i]= '<span class="lightBlueText">'+"nobody"+'</span>';
	}
}

// naked this - maybe only highlight if followed by "shows"?
for (i=0; i<cleanTextArray.length; i++) {
	var presentTense = ["happen", "happens", "persists", "persist", "seem", "seems", "am", "are", "is", "have", "has", "says", "say", "makes", "make", "goes", "go", "takes", "take", "comes", "come", "sees", "see", "knows", "know", "finds", "find", "thinks", "think", "shows", "show", "says", "say", "tells", "tell", "becomes", "become", "leaves", "leave", "puts", "put", "brings", "bring", "begins", "begin", "keeps", "keep", "holds", "hold", "writes", "write", "stands", "stand", "hears", "hear", "lets", "let", "means", "mean", "sets", "set", "meets", "meet", "run", "runs", "understand", "understands", "buys", "buy", "dies", "die", "do", "does"];
	var pastTense = ["happened", "persisted", "seemed", "was", "were", "had", "said", "made", "went", "took", "came", "saw", "knew", "got", "gave", "found", "thought", "told", "became", "showed", "left", "put", "brought", "began", "kept", "held", "wrote", "stood", "heard", "let", "meant", "set", "met", "run", "paid", "said", "understood", "bought", "worn", "died", "did"];
	if (cleanTextArray[i] == "this") {
		for (j=0; j<presentTense.length; j++){
			if (cleanTextArray[i+1] == presentTense[j]){
				textArray[i]= '<span class="lightGreenText">'+textArray[i]+'</span>';
			}
		}
		for (k=0; k<pastTense.length; k++){
			if (cleanTextArray[i+1] == pastTense[k]){
				textArray[i]= '<span class="lightGreenText">'+textArray[i]+'</span>';
			}
		}
  	}
}

// 1st person
for (i=0; i<cleanTextArray.length; i++) {
	var firstPerson = ["i", "me", "we", "our", "i'm", "i'll", "i'd", "we're", "we'd", "we'll", "my", "mine"];
	for (x=0; x<firstPerson.length; x++) {
  	 if (cleanTextArray[i] == firstPerson[x]) {
    	textArray[i]= '<span class="blueText">'+textArray[i]+'</span>';
  	}
  }
}

// 2nd person
for (i=0; i<cleanTextArray.length; i++) {
	var secondPerson = ["you", "you're", "you'll", "you'd", "yours"];
	for (x=0; x<secondPerson.length; x++) {
  	 if (cleanTextArray[i] == secondPerson[x]) {
    	textArray[i]= '<span class="darkGreenText">'+textArray[i]+'</span>';
  	}
  }
}

// find & replace contractions
function replaceContractions(contraction, replacement) {
	for (i=0; i<cleanTextArray.length; i++) {
		if (cleanTextArray[i] == contraction) {
			textArray[i] = '<span class="yellowText">'+replacement+'</span>';
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

// passive voice - what about irregulars?

// present passive voice
for (i=0; i<((cleanTextArray.length)-1); i++) {
	var presentPassiveVoice = ["am", "are", "is", "have", "has"];
	for (x=0; x<presentPassiveVoice.length; x++) {
		if (cleanTextArray[i] == presentPassiveVoice[x]) {
    		if (cleanTextArray[i+1].indexOf("ed") != -1){
	    		textArray[i] = '<span class="purpleText">'+textArray[i]+'</span>';
	    		textArray[i+1] = '<span class="purpleText">'+textArray[i+1]+'</span>';
  				}
  			var pastParticiple = ["beaten", "bent", "bitten", "blown", "broken", "chosen", "driven", "forgotten", "forgiven", "hidden", "held", "kept", "known", "led", "made", "said", "seen", "sold", "taught", "thought", "understood", "written", "kept", "taken", "given", "done", "being", "been"];
  			for (j=0; j<pastParticiple.length; j++){
  				if (textArray[i+1] == pastParticiple[j]) {
  					textArray[i] = '<span class="purpleText">'+textArray[i]+'</span>';
	    			textArray[i+1] = '<span class="purpleText">'+textArray[i+1]+'</span>';
  				}
  			}
  		}
	}
}

// past passive voice
for (i=0; i<((cleanTextArray.length)-1); i++) {
	var pastPassiveVoice = ["was", "were", "had"];
	for (x=0; x<pastPassiveVoice.length; x++) {
		if (cleanTextArray[i] == pastPassiveVoice[x]) {
    		if (cleanTextArray[i+1].indexOf("ed") != -1){
	    		textArray[i] = '<span class="purpleText">'+textArray[i]+'</span>';
	    		textArray[i+1] = '<span class="purpleText">'+textArray[i+1]+'</span>';
  				}
  			var pastParticiple = ["beaten", "bent", "bitten", "blown", "broken", "chosen", "driven", "forgotten", "forgiven", "hidden", "held", "kept", "known", "led", "made", "said", "seen", "sold", "taught", "thought", "understood", "written", "kept", "taken", "given", "done", "being", "been"];
  			for (j=0; j<pastParticiple.length; j++){
  				if (textArray[i+1] == pastParticiple[j]) {
  					textArray[i] = '<span class="purpleText">'+textArray[i]+'</span>';
	    			textArray[i+1] = '<span class="purpleText">'+textArray[i+1]+'</span>';
  				}
  			}
  		}
	}
}

// past tense (note: not applicable for history essays)
for (i=0; i<cleanTextArray.length; i++) {
	var pastTense = ["happened", "persisted", "seemed", "was", "were", "had", "said", "made", "went", "took", "came", "saw", "knew", "got", "gave", "found", "thought", "told", "became", "showed", "left", "put", "brought", "began", "kept", "held", "wrote", "stood", "heard", "let", "meant", "set", "met", "run", "paid", "said", "understood", "bought", "worn", "died", "did"];
	for (x=0; x<pastTense.length; x++) {
			if (cleanTextArray[i] == pastTense[x]) {
	    		textArray[i]= '<span class="pinkText">'+textArray[i]+'</span>';
	  		}

	}
}

// present tense (for history essays)
for (i=0; i<cleanTextArray.length; i++) {
	var presentTense = ["happen", "happens", "persists", "persist", "seem", "seems", "am", "are", "is", "have", "has", "says", "say", "makes", "make", "goes", "go", "takes", "take", "comes", "come", "sees", "see", "knows", "know", "finds", "find", "thinks", "think", "shows", "show", "says", "say", "tells", "tell", "becomes", "become", "leaves", "leave", "puts", "put", "brings", "bring", "begins", "begin", "keeps", "keep", "holds", "hold", "writes", "write", "stands", "stand", "hears", "hear", "lets", "let", "means", "mean", "sets", "set", "meets", "meet", "run", "runs", "understand", "understands", "buys", "buy", "dies", "die", "do", "does"];
	for (x=0; x<presentTense.length; x++) {
			if (cleanTextArray[i] == presentTense[x]) {
	    		textArray[i]= '<span class="darkPinkText">'+textArray[i]+'</span>';
	  		}
	}
}

// repetition
var repetitionArray = [];
var newRepetitionArray = [];

for(i=0; i<cleanTextArray.length; i++){
	// if the first index isn't the same as the last index, must show up at least twice
	if (cleanTextArray.indexOf(cleanTextArray[i]) != cleanTextArray.lastIndexOf(cleanTextArray[i])){
		repetitionArray.push(cleanTextArray[i]);
	}
}

// sort repetition array alphabetically
var repetitionArray = repetitionArray.sort();
console.log(repetitionArray);

var wordCount = textArray.length;
var maxRepetition = wordCount * 0.01;

for (i=0; i<repetitionArray.length; i++){
	console.log("this is the word " + repetitionArray[i]);
	var count = 0;
	for (z=0; z<repetitionArray.length; z++){
		if (repetitionArray[i] == repetitionArray[z]){
			var count = count + 1;
		}
	}
	console.log("this is count " + count);
	if (count > maxRepetition){
		newRepetitionArray.push(repetitionArray[i]);
	}
}
console.log("new" + newRepetitionArray);
// take out repetitions from array
var uniqueRepetitionArray = Array.from(new Set(newRepetitionArray));
var repetitionsToIgnore = ["a", "the", "of", "to", "and", "with", "as", "at", "for", "on", "it", "in", "there", "their", "is", "they", "i", "has", "be", "when", "not", "are", "that", "more", "this", "my", "was", "what", "about"];
	for(j=0; j<repetitionsToIgnore.length; j++){
		var index = uniqueRepetitionArray.indexOf(repetitionsToIgnore[j]);
		if (index != -1){
			uniqueRepetitionArray.splice(index, 1);
		}
	}
console.log(uniqueRepetitionArray);
for (i=0; i<cleanTextArray.length; i++){
	for (x=0; x<uniqueRepetitionArray.length; x++){
		if (cleanTextArray[i] == uniqueRepetitionArray[x]){
			textArray[i] = '<span class="redText">'+textArray[i]+'</span>';
		}
	}
}
// could look into stemming if have time - remove ed, ing, ly - search for substrings?

// sentences starting the same way

// sentence length variation (FIX LATER)

// highlight very long or very short sentence (FIX LATER)
/*var sentenceArray = text.split(".");
sentenceArray.pop();

var firstWordIndexArray = [];
		var lastWordIndexArray = [];

for (i=0; i<sentenceArray.length; i++) {
	var individualSentenceArray = sentenceArray[i];
	var individualSentenceArray = individualSentenceArray.split(" ");
	if (individualSentenceArray[0]==""){
		var individualSentenceArray = individualSentenceArray.slice(1, individualSentenceArray.length);
	}
	if(individualSentenceArray.length>30){
		var firstWord = sentenceArray[i][0];
		for (j=0; j<cleanTextArray.length; j++){
			if (cleanTextArray[j] == firstWord) {
				firstWordIndexArray.push(i);
			}
		}
		var lastWord = sentenceArray[i][sentenceArray.length-1];
	}
}*/
		/*var lastWord = sentenceArray[i][sentenceArray.length-1];
		var lastWordIndexArray = [];
		for (i=0; i<cleanTextArray.length; i++) {
			if (cleanTextArray[i] == lastWord) {
				lastWordIndexArray.push(i);
			}
		}
		console.log(firstWordIndexArray);
		console.log(lastWordIndexArray);
		//if firstWordIndexArray[i] + lastWordIndexArray =
		//var firstWordIndex = textArray[i].indexOf("sentenceArray[i][0]");
		//textArray[i]= '<span class="purple">'+textArray[i]+'</span>';
		var firstWord = sentenceArray[i][0];
		var firstWordIndex = textArray.indexOf(firstWord);
		var lastWord = sentenceArray[i][(sentenceArray.length)-1];
		var lastWordIndex = textArray.indexOf(lastWord);
		for (i=firstWordIndex; i<lastWordIndex; i++){
			textArray[i]= '<span class="red">'+textArray[i]+'</span>';
		}
	}
} /*
	if (sentenceArray[i].length > 30) {
		var firstWord = sentenceArray[i][0];
		var firstWordIndexArray = [];
		for (i=0; i<cleanTextArray.length; i++) {
			if (cleanTextArray[i] == firstWord) {
				firstWordIndexArray.push(i);
			}
		}
		var lastWord = sentenceArray[i][sentenceArray.length-1];
		var lastWordIndexArray = [];
		for (i=0; i<cleanTextArray.length; i++) {
			if (cleanTextArray[i] == lastWord) {
				lastWordIndexArray.push(i);
			}
		}
		console.log(firstWordIndexArray);
		console.log(lastWordIndexArray);
		//if firstWordIndexArray[i] + lastWordIndexArray =
		//var firstWordIndex = textArray[i].indexOf("sentenceArray[i][0]");
		//textArray[i]= '<span class="purple">'+textArray[i]+'</span>';
		var firstWord = sentenceArray[i][0];
		var firstWordIndex = textArray.indexOf(firstWord);
		var lastWord = sentenceArray[i][(sentenceArray.length)-1];
		var lastWordIndex = textArray.indexOf(lastWord);
		for (i=firstWordIndex; i<lastWordIndex; i++){
			textArray[i]= '<span class="red">'+textArray[i]+'</span>';
		}
	}
}

var sentenceArray = text.split(".");
sentenceArray.pop();
console.log(sentenceArray); */
/*
for (i=0; i<sentenceArray.lenth; i++){
	//if (sentenceArray[i].length>2){
		var firstWord = sentenceArray[i][0];
		var firstWordIndexArray = [];
		for (i=0; i<cleanTextArray.length; i++) {
			if (cleanTextArray[i] == firstWord) {
				firstWordIndexArray.push(i);
			}
		}
		var lastWord = sentenceArray[i][sentenceArray.length-1];
		var lastWordIndexArray = [];
		for (i=0; i<cleanTextArray.length; i++) {
			if (cleanTextArray[i] == lastWord) {
				lastWordIndexArray.push(i);
			}
		}
		console.log(firstWordIndexArray);
		console.log(lastWordIndexArray);
		//if firstWordIndexArray[i] + lastWordIndexArray =
		//var firstWordIndex = textArray[i].indexOf("sentenceArray[i][0]");
		//textArray[i]= '<span class="purple">'+textArray[i]+'</span>';
		//var firstWord = sentenceArray[i][0];
		//var firstWordIndex = textArray.indexOf(firstWord);
		//var lastWord = sentenceArray[i][(sentenceArray.length)-1];
		//var lastWordIndex = textArray.indexOf(lastWord);
		//for (i=firstWordIndex; i<lastWordIndex; i++){
			//textArray[i]= '<span class="red">'+textArray[i]+'</span>';	
	}
for(i=0; i<sentenceArray.length; i++){
	var string = sentenceArray[i];
	var string = string.substr(1);
	console.log(string);
}

// try again FOR THE FOURTH TIME
var sentenceArray = text.split(".");
sentenceArray.pop();

for(i=0; i<sentenceArray.length; i++){
	var individualSentenceArray = sentenceArray[i];
	var individualSentenceArray = individualSentenceArray.split(" ");
	if (individualSentenceArray[0]==""){
		var individualSentenceArray = individualSentenceArray.slice(1, individualSentenceArray.length);
	}
	var firstWord = individualSentenceArray[0];
	var lastWord = individualSentenceArray[(individualSentenceArray.length)-1];
	console.log(firstWord);
	console.log(lastWord);
	var firstWordIndex = cleanTextArray.indexOf(firstWord);
	var lastWordIndex = cleanTextArray.indexOf(lastWord);
	console.log(firstWordIndex);
	console.log(lastWordIndex);
	if (individualSentenceArray.length > 3) {
		for(i=firstWordIndex; i<(lastWordIndex+1); i++){
			textArray[i] = '<span class="orangeText">'+textArray[i]+'</span>';
		}
	}
}

else if (individualSentenceArray.length < 5) {
	for(i=firstWordIndex; i<(lastWordIndex+1); i++){
		textArray[i] = '<span class="orangeText">'+textArray[i]+'</span>';
	} } */

// replace html w/ marked up version
console.log(textArray);
$('#editedUserText').html(textArray.join(" "));


// explanations
$(".aquaText").hover(function() {
	$("#vagueNounExplanation").toggleClass("hidden");
	$("#vagueNounTitle").toggleClass("hidden");
});

$(".orangeText").hover(function() {
	$("#adverbExplanation").toggleClass("hidden");
	$("#adverbTitle").toggleClass("hidden");
});

$(".lightBlueText").hover(function() {
	$("#misusedExplanation").toggleClass("hidden");
	$("#miusedTitle").toggleClass("hidden");
});

$(".lightGreenText").hover(function() {
	$("#nakedThisExplanation").toggleClass("hidden");
	$("#nakedThisTitle").toggleClass("hidden");
});

$(".magentaText").hover(function() {
	$("#weakExplanation").toggleClass("hidden");
	$("#weakTitle").toggleClass("hidden");
});

$(".blueText").hover(function() {
	$("#firstPersonExplanation").toggleClass("hidden");
	$("#firstPersonTitle").toggleClass("hidden");
});

$(".darkGreenText").hover(function() {
	$("#secondPersonExplanation").toggleClass("hidden");
	$("#secondPersonTitle").toggleClass("hidden");
});

$(".yellowText").hover(function() {
	$("#contractionsExplanation").toggleClass("hidden");
	$("#contractionsTitle").toggleClass("hidden");
});

$(".purpleText").hover(function() {
	$("#passiveVoiceExplanation").toggleClass("hidden");
	$("#passiveVoiceTitle").toggleClass("hidden");
});

$(".pinkText").hover(function() {
	$("#pastTenseExplanation").toggleClass("hidden");
	$("#pastTenseTitle").toggleClass("hidden");
});

$(".darkRedText").hover(function() {
	$("#fillerExplanation").toggleClass("hidden");
	$("#fillerTitle").toggleClass("hidden");
});

$(".darkPinkText").hover(function() {
	$("#presentTenseExplanation").toggleClass("hidden");
	$("#presentTenseTitle").toggleClass("hidden");
});

// repetition count
$(".redText").hover(function() {
	var count = 0;
	var repeatedWord = $(event.target).text();
	var repeatedWord = repeatedWord.toLowerCase();
	if (repeatedWord.indexOf(".") != -1){
		var repeatedWord = repeatedWord.slice(0, -1);
	}
	if (repeatedWord.indexOf(",") != -1){
		var repeatedWord = repeatedWord.slice(0, -1);
	}
	for (i=0; i<cleanTextArray.length; i++){
		if (cleanTextArray[i] == repeatedWord) {
			var count = count + 1;
		}
	}
	$("#repetitionExplanation").html("You've used this word repeatedly - maybe try to change it up to avoid boring the reader. You've used this word "+count+" times.");
	$("#repetitionExplanation").toggleClass("hidden");
	$("#repetitionTitle").toggleClass("hidden");
});

// hover over repeated word
/*$(".orangeText").hover(function(){
    $(this).css("background-color", "white");
    }, function(){
    $(this).css("background-color", "pink");
}); */

// console.log($('#editedUserText span'));
/*$('#editedUserText span').on("click", function(){
	console.log(this);
}); */

// if have time: weak phrases
// makes a decision --> decides
// comes to the conclusion --> concludes
// gives the warning --> warns
// there is/are
// chooses to
// decides to
// goes so far as to say
// throughout history
// this shows
/* for (i=0; i<cleanTextArray.length; i++){
	var badPhrases = [["makes", "the", "decision"], ["comes", "to", "the", "conclusion"], ["gives", "the", "warning"], ["there", "is"], ["there", "are"], ["chooses", "to"], ["decides", "to"], ["goes", "so", "far", "as", "to", "say"], ["throughout", "history"], ["this", "shows"]];
	for (x=0; x<badPhrases.length; x++) {
		if (cleanTextArray[i] = badPhrases[x][0]) {
			for (k=0; k<badPhrases[x].length; k++){
				if cleanTextArray
			}
		}
		//if (textArray[i] = badPhrases[0][x]) {

		//}
  	 //if (cleanTextArray[i] == badPhrases[x][1]) 
    	//textArray[i]= '<span class="orange">'+textArray[i]+'</span>';
  	//}
  }
 } */

 // $('form button').on('click', function(event){
 	// event.preventDefault();

 	// whatever logic
 // });