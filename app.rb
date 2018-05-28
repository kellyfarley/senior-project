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
	# for making it teacher specific
	@teacher = params[:teacher]
	erb :result
end