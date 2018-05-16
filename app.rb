require 'sinatra'

get '/input' do
	erb :input
end
=begin
get '/input/result' do
	@text = "Hello. My name is Kelly. I really hope my code works."
	#replace text with user input
	textarray = @text.split
	@wordcount = textarray.length
	sentencearray = @text.split(".")
	@sentencecount = sentencearray.length
	erb :result
end
=end

post '/input/result' do
	erb :result
end

=begin
post '/result' do
end
=end