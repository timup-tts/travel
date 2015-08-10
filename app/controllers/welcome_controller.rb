class WelcomeController < ApplicationController
  def index
    @homeland = 'Italy'
    @countries = ['Norway','Sweden','Peru', 'Russia', 'Japan']

    @travel_pics = ['italy_1.jpg','italy_2.jpg','italy_3.jpg','italy_4.jpg']
  end

  def about
    @color = params[:color]

    if @color == 'black' || @color == 'blue'
      @fontcolor = 'white'
    else
      @fontcolor = 'black'
    end

    @size = params[:size].to_i

    # http://localhost:3000/about?color=teal&size=12&fontcolor=coral
  end

  def contact
  end
end
