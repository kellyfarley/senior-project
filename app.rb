require 'sinatra'

get '/' do
	erb :input
end

post '/result' do
	@userText = params[:userInput]
	#word count
	@userText = @userText.to_s
	@userTextArray = @userText.split(" ")
	@wordCount = @userTextArray.length
	#sentence count
	@sentenceArray = @userText.split(".")
	@sentenceCount = @sentenceArray.length
	#average word length
	@characterCount = @userText.length
	@letterCount = @characterCount - @wordCount + 1
	@avgWord = @letterCount / @wordCount
	#average sentence length
	@avgSentence = @wordCount / @sentenceCount
	#for using form data & making it teacher specific
	@teacher = params[:teacher]
	#for using form data & making it skill specific
	@repetitionSkill = params[:repetition]
	@nakedThisSkill = params[:nakedThis]
	@passiveVoiceSkill = params[:passiveVoice]
	@pastTenseSkill = params[:pastTense]
	@presentTenseSkill = params[:presentTense]
	@firstPersonSkill = params[:firstPerson]
	@secondPersonSkill = params[:secondPerson]
	@adverbsSkill = params[:adverbs]
	@weakSkill = params[:weak]
	@fillerSkill = params[:filler]
	@vagueNounSkill = params[:vagueNoun]
	@contractionsSkill = params[:contractions]
	erb :result
end