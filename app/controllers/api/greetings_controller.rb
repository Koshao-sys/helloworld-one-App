class Api::GreetingsController < ApplicationController
  def hello
    random_number = rand(1..5)
    @greeting = Greeting.find(random_number)
    render json: @greeting
  end
end